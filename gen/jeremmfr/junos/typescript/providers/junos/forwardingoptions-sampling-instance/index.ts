// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingoptionsSamplingInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable sampling instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#disable ForwardingoptionsSamplingInstance#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Name for sampling instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#name ForwardingoptionsSamplingInstance#name}
  */
  readonly name: string;
  /**
  * Routing instance for sampling instance if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#routing_instance ForwardingoptionsSamplingInstance#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * family_inet6_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#family_inet6_input ForwardingoptionsSamplingInstance#family_inet6_input}
  */
  readonly familyInet6Input?: ForwardingoptionsSamplingInstanceFamilyInet6Input;
  /**
  * family_inet6_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#family_inet6_output ForwardingoptionsSamplingInstance#family_inet6_output}
  */
  readonly familyInet6Output?: ForwardingoptionsSamplingInstanceFamilyInet6Output;
  /**
  * family_inet_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#family_inet_input ForwardingoptionsSamplingInstance#family_inet_input}
  */
  readonly familyInetInput?: ForwardingoptionsSamplingInstanceFamilyInetInput;
  /**
  * family_inet_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#family_inet_output ForwardingoptionsSamplingInstance#family_inet_output}
  */
  readonly familyInetOutput?: ForwardingoptionsSamplingInstanceFamilyInetOutput;
  /**
  * family_mpls_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#family_mpls_input ForwardingoptionsSamplingInstance#family_mpls_input}
  */
  readonly familyMplsInput?: ForwardingoptionsSamplingInstanceFamilyMplsInput;
  /**
  * family_mpls_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#family_mpls_output ForwardingoptionsSamplingInstance#family_mpls_output}
  */
  readonly familyMplsOutput?: ForwardingoptionsSamplingInstanceFamilyMplsOutput;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#input ForwardingoptionsSamplingInstance#input}
  */
  readonly input?: ForwardingoptionsSamplingInstanceInput;
}
export interface ForwardingoptionsSamplingInstanceFamilyInet6Input {
  /**
  * Threshold of samples per second before dropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#max_packets_per_second ForwardingoptionsSamplingInstance#max_packets_per_second}
  */
  readonly maxPacketsPerSecond?: number;
  /**
  * Maximum length of the sampled packet (0..9192 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#maximum_packet_length ForwardingoptionsSamplingInstance#maximum_packet_length}
  */
  readonly maximumPacketLength?: number;
  /**
  * Ratio of packets to be sampled (1 out of N) (1..16000000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#rate ForwardingoptionsSamplingInstance#rate}
  */
  readonly rate?: number;
  /**
  * Number of samples after initial trigger (0..20).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#run_length ForwardingoptionsSamplingInstance#run_length}
  */
  readonly runLength?: number;
}

export function forwardingoptionsSamplingInstanceFamilyInet6InputToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInet6Input | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_packets_per_second: cdktf.numberToTerraform(struct!.maxPacketsPerSecond),
    maximum_packet_length: cdktf.numberToTerraform(struct!.maximumPacketLength),
    rate: cdktf.numberToTerraform(struct!.rate),
    run_length: cdktf.numberToTerraform(struct!.runLength),
  }
}


export function forwardingoptionsSamplingInstanceFamilyInet6InputToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInet6Input | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_packets_per_second: {
      value: cdktf.numberToHclTerraform(struct!.maxPacketsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_packet_length: {
      value: cdktf.numberToHclTerraform(struct!.maximumPacketLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_length: {
      value: cdktf.numberToHclTerraform(struct!.runLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyInet6InputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyInet6Input | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPacketsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacketsPerSecond = this._maxPacketsPerSecond;
    }
    if (this._maximumPacketLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPacketLength = this._maximumPacketLength;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._runLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.runLength = this._runLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyInet6Input | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPacketsPerSecond = undefined;
      this._maximumPacketLength = undefined;
      this._rate = undefined;
      this._runLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPacketsPerSecond = value.maxPacketsPerSecond;
      this._maximumPacketLength = value.maximumPacketLength;
      this._rate = value.rate;
      this._runLength = value.runLength;
    }
  }

  // max_packets_per_second - computed: false, optional: true, required: false
  private _maxPacketsPerSecond?: number; 
  public get maxPacketsPerSecond() {
    return this.getNumberAttribute('max_packets_per_second');
  }
  public set maxPacketsPerSecond(value: number) {
    this._maxPacketsPerSecond = value;
  }
  public resetMaxPacketsPerSecond() {
    this._maxPacketsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketsPerSecondInput() {
    return this._maxPacketsPerSecond;
  }

  // maximum_packet_length - computed: false, optional: true, required: false
  private _maximumPacketLength?: number; 
  public get maximumPacketLength() {
    return this.getNumberAttribute('maximum_packet_length');
  }
  public set maximumPacketLength(value: number) {
    this._maximumPacketLength = value;
  }
  public resetMaximumPacketLength() {
    this._maximumPacketLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPacketLengthInput() {
    return this._maximumPacketLength;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // run_length - computed: false, optional: true, required: false
  private _runLength?: number; 
  public get runLength() {
    return this.getNumberAttribute('run_length');
  }
  public set runLength(value: number) {
    this._runLength = value;
  }
  public resetRunLength() {
    this._runLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLengthInput() {
    return this._runLength;
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServer {
  /**
  * Aggregate by autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_autonomous_system ForwardingoptionsSamplingInstance#aggregation_autonomous_system}
  */
  readonly aggregationAutonomousSystem?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_destination_prefix ForwardingoptionsSamplingInstance#aggregation_destination_prefix}
  */
  readonly aggregationDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by protocol and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_protocol_port ForwardingoptionsSamplingInstance#aggregation_protocol_port}
  */
  readonly aggregationProtocolPort?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source and destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_source_destination_prefix ForwardingoptionsSamplingInstance#aggregation_source_destination_prefix}
  */
  readonly aggregationSourceDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Compatible with Caida record format for prefix aggregation (v8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_source_destination_prefix_caida_compliant ForwardingoptionsSamplingInstance#aggregation_source_destination_prefix_caida_compliant}
  */
  readonly aggregationSourceDestinationPrefixCaidaCompliant?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_source_prefix ForwardingoptionsSamplingInstance#aggregation_source_prefix}
  */
  readonly aggregationSourcePrefix?: boolean | cdktf.IResolvable;
  /**
  * Type of autonomous system number to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#autonomous_system_type ForwardingoptionsSamplingInstance#autonomous_system_type}
  */
  readonly autonomousSystemType?: string;
  /**
  * Numeric DSCP value in the range 0 to 63 (0..63).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#dscp ForwardingoptionsSamplingInstance#dscp}
  */
  readonly dscp?: number;
  /**
  * Forwarding-class for exported jflow packets, applicable only for inline-jflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#forwarding_class ForwardingoptionsSamplingInstance#forwarding_class}
  */
  readonly forwardingClass?: string;
  /**
  * Name of host collecting cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#hostname ForwardingoptionsSamplingInstance#hostname}
  */
  readonly hostname: string;
  /**
  * Dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#local_dump ForwardingoptionsSamplingInstance#local_dump}
  */
  readonly localDump?: boolean | cdktf.IResolvable;
  /**
  * Don't dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#no_local_dump ForwardingoptionsSamplingInstance#no_local_dump}
  */
  readonly noLocalDump?: boolean | cdktf.IResolvable;
  /**
  * UDP port number on host collecting cflowd packets (1..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#port ForwardingoptionsSamplingInstance#port}
  */
  readonly port: number;
  /**
  * Name of routing instance on which flow collector is reachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#routing_instance ForwardingoptionsSamplingInstance#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Source IPv4 address for cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#source_address ForwardingoptionsSamplingInstance#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Template to export data in version 9 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#version9_template ForwardingoptionsSamplingInstance#version9_template}
  */
  readonly version9Template?: string;
  /**
  * Template to export data in version ipfix format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#version_ipfix_template ForwardingoptionsSamplingInstance#version_ipfix_template}
  */
  readonly versionIpfixTemplate?: string;
}

export function forwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_autonomous_system: cdktf.booleanToTerraform(struct!.aggregationAutonomousSystem),
    aggregation_destination_prefix: cdktf.booleanToTerraform(struct!.aggregationDestinationPrefix),
    aggregation_protocol_port: cdktf.booleanToTerraform(struct!.aggregationProtocolPort),
    aggregation_source_destination_prefix: cdktf.booleanToTerraform(struct!.aggregationSourceDestinationPrefix),
    aggregation_source_destination_prefix_caida_compliant: cdktf.booleanToTerraform(struct!.aggregationSourceDestinationPrefixCaidaCompliant),
    aggregation_source_prefix: cdktf.booleanToTerraform(struct!.aggregationSourcePrefix),
    autonomous_system_type: cdktf.stringToTerraform(struct!.autonomousSystemType),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    forwarding_class: cdktf.stringToTerraform(struct!.forwardingClass),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    local_dump: cdktf.booleanToTerraform(struct!.localDump),
    no_local_dump: cdktf.booleanToTerraform(struct!.noLocalDump),
    port: cdktf.numberToTerraform(struct!.port),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    version9_template: cdktf.stringToTerraform(struct!.version9Template),
    version_ipfix_template: cdktf.stringToTerraform(struct!.versionIpfixTemplate),
  }
}


export function forwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_autonomous_system: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationAutonomousSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_destination_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationDestinationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_protocol_port: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationProtocolPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_source_destination_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationSourceDestinationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_source_destination_prefix_caida_compliant: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationSourceDestinationPrefixCaidaCompliant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_source_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationSourcePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autonomous_system_type: {
      value: cdktf.stringToHclTerraform(struct!.autonomousSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forwarding_class: {
      value: cdktf.stringToHclTerraform(struct!.forwardingClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_dump: {
      value: cdktf.booleanToHclTerraform(struct!.localDump),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_local_dump: {
      value: cdktf.booleanToHclTerraform(struct!.noLocalDump),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    version9_template: {
      value: cdktf.stringToHclTerraform(struct!.version9Template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_ipfix_template: {
      value: cdktf.stringToHclTerraform(struct!.versionIpfixTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationAutonomousSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationAutonomousSystem = this._aggregationAutonomousSystem;
    }
    if (this._aggregationDestinationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationDestinationPrefix = this._aggregationDestinationPrefix;
    }
    if (this._aggregationProtocolPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationProtocolPort = this._aggregationProtocolPort;
    }
    if (this._aggregationSourceDestinationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSourceDestinationPrefix = this._aggregationSourceDestinationPrefix;
    }
    if (this._aggregationSourceDestinationPrefixCaidaCompliant !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSourceDestinationPrefixCaidaCompliant = this._aggregationSourceDestinationPrefixCaidaCompliant;
    }
    if (this._aggregationSourcePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSourcePrefix = this._aggregationSourcePrefix;
    }
    if (this._autonomousSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousSystemType = this._autonomousSystemType;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._forwardingClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClass = this._forwardingClass;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._localDump !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDump = this._localDump;
    }
    if (this._noLocalDump !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLocalDump = this._noLocalDump;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._version9Template !== undefined) {
      hasAnyValues = true;
      internalValueResult.version9Template = this._version9Template;
    }
    if (this._versionIpfixTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionIpfixTemplate = this._versionIpfixTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregationAutonomousSystem = undefined;
      this._aggregationDestinationPrefix = undefined;
      this._aggregationProtocolPort = undefined;
      this._aggregationSourceDestinationPrefix = undefined;
      this._aggregationSourceDestinationPrefixCaidaCompliant = undefined;
      this._aggregationSourcePrefix = undefined;
      this._autonomousSystemType = undefined;
      this._dscp = undefined;
      this._forwardingClass = undefined;
      this._hostname = undefined;
      this._localDump = undefined;
      this._noLocalDump = undefined;
      this._port = undefined;
      this._routingInstance = undefined;
      this._sourceAddress = undefined;
      this._version9Template = undefined;
      this._versionIpfixTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregationAutonomousSystem = value.aggregationAutonomousSystem;
      this._aggregationDestinationPrefix = value.aggregationDestinationPrefix;
      this._aggregationProtocolPort = value.aggregationProtocolPort;
      this._aggregationSourceDestinationPrefix = value.aggregationSourceDestinationPrefix;
      this._aggregationSourceDestinationPrefixCaidaCompliant = value.aggregationSourceDestinationPrefixCaidaCompliant;
      this._aggregationSourcePrefix = value.aggregationSourcePrefix;
      this._autonomousSystemType = value.autonomousSystemType;
      this._dscp = value.dscp;
      this._forwardingClass = value.forwardingClass;
      this._hostname = value.hostname;
      this._localDump = value.localDump;
      this._noLocalDump = value.noLocalDump;
      this._port = value.port;
      this._routingInstance = value.routingInstance;
      this._sourceAddress = value.sourceAddress;
      this._version9Template = value.version9Template;
      this._versionIpfixTemplate = value.versionIpfixTemplate;
    }
  }

  // aggregation_autonomous_system - computed: false, optional: true, required: false
  private _aggregationAutonomousSystem?: boolean | cdktf.IResolvable; 
  public get aggregationAutonomousSystem() {
    return this.getBooleanAttribute('aggregation_autonomous_system');
  }
  public set aggregationAutonomousSystem(value: boolean | cdktf.IResolvable) {
    this._aggregationAutonomousSystem = value;
  }
  public resetAggregationAutonomousSystem() {
    this._aggregationAutonomousSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationAutonomousSystemInput() {
    return this._aggregationAutonomousSystem;
  }

  // aggregation_destination_prefix - computed: false, optional: true, required: false
  private _aggregationDestinationPrefix?: boolean | cdktf.IResolvable; 
  public get aggregationDestinationPrefix() {
    return this.getBooleanAttribute('aggregation_destination_prefix');
  }
  public set aggregationDestinationPrefix(value: boolean | cdktf.IResolvable) {
    this._aggregationDestinationPrefix = value;
  }
  public resetAggregationDestinationPrefix() {
    this._aggregationDestinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationDestinationPrefixInput() {
    return this._aggregationDestinationPrefix;
  }

  // aggregation_protocol_port - computed: false, optional: true, required: false
  private _aggregationProtocolPort?: boolean | cdktf.IResolvable; 
  public get aggregationProtocolPort() {
    return this.getBooleanAttribute('aggregation_protocol_port');
  }
  public set aggregationProtocolPort(value: boolean | cdktf.IResolvable) {
    this._aggregationProtocolPort = value;
  }
  public resetAggregationProtocolPort() {
    this._aggregationProtocolPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationProtocolPortInput() {
    return this._aggregationProtocolPort;
  }

  // aggregation_source_destination_prefix - computed: false, optional: true, required: false
  private _aggregationSourceDestinationPrefix?: boolean | cdktf.IResolvable; 
  public get aggregationSourceDestinationPrefix() {
    return this.getBooleanAttribute('aggregation_source_destination_prefix');
  }
  public set aggregationSourceDestinationPrefix(value: boolean | cdktf.IResolvable) {
    this._aggregationSourceDestinationPrefix = value;
  }
  public resetAggregationSourceDestinationPrefix() {
    this._aggregationSourceDestinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSourceDestinationPrefixInput() {
    return this._aggregationSourceDestinationPrefix;
  }

  // aggregation_source_destination_prefix_caida_compliant - computed: false, optional: true, required: false
  private _aggregationSourceDestinationPrefixCaidaCompliant?: boolean | cdktf.IResolvable; 
  public get aggregationSourceDestinationPrefixCaidaCompliant() {
    return this.getBooleanAttribute('aggregation_source_destination_prefix_caida_compliant');
  }
  public set aggregationSourceDestinationPrefixCaidaCompliant(value: boolean | cdktf.IResolvable) {
    this._aggregationSourceDestinationPrefixCaidaCompliant = value;
  }
  public resetAggregationSourceDestinationPrefixCaidaCompliant() {
    this._aggregationSourceDestinationPrefixCaidaCompliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSourceDestinationPrefixCaidaCompliantInput() {
    return this._aggregationSourceDestinationPrefixCaidaCompliant;
  }

  // aggregation_source_prefix - computed: false, optional: true, required: false
  private _aggregationSourcePrefix?: boolean | cdktf.IResolvable; 
  public get aggregationSourcePrefix() {
    return this.getBooleanAttribute('aggregation_source_prefix');
  }
  public set aggregationSourcePrefix(value: boolean | cdktf.IResolvable) {
    this._aggregationSourcePrefix = value;
  }
  public resetAggregationSourcePrefix() {
    this._aggregationSourcePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSourcePrefixInput() {
    return this._aggregationSourcePrefix;
  }

  // autonomous_system_type - computed: false, optional: true, required: false
  private _autonomousSystemType?: string; 
  public get autonomousSystemType() {
    return this.getStringAttribute('autonomous_system_type');
  }
  public set autonomousSystemType(value: string) {
    this._autonomousSystemType = value;
  }
  public resetAutonomousSystemType() {
    this._autonomousSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSystemTypeInput() {
    return this._autonomousSystemType;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // forwarding_class - computed: false, optional: true, required: false
  private _forwardingClass?: string; 
  public get forwardingClass() {
    return this.getStringAttribute('forwarding_class');
  }
  public set forwardingClass(value: string) {
    this._forwardingClass = value;
  }
  public resetForwardingClass() {
    this._forwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassInput() {
    return this._forwardingClass;
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

  // local_dump - computed: false, optional: true, required: false
  private _localDump?: boolean | cdktf.IResolvable; 
  public get localDump() {
    return this.getBooleanAttribute('local_dump');
  }
  public set localDump(value: boolean | cdktf.IResolvable) {
    this._localDump = value;
  }
  public resetLocalDump() {
    this._localDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDumpInput() {
    return this._localDump;
  }

  // no_local_dump - computed: false, optional: true, required: false
  private _noLocalDump?: boolean | cdktf.IResolvable; 
  public get noLocalDump() {
    return this.getBooleanAttribute('no_local_dump');
  }
  public set noLocalDump(value: boolean | cdktf.IResolvable) {
    this._noLocalDump = value;
  }
  public resetNoLocalDump() {
    this._noLocalDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLocalDumpInput() {
    return this._noLocalDump;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // version9_template - computed: false, optional: true, required: false
  private _version9Template?: string; 
  public get version9Template() {
    return this.getStringAttribute('version9_template');
  }
  public set version9Template(value: string) {
    this._version9Template = value;
  }
  public resetVersion9Template() {
    this._version9Template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get version9TemplateInput() {
    return this._version9Template;
  }

  // version_ipfix_template - computed: false, optional: true, required: false
  private _versionIpfixTemplate?: string; 
  public get versionIpfixTemplate() {
    return this.getStringAttribute('version_ipfix_template');
  }
  public set versionIpfixTemplate(value: string) {
    this._versionIpfixTemplate = value;
  }
  public resetVersionIpfixTemplate() {
    this._versionIpfixTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIpfixTemplateInput() {
    return this._versionIpfixTemplate;
  }
}

export class ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServer[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerOutputReference {
    return new ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyInet6OutputInterface {
  /**
  * Identity (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#engine_id ForwardingoptionsSamplingInstance#engine_id}
  */
  readonly engineId?: number;
  /**
  * Type (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#engine_type ForwardingoptionsSamplingInstance#engine_type}
  */
  readonly engineType?: number;
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#name ForwardingoptionsSamplingInstance#name}
  */
  readonly name: string;
  /**
  * Address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#source_address ForwardingoptionsSamplingInstance#source_address}
  */
  readonly sourceAddress?: string;
}

export function forwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInet6OutputInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine_id: cdktf.numberToTerraform(struct!.engineId),
    engine_type: cdktf.numberToTerraform(struct!.engineType),
    name: cdktf.stringToTerraform(struct!.name),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function forwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInet6OutputInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine_id: {
      value: cdktf.numberToHclTerraform(struct!.engineId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    engine_type: {
      value: cdktf.numberToHclTerraform(struct!.engineType),
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
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyInet6OutputInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineId = this._engineId;
    }
    if (this._engineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineType = this._engineType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyInet6OutputInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engineId = undefined;
      this._engineType = undefined;
      this._name = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engineId = value.engineId;
      this._engineType = value.engineType;
      this._name = value.name;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: number; 
  public get engineId() {
    return this.getNumberAttribute('engine_id');
  }
  public set engineId(value: number) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // engine_type - computed: false, optional: true, required: false
  private _engineType?: number; 
  public get engineType() {
    return this.getNumberAttribute('engine_type');
  }
  public set engineType(value: number) {
    this._engineType = value;
  }
  public resetEngineType() {
    this._engineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
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
}

export class ForwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingInstanceFamilyInet6OutputInterface[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceOutputReference {
    return new ForwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyInet6Output {
  /**
  * Interval of exporting aggregate accounting information (90..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregate_export_interval ForwardingoptionsSamplingInstance#aggregate_export_interval}
  */
  readonly aggregateExportInterval?: number;
  /**
  * Define the customer specific sampling configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#extension_service ForwardingoptionsSamplingInstance#extension_service}
  */
  readonly extensionService?: string[];
  /**
  * Interval after which an active flow is exported (60..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#flow_active_timeout ForwardingoptionsSamplingInstance#flow_active_timeout}
  */
  readonly flowActiveTimeout?: number;
  /**
  * Interval of inactivity that marks a flow inactive (15..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#flow_inactive_timeout ForwardingoptionsSamplingInstance#flow_inactive_timeout}
  */
  readonly flowInactiveTimeout?: number;
  /**
  * Inline processing of sampled packets with flow export rate of monitored packets in kpps (1..3200).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#inline_jflow_export_rate ForwardingoptionsSamplingInstance#inline_jflow_export_rate}
  */
  readonly inlineJflowExportRate?: number;
  /**
  * Inline processing of sampled packets with address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#inline_jflow_source_address ForwardingoptionsSamplingInstance#inline_jflow_source_address}
  */
  readonly inlineJflowSourceAddress?: string;
  /**
  * flow_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#flow_server ForwardingoptionsSamplingInstance#flow_server}
  */
  readonly flowServer?: ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServer[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#interface ForwardingoptionsSamplingInstance#interface}
  */
  readonly interface?: ForwardingoptionsSamplingInstanceFamilyInet6OutputInterface[] | cdktf.IResolvable;
}

export function forwardingoptionsSamplingInstanceFamilyInet6OutputToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInet6Output | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_export_interval: cdktf.numberToTerraform(struct!.aggregateExportInterval),
    extension_service: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extensionService),
    flow_active_timeout: cdktf.numberToTerraform(struct!.flowActiveTimeout),
    flow_inactive_timeout: cdktf.numberToTerraform(struct!.flowInactiveTimeout),
    inline_jflow_export_rate: cdktf.numberToTerraform(struct!.inlineJflowExportRate),
    inline_jflow_source_address: cdktf.stringToTerraform(struct!.inlineJflowSourceAddress),
    flow_server: cdktf.listMapper(forwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerToTerraform, true)(struct!.flowServer),
    interface: cdktf.listMapper(forwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceToTerraform, true)(struct!.interface),
  }
}


export function forwardingoptionsSamplingInstanceFamilyInet6OutputToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInet6Output | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_export_interval: {
      value: cdktf.numberToHclTerraform(struct!.aggregateExportInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extension_service: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extensionService),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    flow_active_timeout: {
      value: cdktf.numberToHclTerraform(struct!.flowActiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_inactive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.flowInactiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inline_jflow_export_rate: {
      value: cdktf.numberToHclTerraform(struct!.inlineJflowExportRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inline_jflow_source_address: {
      value: cdktf.stringToHclTerraform(struct!.inlineJflowSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_server: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerToHclTerraform, true)(struct!.flowServer),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerList",
    },
    interface: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyInet6OutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyInet6Output | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateExportInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateExportInterval = this._aggregateExportInterval;
    }
    if (this._extensionService !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionService = this._extensionService;
    }
    if (this._flowActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowActiveTimeout = this._flowActiveTimeout;
    }
    if (this._flowInactiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowInactiveTimeout = this._flowInactiveTimeout;
    }
    if (this._inlineJflowExportRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineJflowExportRate = this._inlineJflowExportRate;
    }
    if (this._inlineJflowSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineJflowSourceAddress = this._inlineJflowSourceAddress;
    }
    if (this._flowServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowServer = this._flowServer?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyInet6Output | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateExportInterval = undefined;
      this._extensionService = undefined;
      this._flowActiveTimeout = undefined;
      this._flowInactiveTimeout = undefined;
      this._inlineJflowExportRate = undefined;
      this._inlineJflowSourceAddress = undefined;
      this._flowServer.internalValue = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateExportInterval = value.aggregateExportInterval;
      this._extensionService = value.extensionService;
      this._flowActiveTimeout = value.flowActiveTimeout;
      this._flowInactiveTimeout = value.flowInactiveTimeout;
      this._inlineJflowExportRate = value.inlineJflowExportRate;
      this._inlineJflowSourceAddress = value.inlineJflowSourceAddress;
      this._flowServer.internalValue = value.flowServer;
      this._interface.internalValue = value.interface;
    }
  }

  // aggregate_export_interval - computed: false, optional: true, required: false
  private _aggregateExportInterval?: number; 
  public get aggregateExportInterval() {
    return this.getNumberAttribute('aggregate_export_interval');
  }
  public set aggregateExportInterval(value: number) {
    this._aggregateExportInterval = value;
  }
  public resetAggregateExportInterval() {
    this._aggregateExportInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateExportIntervalInput() {
    return this._aggregateExportInterval;
  }

  // extension_service - computed: false, optional: true, required: false
  private _extensionService?: string[]; 
  public get extensionService() {
    return this.getListAttribute('extension_service');
  }
  public set extensionService(value: string[]) {
    this._extensionService = value;
  }
  public resetExtensionService() {
    this._extensionService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionServiceInput() {
    return this._extensionService;
  }

  // flow_active_timeout - computed: false, optional: true, required: false
  private _flowActiveTimeout?: number; 
  public get flowActiveTimeout() {
    return this.getNumberAttribute('flow_active_timeout');
  }
  public set flowActiveTimeout(value: number) {
    this._flowActiveTimeout = value;
  }
  public resetFlowActiveTimeout() {
    this._flowActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowActiveTimeoutInput() {
    return this._flowActiveTimeout;
  }

  // flow_inactive_timeout - computed: false, optional: true, required: false
  private _flowInactiveTimeout?: number; 
  public get flowInactiveTimeout() {
    return this.getNumberAttribute('flow_inactive_timeout');
  }
  public set flowInactiveTimeout(value: number) {
    this._flowInactiveTimeout = value;
  }
  public resetFlowInactiveTimeout() {
    this._flowInactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInactiveTimeoutInput() {
    return this._flowInactiveTimeout;
  }

  // inline_jflow_export_rate - computed: false, optional: true, required: false
  private _inlineJflowExportRate?: number; 
  public get inlineJflowExportRate() {
    return this.getNumberAttribute('inline_jflow_export_rate');
  }
  public set inlineJflowExportRate(value: number) {
    this._inlineJflowExportRate = value;
  }
  public resetInlineJflowExportRate() {
    this._inlineJflowExportRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineJflowExportRateInput() {
    return this._inlineJflowExportRate;
  }

  // inline_jflow_source_address - computed: false, optional: true, required: false
  private _inlineJflowSourceAddress?: string; 
  public get inlineJflowSourceAddress() {
    return this.getStringAttribute('inline_jflow_source_address');
  }
  public set inlineJflowSourceAddress(value: string) {
    this._inlineJflowSourceAddress = value;
  }
  public resetInlineJflowSourceAddress() {
    this._inlineJflowSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineJflowSourceAddressInput() {
    return this._inlineJflowSourceAddress;
  }

  // flow_server - computed: false, optional: true, required: false
  private _flowServer = new ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServerList(this, "flow_server", true);
  public get flowServer() {
    return this._flowServer;
  }
  public putFlowServer(value: ForwardingoptionsSamplingInstanceFamilyInet6OutputFlowServer[] | cdktf.IResolvable) {
    this._flowServer.internalValue = value;
  }
  public resetFlowServer() {
    this._flowServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowServerInput() {
    return this._flowServer.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new ForwardingoptionsSamplingInstanceFamilyInet6OutputInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ForwardingoptionsSamplingInstanceFamilyInet6OutputInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyInetInput {
  /**
  * Threshold of samples per second before dropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#max_packets_per_second ForwardingoptionsSamplingInstance#max_packets_per_second}
  */
  readonly maxPacketsPerSecond?: number;
  /**
  * Maximum length of the sampled packet (0..9192 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#maximum_packet_length ForwardingoptionsSamplingInstance#maximum_packet_length}
  */
  readonly maximumPacketLength?: number;
  /**
  * Ratio of packets to be sampled (1 out of N) (1..16000000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#rate ForwardingoptionsSamplingInstance#rate}
  */
  readonly rate?: number;
  /**
  * Number of samples after initial trigger (0..20).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#run_length ForwardingoptionsSamplingInstance#run_length}
  */
  readonly runLength?: number;
}

export function forwardingoptionsSamplingInstanceFamilyInetInputToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInetInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_packets_per_second: cdktf.numberToTerraform(struct!.maxPacketsPerSecond),
    maximum_packet_length: cdktf.numberToTerraform(struct!.maximumPacketLength),
    rate: cdktf.numberToTerraform(struct!.rate),
    run_length: cdktf.numberToTerraform(struct!.runLength),
  }
}


export function forwardingoptionsSamplingInstanceFamilyInetInputToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInetInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_packets_per_second: {
      value: cdktf.numberToHclTerraform(struct!.maxPacketsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_packet_length: {
      value: cdktf.numberToHclTerraform(struct!.maximumPacketLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_length: {
      value: cdktf.numberToHclTerraform(struct!.runLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyInetInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyInetInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPacketsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacketsPerSecond = this._maxPacketsPerSecond;
    }
    if (this._maximumPacketLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPacketLength = this._maximumPacketLength;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._runLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.runLength = this._runLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyInetInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPacketsPerSecond = undefined;
      this._maximumPacketLength = undefined;
      this._rate = undefined;
      this._runLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPacketsPerSecond = value.maxPacketsPerSecond;
      this._maximumPacketLength = value.maximumPacketLength;
      this._rate = value.rate;
      this._runLength = value.runLength;
    }
  }

  // max_packets_per_second - computed: false, optional: true, required: false
  private _maxPacketsPerSecond?: number; 
  public get maxPacketsPerSecond() {
    return this.getNumberAttribute('max_packets_per_second');
  }
  public set maxPacketsPerSecond(value: number) {
    this._maxPacketsPerSecond = value;
  }
  public resetMaxPacketsPerSecond() {
    this._maxPacketsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketsPerSecondInput() {
    return this._maxPacketsPerSecond;
  }

  // maximum_packet_length - computed: false, optional: true, required: false
  private _maximumPacketLength?: number; 
  public get maximumPacketLength() {
    return this.getNumberAttribute('maximum_packet_length');
  }
  public set maximumPacketLength(value: number) {
    this._maximumPacketLength = value;
  }
  public resetMaximumPacketLength() {
    this._maximumPacketLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPacketLengthInput() {
    return this._maximumPacketLength;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // run_length - computed: false, optional: true, required: false
  private _runLength?: number; 
  public get runLength() {
    return this.getNumberAttribute('run_length');
  }
  public set runLength(value: number) {
    this._runLength = value;
  }
  public resetRunLength() {
    this._runLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLengthInput() {
    return this._runLength;
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServer {
  /**
  * Aggregate by autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_autonomous_system ForwardingoptionsSamplingInstance#aggregation_autonomous_system}
  */
  readonly aggregationAutonomousSystem?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_destination_prefix ForwardingoptionsSamplingInstance#aggregation_destination_prefix}
  */
  readonly aggregationDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by protocol and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_protocol_port ForwardingoptionsSamplingInstance#aggregation_protocol_port}
  */
  readonly aggregationProtocolPort?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source and destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_source_destination_prefix ForwardingoptionsSamplingInstance#aggregation_source_destination_prefix}
  */
  readonly aggregationSourceDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Compatible with Caida record format for prefix aggregation (v8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_source_destination_prefix_caida_compliant ForwardingoptionsSamplingInstance#aggregation_source_destination_prefix_caida_compliant}
  */
  readonly aggregationSourceDestinationPrefixCaidaCompliant?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_source_prefix ForwardingoptionsSamplingInstance#aggregation_source_prefix}
  */
  readonly aggregationSourcePrefix?: boolean | cdktf.IResolvable;
  /**
  * Type of autonomous system number to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#autonomous_system_type ForwardingoptionsSamplingInstance#autonomous_system_type}
  */
  readonly autonomousSystemType?: string;
  /**
  * Numeric DSCP value in the range 0 to 63 (0..63).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#dscp ForwardingoptionsSamplingInstance#dscp}
  */
  readonly dscp?: number;
  /**
  * Forwarding-class for exported jflow packets, applicable only for inline-jflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#forwarding_class ForwardingoptionsSamplingInstance#forwarding_class}
  */
  readonly forwardingClass?: string;
  /**
  * Name of host collecting cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#hostname ForwardingoptionsSamplingInstance#hostname}
  */
  readonly hostname: string;
  /**
  * Dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#local_dump ForwardingoptionsSamplingInstance#local_dump}
  */
  readonly localDump?: boolean | cdktf.IResolvable;
  /**
  * Don't dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#no_local_dump ForwardingoptionsSamplingInstance#no_local_dump}
  */
  readonly noLocalDump?: boolean | cdktf.IResolvable;
  /**
  * UDP port number on host collecting cflowd packets (1..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#port ForwardingoptionsSamplingInstance#port}
  */
  readonly port: number;
  /**
  * Name of routing instance on which flow collector is reachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#routing_instance ForwardingoptionsSamplingInstance#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Source IPv4 address for cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#source_address ForwardingoptionsSamplingInstance#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Format of exported cflowd aggregates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#version ForwardingoptionsSamplingInstance#version}
  */
  readonly version?: number;
  /**
  * Template to export data in version 9 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#version9_template ForwardingoptionsSamplingInstance#version9_template}
  */
  readonly version9Template?: string;
  /**
  * Template to export data in version ipfix format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#version_ipfix_template ForwardingoptionsSamplingInstance#version_ipfix_template}
  */
  readonly versionIpfixTemplate?: string;
}

export function forwardingoptionsSamplingInstanceFamilyInetOutputFlowServerToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_autonomous_system: cdktf.booleanToTerraform(struct!.aggregationAutonomousSystem),
    aggregation_destination_prefix: cdktf.booleanToTerraform(struct!.aggregationDestinationPrefix),
    aggregation_protocol_port: cdktf.booleanToTerraform(struct!.aggregationProtocolPort),
    aggregation_source_destination_prefix: cdktf.booleanToTerraform(struct!.aggregationSourceDestinationPrefix),
    aggregation_source_destination_prefix_caida_compliant: cdktf.booleanToTerraform(struct!.aggregationSourceDestinationPrefixCaidaCompliant),
    aggregation_source_prefix: cdktf.booleanToTerraform(struct!.aggregationSourcePrefix),
    autonomous_system_type: cdktf.stringToTerraform(struct!.autonomousSystemType),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    forwarding_class: cdktf.stringToTerraform(struct!.forwardingClass),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    local_dump: cdktf.booleanToTerraform(struct!.localDump),
    no_local_dump: cdktf.booleanToTerraform(struct!.noLocalDump),
    port: cdktf.numberToTerraform(struct!.port),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    version: cdktf.numberToTerraform(struct!.version),
    version9_template: cdktf.stringToTerraform(struct!.version9Template),
    version_ipfix_template: cdktf.stringToTerraform(struct!.versionIpfixTemplate),
  }
}


export function forwardingoptionsSamplingInstanceFamilyInetOutputFlowServerToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_autonomous_system: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationAutonomousSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_destination_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationDestinationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_protocol_port: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationProtocolPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_source_destination_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationSourceDestinationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_source_destination_prefix_caida_compliant: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationSourceDestinationPrefixCaidaCompliant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_source_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationSourcePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autonomous_system_type: {
      value: cdktf.stringToHclTerraform(struct!.autonomousSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forwarding_class: {
      value: cdktf.stringToHclTerraform(struct!.forwardingClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_dump: {
      value: cdktf.booleanToHclTerraform(struct!.localDump),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_local_dump: {
      value: cdktf.booleanToHclTerraform(struct!.noLocalDump),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version9_template: {
      value: cdktf.stringToHclTerraform(struct!.version9Template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_ipfix_template: {
      value: cdktf.stringToHclTerraform(struct!.versionIpfixTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationAutonomousSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationAutonomousSystem = this._aggregationAutonomousSystem;
    }
    if (this._aggregationDestinationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationDestinationPrefix = this._aggregationDestinationPrefix;
    }
    if (this._aggregationProtocolPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationProtocolPort = this._aggregationProtocolPort;
    }
    if (this._aggregationSourceDestinationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSourceDestinationPrefix = this._aggregationSourceDestinationPrefix;
    }
    if (this._aggregationSourceDestinationPrefixCaidaCompliant !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSourceDestinationPrefixCaidaCompliant = this._aggregationSourceDestinationPrefixCaidaCompliant;
    }
    if (this._aggregationSourcePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSourcePrefix = this._aggregationSourcePrefix;
    }
    if (this._autonomousSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousSystemType = this._autonomousSystemType;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._forwardingClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClass = this._forwardingClass;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._localDump !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDump = this._localDump;
    }
    if (this._noLocalDump !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLocalDump = this._noLocalDump;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._version9Template !== undefined) {
      hasAnyValues = true;
      internalValueResult.version9Template = this._version9Template;
    }
    if (this._versionIpfixTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionIpfixTemplate = this._versionIpfixTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregationAutonomousSystem = undefined;
      this._aggregationDestinationPrefix = undefined;
      this._aggregationProtocolPort = undefined;
      this._aggregationSourceDestinationPrefix = undefined;
      this._aggregationSourceDestinationPrefixCaidaCompliant = undefined;
      this._aggregationSourcePrefix = undefined;
      this._autonomousSystemType = undefined;
      this._dscp = undefined;
      this._forwardingClass = undefined;
      this._hostname = undefined;
      this._localDump = undefined;
      this._noLocalDump = undefined;
      this._port = undefined;
      this._routingInstance = undefined;
      this._sourceAddress = undefined;
      this._version = undefined;
      this._version9Template = undefined;
      this._versionIpfixTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregationAutonomousSystem = value.aggregationAutonomousSystem;
      this._aggregationDestinationPrefix = value.aggregationDestinationPrefix;
      this._aggregationProtocolPort = value.aggregationProtocolPort;
      this._aggregationSourceDestinationPrefix = value.aggregationSourceDestinationPrefix;
      this._aggregationSourceDestinationPrefixCaidaCompliant = value.aggregationSourceDestinationPrefixCaidaCompliant;
      this._aggregationSourcePrefix = value.aggregationSourcePrefix;
      this._autonomousSystemType = value.autonomousSystemType;
      this._dscp = value.dscp;
      this._forwardingClass = value.forwardingClass;
      this._hostname = value.hostname;
      this._localDump = value.localDump;
      this._noLocalDump = value.noLocalDump;
      this._port = value.port;
      this._routingInstance = value.routingInstance;
      this._sourceAddress = value.sourceAddress;
      this._version = value.version;
      this._version9Template = value.version9Template;
      this._versionIpfixTemplate = value.versionIpfixTemplate;
    }
  }

  // aggregation_autonomous_system - computed: false, optional: true, required: false
  private _aggregationAutonomousSystem?: boolean | cdktf.IResolvable; 
  public get aggregationAutonomousSystem() {
    return this.getBooleanAttribute('aggregation_autonomous_system');
  }
  public set aggregationAutonomousSystem(value: boolean | cdktf.IResolvable) {
    this._aggregationAutonomousSystem = value;
  }
  public resetAggregationAutonomousSystem() {
    this._aggregationAutonomousSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationAutonomousSystemInput() {
    return this._aggregationAutonomousSystem;
  }

  // aggregation_destination_prefix - computed: false, optional: true, required: false
  private _aggregationDestinationPrefix?: boolean | cdktf.IResolvable; 
  public get aggregationDestinationPrefix() {
    return this.getBooleanAttribute('aggregation_destination_prefix');
  }
  public set aggregationDestinationPrefix(value: boolean | cdktf.IResolvable) {
    this._aggregationDestinationPrefix = value;
  }
  public resetAggregationDestinationPrefix() {
    this._aggregationDestinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationDestinationPrefixInput() {
    return this._aggregationDestinationPrefix;
  }

  // aggregation_protocol_port - computed: false, optional: true, required: false
  private _aggregationProtocolPort?: boolean | cdktf.IResolvable; 
  public get aggregationProtocolPort() {
    return this.getBooleanAttribute('aggregation_protocol_port');
  }
  public set aggregationProtocolPort(value: boolean | cdktf.IResolvable) {
    this._aggregationProtocolPort = value;
  }
  public resetAggregationProtocolPort() {
    this._aggregationProtocolPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationProtocolPortInput() {
    return this._aggregationProtocolPort;
  }

  // aggregation_source_destination_prefix - computed: false, optional: true, required: false
  private _aggregationSourceDestinationPrefix?: boolean | cdktf.IResolvable; 
  public get aggregationSourceDestinationPrefix() {
    return this.getBooleanAttribute('aggregation_source_destination_prefix');
  }
  public set aggregationSourceDestinationPrefix(value: boolean | cdktf.IResolvable) {
    this._aggregationSourceDestinationPrefix = value;
  }
  public resetAggregationSourceDestinationPrefix() {
    this._aggregationSourceDestinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSourceDestinationPrefixInput() {
    return this._aggregationSourceDestinationPrefix;
  }

  // aggregation_source_destination_prefix_caida_compliant - computed: false, optional: true, required: false
  private _aggregationSourceDestinationPrefixCaidaCompliant?: boolean | cdktf.IResolvable; 
  public get aggregationSourceDestinationPrefixCaidaCompliant() {
    return this.getBooleanAttribute('aggregation_source_destination_prefix_caida_compliant');
  }
  public set aggregationSourceDestinationPrefixCaidaCompliant(value: boolean | cdktf.IResolvable) {
    this._aggregationSourceDestinationPrefixCaidaCompliant = value;
  }
  public resetAggregationSourceDestinationPrefixCaidaCompliant() {
    this._aggregationSourceDestinationPrefixCaidaCompliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSourceDestinationPrefixCaidaCompliantInput() {
    return this._aggregationSourceDestinationPrefixCaidaCompliant;
  }

  // aggregation_source_prefix - computed: false, optional: true, required: false
  private _aggregationSourcePrefix?: boolean | cdktf.IResolvable; 
  public get aggregationSourcePrefix() {
    return this.getBooleanAttribute('aggregation_source_prefix');
  }
  public set aggregationSourcePrefix(value: boolean | cdktf.IResolvable) {
    this._aggregationSourcePrefix = value;
  }
  public resetAggregationSourcePrefix() {
    this._aggregationSourcePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSourcePrefixInput() {
    return this._aggregationSourcePrefix;
  }

  // autonomous_system_type - computed: false, optional: true, required: false
  private _autonomousSystemType?: string; 
  public get autonomousSystemType() {
    return this.getStringAttribute('autonomous_system_type');
  }
  public set autonomousSystemType(value: string) {
    this._autonomousSystemType = value;
  }
  public resetAutonomousSystemType() {
    this._autonomousSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSystemTypeInput() {
    return this._autonomousSystemType;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // forwarding_class - computed: false, optional: true, required: false
  private _forwardingClass?: string; 
  public get forwardingClass() {
    return this.getStringAttribute('forwarding_class');
  }
  public set forwardingClass(value: string) {
    this._forwardingClass = value;
  }
  public resetForwardingClass() {
    this._forwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassInput() {
    return this._forwardingClass;
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

  // local_dump - computed: false, optional: true, required: false
  private _localDump?: boolean | cdktf.IResolvable; 
  public get localDump() {
    return this.getBooleanAttribute('local_dump');
  }
  public set localDump(value: boolean | cdktf.IResolvable) {
    this._localDump = value;
  }
  public resetLocalDump() {
    this._localDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDumpInput() {
    return this._localDump;
  }

  // no_local_dump - computed: false, optional: true, required: false
  private _noLocalDump?: boolean | cdktf.IResolvable; 
  public get noLocalDump() {
    return this.getBooleanAttribute('no_local_dump');
  }
  public set noLocalDump(value: boolean | cdktf.IResolvable) {
    this._noLocalDump = value;
  }
  public resetNoLocalDump() {
    this._noLocalDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLocalDumpInput() {
    return this._noLocalDump;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version9_template - computed: false, optional: true, required: false
  private _version9Template?: string; 
  public get version9Template() {
    return this.getStringAttribute('version9_template');
  }
  public set version9Template(value: string) {
    this._version9Template = value;
  }
  public resetVersion9Template() {
    this._version9Template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get version9TemplateInput() {
    return this._version9Template;
  }

  // version_ipfix_template - computed: false, optional: true, required: false
  private _versionIpfixTemplate?: string; 
  public get versionIpfixTemplate() {
    return this.getStringAttribute('version_ipfix_template');
  }
  public set versionIpfixTemplate(value: string) {
    this._versionIpfixTemplate = value;
  }
  public resetVersionIpfixTemplate() {
    this._versionIpfixTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIpfixTemplateInput() {
    return this._versionIpfixTemplate;
  }
}

export class ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServerList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServer[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServerOutputReference {
    return new ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyInetOutputInterface {
  /**
  * Identity (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#engine_id ForwardingoptionsSamplingInstance#engine_id}
  */
  readonly engineId?: number;
  /**
  * Type (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#engine_type ForwardingoptionsSamplingInstance#engine_type}
  */
  readonly engineType?: number;
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#name ForwardingoptionsSamplingInstance#name}
  */
  readonly name: string;
  /**
  * Address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#source_address ForwardingoptionsSamplingInstance#source_address}
  */
  readonly sourceAddress?: string;
}

export function forwardingoptionsSamplingInstanceFamilyInetOutputInterfaceToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInetOutputInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine_id: cdktf.numberToTerraform(struct!.engineId),
    engine_type: cdktf.numberToTerraform(struct!.engineType),
    name: cdktf.stringToTerraform(struct!.name),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function forwardingoptionsSamplingInstanceFamilyInetOutputInterfaceToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInetOutputInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine_id: {
      value: cdktf.numberToHclTerraform(struct!.engineId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    engine_type: {
      value: cdktf.numberToHclTerraform(struct!.engineType),
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
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyInetOutputInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyInetOutputInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineId = this._engineId;
    }
    if (this._engineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineType = this._engineType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyInetOutputInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engineId = undefined;
      this._engineType = undefined;
      this._name = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engineId = value.engineId;
      this._engineType = value.engineType;
      this._name = value.name;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: number; 
  public get engineId() {
    return this.getNumberAttribute('engine_id');
  }
  public set engineId(value: number) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // engine_type - computed: false, optional: true, required: false
  private _engineType?: number; 
  public get engineType() {
    return this.getNumberAttribute('engine_type');
  }
  public set engineType(value: number) {
    this._engineType = value;
  }
  public resetEngineType() {
    this._engineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
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
}

export class ForwardingoptionsSamplingInstanceFamilyInetOutputInterfaceList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingInstanceFamilyInetOutputInterface[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingInstanceFamilyInetOutputInterfaceOutputReference {
    return new ForwardingoptionsSamplingInstanceFamilyInetOutputInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyInetOutput {
  /**
  * Interval of exporting aggregate accounting information (90..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregate_export_interval ForwardingoptionsSamplingInstance#aggregate_export_interval}
  */
  readonly aggregateExportInterval?: number;
  /**
  * Define the customer specific sampling configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#extension_service ForwardingoptionsSamplingInstance#extension_service}
  */
  readonly extensionService?: string[];
  /**
  * Interval after which an active flow is exported (60..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#flow_active_timeout ForwardingoptionsSamplingInstance#flow_active_timeout}
  */
  readonly flowActiveTimeout?: number;
  /**
  * Interval of inactivity that marks a flow inactive (15..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#flow_inactive_timeout ForwardingoptionsSamplingInstance#flow_inactive_timeout}
  */
  readonly flowInactiveTimeout?: number;
  /**
  * Inline processing of sampled packets with flow export rate of monitored packets in kpps (1..3200).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#inline_jflow_export_rate ForwardingoptionsSamplingInstance#inline_jflow_export_rate}
  */
  readonly inlineJflowExportRate?: number;
  /**
  * Inline processing of sampled packets with address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#inline_jflow_source_address ForwardingoptionsSamplingInstance#inline_jflow_source_address}
  */
  readonly inlineJflowSourceAddress?: string;
  /**
  * flow_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#flow_server ForwardingoptionsSamplingInstance#flow_server}
  */
  readonly flowServer?: ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServer[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#interface ForwardingoptionsSamplingInstance#interface}
  */
  readonly interface?: ForwardingoptionsSamplingInstanceFamilyInetOutputInterface[] | cdktf.IResolvable;
}

export function forwardingoptionsSamplingInstanceFamilyInetOutputToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInetOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_export_interval: cdktf.numberToTerraform(struct!.aggregateExportInterval),
    extension_service: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extensionService),
    flow_active_timeout: cdktf.numberToTerraform(struct!.flowActiveTimeout),
    flow_inactive_timeout: cdktf.numberToTerraform(struct!.flowInactiveTimeout),
    inline_jflow_export_rate: cdktf.numberToTerraform(struct!.inlineJflowExportRate),
    inline_jflow_source_address: cdktf.stringToTerraform(struct!.inlineJflowSourceAddress),
    flow_server: cdktf.listMapper(forwardingoptionsSamplingInstanceFamilyInetOutputFlowServerToTerraform, true)(struct!.flowServer),
    interface: cdktf.listMapper(forwardingoptionsSamplingInstanceFamilyInetOutputInterfaceToTerraform, true)(struct!.interface),
  }
}


export function forwardingoptionsSamplingInstanceFamilyInetOutputToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyInetOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_export_interval: {
      value: cdktf.numberToHclTerraform(struct!.aggregateExportInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extension_service: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extensionService),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    flow_active_timeout: {
      value: cdktf.numberToHclTerraform(struct!.flowActiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_inactive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.flowInactiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inline_jflow_export_rate: {
      value: cdktf.numberToHclTerraform(struct!.inlineJflowExportRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inline_jflow_source_address: {
      value: cdktf.stringToHclTerraform(struct!.inlineJflowSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_server: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingInstanceFamilyInetOutputFlowServerToHclTerraform, true)(struct!.flowServer),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServerList",
    },
    interface: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingInstanceFamilyInetOutputInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardingoptionsSamplingInstanceFamilyInetOutputInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyInetOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyInetOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateExportInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateExportInterval = this._aggregateExportInterval;
    }
    if (this._extensionService !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionService = this._extensionService;
    }
    if (this._flowActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowActiveTimeout = this._flowActiveTimeout;
    }
    if (this._flowInactiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowInactiveTimeout = this._flowInactiveTimeout;
    }
    if (this._inlineJflowExportRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineJflowExportRate = this._inlineJflowExportRate;
    }
    if (this._inlineJflowSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineJflowSourceAddress = this._inlineJflowSourceAddress;
    }
    if (this._flowServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowServer = this._flowServer?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyInetOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateExportInterval = undefined;
      this._extensionService = undefined;
      this._flowActiveTimeout = undefined;
      this._flowInactiveTimeout = undefined;
      this._inlineJflowExportRate = undefined;
      this._inlineJflowSourceAddress = undefined;
      this._flowServer.internalValue = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateExportInterval = value.aggregateExportInterval;
      this._extensionService = value.extensionService;
      this._flowActiveTimeout = value.flowActiveTimeout;
      this._flowInactiveTimeout = value.flowInactiveTimeout;
      this._inlineJflowExportRate = value.inlineJflowExportRate;
      this._inlineJflowSourceAddress = value.inlineJflowSourceAddress;
      this._flowServer.internalValue = value.flowServer;
      this._interface.internalValue = value.interface;
    }
  }

  // aggregate_export_interval - computed: false, optional: true, required: false
  private _aggregateExportInterval?: number; 
  public get aggregateExportInterval() {
    return this.getNumberAttribute('aggregate_export_interval');
  }
  public set aggregateExportInterval(value: number) {
    this._aggregateExportInterval = value;
  }
  public resetAggregateExportInterval() {
    this._aggregateExportInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateExportIntervalInput() {
    return this._aggregateExportInterval;
  }

  // extension_service - computed: false, optional: true, required: false
  private _extensionService?: string[]; 
  public get extensionService() {
    return this.getListAttribute('extension_service');
  }
  public set extensionService(value: string[]) {
    this._extensionService = value;
  }
  public resetExtensionService() {
    this._extensionService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionServiceInput() {
    return this._extensionService;
  }

  // flow_active_timeout - computed: false, optional: true, required: false
  private _flowActiveTimeout?: number; 
  public get flowActiveTimeout() {
    return this.getNumberAttribute('flow_active_timeout');
  }
  public set flowActiveTimeout(value: number) {
    this._flowActiveTimeout = value;
  }
  public resetFlowActiveTimeout() {
    this._flowActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowActiveTimeoutInput() {
    return this._flowActiveTimeout;
  }

  // flow_inactive_timeout - computed: false, optional: true, required: false
  private _flowInactiveTimeout?: number; 
  public get flowInactiveTimeout() {
    return this.getNumberAttribute('flow_inactive_timeout');
  }
  public set flowInactiveTimeout(value: number) {
    this._flowInactiveTimeout = value;
  }
  public resetFlowInactiveTimeout() {
    this._flowInactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInactiveTimeoutInput() {
    return this._flowInactiveTimeout;
  }

  // inline_jflow_export_rate - computed: false, optional: true, required: false
  private _inlineJflowExportRate?: number; 
  public get inlineJflowExportRate() {
    return this.getNumberAttribute('inline_jflow_export_rate');
  }
  public set inlineJflowExportRate(value: number) {
    this._inlineJflowExportRate = value;
  }
  public resetInlineJflowExportRate() {
    this._inlineJflowExportRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineJflowExportRateInput() {
    return this._inlineJflowExportRate;
  }

  // inline_jflow_source_address - computed: false, optional: true, required: false
  private _inlineJflowSourceAddress?: string; 
  public get inlineJflowSourceAddress() {
    return this.getStringAttribute('inline_jflow_source_address');
  }
  public set inlineJflowSourceAddress(value: string) {
    this._inlineJflowSourceAddress = value;
  }
  public resetInlineJflowSourceAddress() {
    this._inlineJflowSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineJflowSourceAddressInput() {
    return this._inlineJflowSourceAddress;
  }

  // flow_server - computed: false, optional: true, required: false
  private _flowServer = new ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServerList(this, "flow_server", true);
  public get flowServer() {
    return this._flowServer;
  }
  public putFlowServer(value: ForwardingoptionsSamplingInstanceFamilyInetOutputFlowServer[] | cdktf.IResolvable) {
    this._flowServer.internalValue = value;
  }
  public resetFlowServer() {
    this._flowServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowServerInput() {
    return this._flowServer.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new ForwardingoptionsSamplingInstanceFamilyInetOutputInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ForwardingoptionsSamplingInstanceFamilyInetOutputInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyMplsInput {
  /**
  * Threshold of samples per second before dropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#max_packets_per_second ForwardingoptionsSamplingInstance#max_packets_per_second}
  */
  readonly maxPacketsPerSecond?: number;
  /**
  * Maximum length of the sampled packet (0..9192 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#maximum_packet_length ForwardingoptionsSamplingInstance#maximum_packet_length}
  */
  readonly maximumPacketLength?: number;
  /**
  * Ratio of packets to be sampled (1 out of N) (1..16000000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#rate ForwardingoptionsSamplingInstance#rate}
  */
  readonly rate?: number;
  /**
  * Number of samples after initial trigger (0..20).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#run_length ForwardingoptionsSamplingInstance#run_length}
  */
  readonly runLength?: number;
}

export function forwardingoptionsSamplingInstanceFamilyMplsInputToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyMplsInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_packets_per_second: cdktf.numberToTerraform(struct!.maxPacketsPerSecond),
    maximum_packet_length: cdktf.numberToTerraform(struct!.maximumPacketLength),
    rate: cdktf.numberToTerraform(struct!.rate),
    run_length: cdktf.numberToTerraform(struct!.runLength),
  }
}


export function forwardingoptionsSamplingInstanceFamilyMplsInputToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyMplsInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_packets_per_second: {
      value: cdktf.numberToHclTerraform(struct!.maxPacketsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_packet_length: {
      value: cdktf.numberToHclTerraform(struct!.maximumPacketLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_length: {
      value: cdktf.numberToHclTerraform(struct!.runLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyMplsInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyMplsInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPacketsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacketsPerSecond = this._maxPacketsPerSecond;
    }
    if (this._maximumPacketLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPacketLength = this._maximumPacketLength;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._runLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.runLength = this._runLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyMplsInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPacketsPerSecond = undefined;
      this._maximumPacketLength = undefined;
      this._rate = undefined;
      this._runLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPacketsPerSecond = value.maxPacketsPerSecond;
      this._maximumPacketLength = value.maximumPacketLength;
      this._rate = value.rate;
      this._runLength = value.runLength;
    }
  }

  // max_packets_per_second - computed: false, optional: true, required: false
  private _maxPacketsPerSecond?: number; 
  public get maxPacketsPerSecond() {
    return this.getNumberAttribute('max_packets_per_second');
  }
  public set maxPacketsPerSecond(value: number) {
    this._maxPacketsPerSecond = value;
  }
  public resetMaxPacketsPerSecond() {
    this._maxPacketsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketsPerSecondInput() {
    return this._maxPacketsPerSecond;
  }

  // maximum_packet_length - computed: false, optional: true, required: false
  private _maximumPacketLength?: number; 
  public get maximumPacketLength() {
    return this.getNumberAttribute('maximum_packet_length');
  }
  public set maximumPacketLength(value: number) {
    this._maximumPacketLength = value;
  }
  public resetMaximumPacketLength() {
    this._maximumPacketLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPacketLengthInput() {
    return this._maximumPacketLength;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // run_length - computed: false, optional: true, required: false
  private _runLength?: number; 
  public get runLength() {
    return this.getNumberAttribute('run_length');
  }
  public set runLength(value: number) {
    this._runLength = value;
  }
  public resetRunLength() {
    this._runLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLengthInput() {
    return this._runLength;
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServer {
  /**
  * Aggregate by autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_autonomous_system ForwardingoptionsSamplingInstance#aggregation_autonomous_system}
  */
  readonly aggregationAutonomousSystem?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_destination_prefix ForwardingoptionsSamplingInstance#aggregation_destination_prefix}
  */
  readonly aggregationDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by protocol and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_protocol_port ForwardingoptionsSamplingInstance#aggregation_protocol_port}
  */
  readonly aggregationProtocolPort?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source and destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_source_destination_prefix ForwardingoptionsSamplingInstance#aggregation_source_destination_prefix}
  */
  readonly aggregationSourceDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Compatible with Caida record format for prefix aggregation (v8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_source_destination_prefix_caida_compliant ForwardingoptionsSamplingInstance#aggregation_source_destination_prefix_caida_compliant}
  */
  readonly aggregationSourceDestinationPrefixCaidaCompliant?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregation_source_prefix ForwardingoptionsSamplingInstance#aggregation_source_prefix}
  */
  readonly aggregationSourcePrefix?: boolean | cdktf.IResolvable;
  /**
  * Type of autonomous system number to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#autonomous_system_type ForwardingoptionsSamplingInstance#autonomous_system_type}
  */
  readonly autonomousSystemType?: string;
  /**
  * Numeric DSCP value in the range 0 to 63 (0..63).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#dscp ForwardingoptionsSamplingInstance#dscp}
  */
  readonly dscp?: number;
  /**
  * Forwarding-class for exported jflow packets, applicable only for inline-jflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#forwarding_class ForwardingoptionsSamplingInstance#forwarding_class}
  */
  readonly forwardingClass?: string;
  /**
  * Name of host collecting cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#hostname ForwardingoptionsSamplingInstance#hostname}
  */
  readonly hostname: string;
  /**
  * Dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#local_dump ForwardingoptionsSamplingInstance#local_dump}
  */
  readonly localDump?: boolean | cdktf.IResolvable;
  /**
  * Don't dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#no_local_dump ForwardingoptionsSamplingInstance#no_local_dump}
  */
  readonly noLocalDump?: boolean | cdktf.IResolvable;
  /**
  * UDP port number on host collecting cflowd packets (1..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#port ForwardingoptionsSamplingInstance#port}
  */
  readonly port: number;
  /**
  * Name of routing instance on which flow collector is reachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#routing_instance ForwardingoptionsSamplingInstance#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Source IPv4 address for cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#source_address ForwardingoptionsSamplingInstance#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Template to export data in version 9 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#version9_template ForwardingoptionsSamplingInstance#version9_template}
  */
  readonly version9Template?: string;
  /**
  * Template to export data in version ipfix format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#version_ipfix_template ForwardingoptionsSamplingInstance#version_ipfix_template}
  */
  readonly versionIpfixTemplate?: string;
}

export function forwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_autonomous_system: cdktf.booleanToTerraform(struct!.aggregationAutonomousSystem),
    aggregation_destination_prefix: cdktf.booleanToTerraform(struct!.aggregationDestinationPrefix),
    aggregation_protocol_port: cdktf.booleanToTerraform(struct!.aggregationProtocolPort),
    aggregation_source_destination_prefix: cdktf.booleanToTerraform(struct!.aggregationSourceDestinationPrefix),
    aggregation_source_destination_prefix_caida_compliant: cdktf.booleanToTerraform(struct!.aggregationSourceDestinationPrefixCaidaCompliant),
    aggregation_source_prefix: cdktf.booleanToTerraform(struct!.aggregationSourcePrefix),
    autonomous_system_type: cdktf.stringToTerraform(struct!.autonomousSystemType),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    forwarding_class: cdktf.stringToTerraform(struct!.forwardingClass),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    local_dump: cdktf.booleanToTerraform(struct!.localDump),
    no_local_dump: cdktf.booleanToTerraform(struct!.noLocalDump),
    port: cdktf.numberToTerraform(struct!.port),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    version9_template: cdktf.stringToTerraform(struct!.version9Template),
    version_ipfix_template: cdktf.stringToTerraform(struct!.versionIpfixTemplate),
  }
}


export function forwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_autonomous_system: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationAutonomousSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_destination_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationDestinationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_protocol_port: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationProtocolPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_source_destination_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationSourceDestinationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_source_destination_prefix_caida_compliant: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationSourceDestinationPrefixCaidaCompliant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_source_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregationSourcePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autonomous_system_type: {
      value: cdktf.stringToHclTerraform(struct!.autonomousSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forwarding_class: {
      value: cdktf.stringToHclTerraform(struct!.forwardingClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_dump: {
      value: cdktf.booleanToHclTerraform(struct!.localDump),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_local_dump: {
      value: cdktf.booleanToHclTerraform(struct!.noLocalDump),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    version9_template: {
      value: cdktf.stringToHclTerraform(struct!.version9Template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_ipfix_template: {
      value: cdktf.stringToHclTerraform(struct!.versionIpfixTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationAutonomousSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationAutonomousSystem = this._aggregationAutonomousSystem;
    }
    if (this._aggregationDestinationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationDestinationPrefix = this._aggregationDestinationPrefix;
    }
    if (this._aggregationProtocolPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationProtocolPort = this._aggregationProtocolPort;
    }
    if (this._aggregationSourceDestinationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSourceDestinationPrefix = this._aggregationSourceDestinationPrefix;
    }
    if (this._aggregationSourceDestinationPrefixCaidaCompliant !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSourceDestinationPrefixCaidaCompliant = this._aggregationSourceDestinationPrefixCaidaCompliant;
    }
    if (this._aggregationSourcePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSourcePrefix = this._aggregationSourcePrefix;
    }
    if (this._autonomousSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousSystemType = this._autonomousSystemType;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._forwardingClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClass = this._forwardingClass;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._localDump !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDump = this._localDump;
    }
    if (this._noLocalDump !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLocalDump = this._noLocalDump;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._version9Template !== undefined) {
      hasAnyValues = true;
      internalValueResult.version9Template = this._version9Template;
    }
    if (this._versionIpfixTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionIpfixTemplate = this._versionIpfixTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregationAutonomousSystem = undefined;
      this._aggregationDestinationPrefix = undefined;
      this._aggregationProtocolPort = undefined;
      this._aggregationSourceDestinationPrefix = undefined;
      this._aggregationSourceDestinationPrefixCaidaCompliant = undefined;
      this._aggregationSourcePrefix = undefined;
      this._autonomousSystemType = undefined;
      this._dscp = undefined;
      this._forwardingClass = undefined;
      this._hostname = undefined;
      this._localDump = undefined;
      this._noLocalDump = undefined;
      this._port = undefined;
      this._routingInstance = undefined;
      this._sourceAddress = undefined;
      this._version9Template = undefined;
      this._versionIpfixTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregationAutonomousSystem = value.aggregationAutonomousSystem;
      this._aggregationDestinationPrefix = value.aggregationDestinationPrefix;
      this._aggregationProtocolPort = value.aggregationProtocolPort;
      this._aggregationSourceDestinationPrefix = value.aggregationSourceDestinationPrefix;
      this._aggregationSourceDestinationPrefixCaidaCompliant = value.aggregationSourceDestinationPrefixCaidaCompliant;
      this._aggregationSourcePrefix = value.aggregationSourcePrefix;
      this._autonomousSystemType = value.autonomousSystemType;
      this._dscp = value.dscp;
      this._forwardingClass = value.forwardingClass;
      this._hostname = value.hostname;
      this._localDump = value.localDump;
      this._noLocalDump = value.noLocalDump;
      this._port = value.port;
      this._routingInstance = value.routingInstance;
      this._sourceAddress = value.sourceAddress;
      this._version9Template = value.version9Template;
      this._versionIpfixTemplate = value.versionIpfixTemplate;
    }
  }

  // aggregation_autonomous_system - computed: false, optional: true, required: false
  private _aggregationAutonomousSystem?: boolean | cdktf.IResolvable; 
  public get aggregationAutonomousSystem() {
    return this.getBooleanAttribute('aggregation_autonomous_system');
  }
  public set aggregationAutonomousSystem(value: boolean | cdktf.IResolvable) {
    this._aggregationAutonomousSystem = value;
  }
  public resetAggregationAutonomousSystem() {
    this._aggregationAutonomousSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationAutonomousSystemInput() {
    return this._aggregationAutonomousSystem;
  }

  // aggregation_destination_prefix - computed: false, optional: true, required: false
  private _aggregationDestinationPrefix?: boolean | cdktf.IResolvable; 
  public get aggregationDestinationPrefix() {
    return this.getBooleanAttribute('aggregation_destination_prefix');
  }
  public set aggregationDestinationPrefix(value: boolean | cdktf.IResolvable) {
    this._aggregationDestinationPrefix = value;
  }
  public resetAggregationDestinationPrefix() {
    this._aggregationDestinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationDestinationPrefixInput() {
    return this._aggregationDestinationPrefix;
  }

  // aggregation_protocol_port - computed: false, optional: true, required: false
  private _aggregationProtocolPort?: boolean | cdktf.IResolvable; 
  public get aggregationProtocolPort() {
    return this.getBooleanAttribute('aggregation_protocol_port');
  }
  public set aggregationProtocolPort(value: boolean | cdktf.IResolvable) {
    this._aggregationProtocolPort = value;
  }
  public resetAggregationProtocolPort() {
    this._aggregationProtocolPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationProtocolPortInput() {
    return this._aggregationProtocolPort;
  }

  // aggregation_source_destination_prefix - computed: false, optional: true, required: false
  private _aggregationSourceDestinationPrefix?: boolean | cdktf.IResolvable; 
  public get aggregationSourceDestinationPrefix() {
    return this.getBooleanAttribute('aggregation_source_destination_prefix');
  }
  public set aggregationSourceDestinationPrefix(value: boolean | cdktf.IResolvable) {
    this._aggregationSourceDestinationPrefix = value;
  }
  public resetAggregationSourceDestinationPrefix() {
    this._aggregationSourceDestinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSourceDestinationPrefixInput() {
    return this._aggregationSourceDestinationPrefix;
  }

  // aggregation_source_destination_prefix_caida_compliant - computed: false, optional: true, required: false
  private _aggregationSourceDestinationPrefixCaidaCompliant?: boolean | cdktf.IResolvable; 
  public get aggregationSourceDestinationPrefixCaidaCompliant() {
    return this.getBooleanAttribute('aggregation_source_destination_prefix_caida_compliant');
  }
  public set aggregationSourceDestinationPrefixCaidaCompliant(value: boolean | cdktf.IResolvable) {
    this._aggregationSourceDestinationPrefixCaidaCompliant = value;
  }
  public resetAggregationSourceDestinationPrefixCaidaCompliant() {
    this._aggregationSourceDestinationPrefixCaidaCompliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSourceDestinationPrefixCaidaCompliantInput() {
    return this._aggregationSourceDestinationPrefixCaidaCompliant;
  }

  // aggregation_source_prefix - computed: false, optional: true, required: false
  private _aggregationSourcePrefix?: boolean | cdktf.IResolvable; 
  public get aggregationSourcePrefix() {
    return this.getBooleanAttribute('aggregation_source_prefix');
  }
  public set aggregationSourcePrefix(value: boolean | cdktf.IResolvable) {
    this._aggregationSourcePrefix = value;
  }
  public resetAggregationSourcePrefix() {
    this._aggregationSourcePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSourcePrefixInput() {
    return this._aggregationSourcePrefix;
  }

  // autonomous_system_type - computed: false, optional: true, required: false
  private _autonomousSystemType?: string; 
  public get autonomousSystemType() {
    return this.getStringAttribute('autonomous_system_type');
  }
  public set autonomousSystemType(value: string) {
    this._autonomousSystemType = value;
  }
  public resetAutonomousSystemType() {
    this._autonomousSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSystemTypeInput() {
    return this._autonomousSystemType;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // forwarding_class - computed: false, optional: true, required: false
  private _forwardingClass?: string; 
  public get forwardingClass() {
    return this.getStringAttribute('forwarding_class');
  }
  public set forwardingClass(value: string) {
    this._forwardingClass = value;
  }
  public resetForwardingClass() {
    this._forwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassInput() {
    return this._forwardingClass;
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

  // local_dump - computed: false, optional: true, required: false
  private _localDump?: boolean | cdktf.IResolvable; 
  public get localDump() {
    return this.getBooleanAttribute('local_dump');
  }
  public set localDump(value: boolean | cdktf.IResolvable) {
    this._localDump = value;
  }
  public resetLocalDump() {
    this._localDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDumpInput() {
    return this._localDump;
  }

  // no_local_dump - computed: false, optional: true, required: false
  private _noLocalDump?: boolean | cdktf.IResolvable; 
  public get noLocalDump() {
    return this.getBooleanAttribute('no_local_dump');
  }
  public set noLocalDump(value: boolean | cdktf.IResolvable) {
    this._noLocalDump = value;
  }
  public resetNoLocalDump() {
    this._noLocalDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLocalDumpInput() {
    return this._noLocalDump;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // version9_template - computed: false, optional: true, required: false
  private _version9Template?: string; 
  public get version9Template() {
    return this.getStringAttribute('version9_template');
  }
  public set version9Template(value: string) {
    this._version9Template = value;
  }
  public resetVersion9Template() {
    this._version9Template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get version9TemplateInput() {
    return this._version9Template;
  }

  // version_ipfix_template - computed: false, optional: true, required: false
  private _versionIpfixTemplate?: string; 
  public get versionIpfixTemplate() {
    return this.getStringAttribute('version_ipfix_template');
  }
  public set versionIpfixTemplate(value: string) {
    this._versionIpfixTemplate = value;
  }
  public resetVersionIpfixTemplate() {
    this._versionIpfixTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIpfixTemplateInput() {
    return this._versionIpfixTemplate;
  }
}

export class ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServer[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerOutputReference {
    return new ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyMplsOutputInterface {
  /**
  * Identity (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#engine_id ForwardingoptionsSamplingInstance#engine_id}
  */
  readonly engineId?: number;
  /**
  * Type (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#engine_type ForwardingoptionsSamplingInstance#engine_type}
  */
  readonly engineType?: number;
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#name ForwardingoptionsSamplingInstance#name}
  */
  readonly name: string;
  /**
  * Address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#source_address ForwardingoptionsSamplingInstance#source_address}
  */
  readonly sourceAddress?: string;
}

export function forwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyMplsOutputInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine_id: cdktf.numberToTerraform(struct!.engineId),
    engine_type: cdktf.numberToTerraform(struct!.engineType),
    name: cdktf.stringToTerraform(struct!.name),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function forwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyMplsOutputInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine_id: {
      value: cdktf.numberToHclTerraform(struct!.engineId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    engine_type: {
      value: cdktf.numberToHclTerraform(struct!.engineType),
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
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyMplsOutputInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineId = this._engineId;
    }
    if (this._engineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineType = this._engineType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyMplsOutputInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engineId = undefined;
      this._engineType = undefined;
      this._name = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engineId = value.engineId;
      this._engineType = value.engineType;
      this._name = value.name;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: number; 
  public get engineId() {
    return this.getNumberAttribute('engine_id');
  }
  public set engineId(value: number) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // engine_type - computed: false, optional: true, required: false
  private _engineType?: number; 
  public get engineType() {
    return this.getNumberAttribute('engine_type');
  }
  public set engineType(value: number) {
    this._engineType = value;
  }
  public resetEngineType() {
    this._engineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
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
}

export class ForwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingInstanceFamilyMplsOutputInterface[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceOutputReference {
    return new ForwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingInstanceFamilyMplsOutput {
  /**
  * Interval of exporting aggregate accounting information (90..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#aggregate_export_interval ForwardingoptionsSamplingInstance#aggregate_export_interval}
  */
  readonly aggregateExportInterval?: number;
  /**
  * Interval after which an active flow is exported (60..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#flow_active_timeout ForwardingoptionsSamplingInstance#flow_active_timeout}
  */
  readonly flowActiveTimeout?: number;
  /**
  * Interval of inactivity that marks a flow inactive (15..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#flow_inactive_timeout ForwardingoptionsSamplingInstance#flow_inactive_timeout}
  */
  readonly flowInactiveTimeout?: number;
  /**
  * Inline processing of sampled packets with flow export rate of monitored packets in kpps (1..3200).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#inline_jflow_export_rate ForwardingoptionsSamplingInstance#inline_jflow_export_rate}
  */
  readonly inlineJflowExportRate?: number;
  /**
  * Inline processing of sampled packets with address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#inline_jflow_source_address ForwardingoptionsSamplingInstance#inline_jflow_source_address}
  */
  readonly inlineJflowSourceAddress?: string;
  /**
  * flow_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#flow_server ForwardingoptionsSamplingInstance#flow_server}
  */
  readonly flowServer?: ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServer[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#interface ForwardingoptionsSamplingInstance#interface}
  */
  readonly interface?: ForwardingoptionsSamplingInstanceFamilyMplsOutputInterface[] | cdktf.IResolvable;
}

export function forwardingoptionsSamplingInstanceFamilyMplsOutputToTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyMplsOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_export_interval: cdktf.numberToTerraform(struct!.aggregateExportInterval),
    flow_active_timeout: cdktf.numberToTerraform(struct!.flowActiveTimeout),
    flow_inactive_timeout: cdktf.numberToTerraform(struct!.flowInactiveTimeout),
    inline_jflow_export_rate: cdktf.numberToTerraform(struct!.inlineJflowExportRate),
    inline_jflow_source_address: cdktf.stringToTerraform(struct!.inlineJflowSourceAddress),
    flow_server: cdktf.listMapper(forwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerToTerraform, true)(struct!.flowServer),
    interface: cdktf.listMapper(forwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceToTerraform, true)(struct!.interface),
  }
}


export function forwardingoptionsSamplingInstanceFamilyMplsOutputToHclTerraform(struct?: ForwardingoptionsSamplingInstanceFamilyMplsOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_export_interval: {
      value: cdktf.numberToHclTerraform(struct!.aggregateExportInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_active_timeout: {
      value: cdktf.numberToHclTerraform(struct!.flowActiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_inactive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.flowInactiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inline_jflow_export_rate: {
      value: cdktf.numberToHclTerraform(struct!.inlineJflowExportRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inline_jflow_source_address: {
      value: cdktf.stringToHclTerraform(struct!.inlineJflowSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_server: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerToHclTerraform, true)(struct!.flowServer),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerList",
    },
    interface: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceFamilyMplsOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingInstanceFamilyMplsOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateExportInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateExportInterval = this._aggregateExportInterval;
    }
    if (this._flowActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowActiveTimeout = this._flowActiveTimeout;
    }
    if (this._flowInactiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowInactiveTimeout = this._flowInactiveTimeout;
    }
    if (this._inlineJflowExportRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineJflowExportRate = this._inlineJflowExportRate;
    }
    if (this._inlineJflowSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineJflowSourceAddress = this._inlineJflowSourceAddress;
    }
    if (this._flowServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowServer = this._flowServer?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceFamilyMplsOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateExportInterval = undefined;
      this._flowActiveTimeout = undefined;
      this._flowInactiveTimeout = undefined;
      this._inlineJflowExportRate = undefined;
      this._inlineJflowSourceAddress = undefined;
      this._flowServer.internalValue = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateExportInterval = value.aggregateExportInterval;
      this._flowActiveTimeout = value.flowActiveTimeout;
      this._flowInactiveTimeout = value.flowInactiveTimeout;
      this._inlineJflowExportRate = value.inlineJflowExportRate;
      this._inlineJflowSourceAddress = value.inlineJflowSourceAddress;
      this._flowServer.internalValue = value.flowServer;
      this._interface.internalValue = value.interface;
    }
  }

  // aggregate_export_interval - computed: false, optional: true, required: false
  private _aggregateExportInterval?: number; 
  public get aggregateExportInterval() {
    return this.getNumberAttribute('aggregate_export_interval');
  }
  public set aggregateExportInterval(value: number) {
    this._aggregateExportInterval = value;
  }
  public resetAggregateExportInterval() {
    this._aggregateExportInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateExportIntervalInput() {
    return this._aggregateExportInterval;
  }

  // flow_active_timeout - computed: false, optional: true, required: false
  private _flowActiveTimeout?: number; 
  public get flowActiveTimeout() {
    return this.getNumberAttribute('flow_active_timeout');
  }
  public set flowActiveTimeout(value: number) {
    this._flowActiveTimeout = value;
  }
  public resetFlowActiveTimeout() {
    this._flowActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowActiveTimeoutInput() {
    return this._flowActiveTimeout;
  }

  // flow_inactive_timeout - computed: false, optional: true, required: false
  private _flowInactiveTimeout?: number; 
  public get flowInactiveTimeout() {
    return this.getNumberAttribute('flow_inactive_timeout');
  }
  public set flowInactiveTimeout(value: number) {
    this._flowInactiveTimeout = value;
  }
  public resetFlowInactiveTimeout() {
    this._flowInactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInactiveTimeoutInput() {
    return this._flowInactiveTimeout;
  }

  // inline_jflow_export_rate - computed: false, optional: true, required: false
  private _inlineJflowExportRate?: number; 
  public get inlineJflowExportRate() {
    return this.getNumberAttribute('inline_jflow_export_rate');
  }
  public set inlineJflowExportRate(value: number) {
    this._inlineJflowExportRate = value;
  }
  public resetInlineJflowExportRate() {
    this._inlineJflowExportRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineJflowExportRateInput() {
    return this._inlineJflowExportRate;
  }

  // inline_jflow_source_address - computed: false, optional: true, required: false
  private _inlineJflowSourceAddress?: string; 
  public get inlineJflowSourceAddress() {
    return this.getStringAttribute('inline_jflow_source_address');
  }
  public set inlineJflowSourceAddress(value: string) {
    this._inlineJflowSourceAddress = value;
  }
  public resetInlineJflowSourceAddress() {
    this._inlineJflowSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineJflowSourceAddressInput() {
    return this._inlineJflowSourceAddress;
  }

  // flow_server - computed: false, optional: true, required: false
  private _flowServer = new ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServerList(this, "flow_server", true);
  public get flowServer() {
    return this._flowServer;
  }
  public putFlowServer(value: ForwardingoptionsSamplingInstanceFamilyMplsOutputFlowServer[] | cdktf.IResolvable) {
    this._flowServer.internalValue = value;
  }
  public resetFlowServer() {
    this._flowServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowServerInput() {
    return this._flowServer.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new ForwardingoptionsSamplingInstanceFamilyMplsOutputInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ForwardingoptionsSamplingInstanceFamilyMplsOutputInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface ForwardingoptionsSamplingInstanceInput {
  /**
  * Threshold of samples per second before dropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#max_packets_per_second ForwardingoptionsSamplingInstance#max_packets_per_second}
  */
  readonly maxPacketsPerSecond?: number;
  /**
  * Maximum length of the sampled packet (0..9192 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#maximum_packet_length ForwardingoptionsSamplingInstance#maximum_packet_length}
  */
  readonly maximumPacketLength?: number;
  /**
  * Ratio of packets to be sampled (1 out of N) (1..16000000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#rate ForwardingoptionsSamplingInstance#rate}
  */
  readonly rate?: number;
  /**
  * Number of samples after initial trigger (0..20).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#run_length ForwardingoptionsSamplingInstance#run_length}
  */
  readonly runLength?: number;
}

export function forwardingoptionsSamplingInstanceInputToTerraform(struct?: ForwardingoptionsSamplingInstanceInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_packets_per_second: cdktf.numberToTerraform(struct!.maxPacketsPerSecond),
    maximum_packet_length: cdktf.numberToTerraform(struct!.maximumPacketLength),
    rate: cdktf.numberToTerraform(struct!.rate),
    run_length: cdktf.numberToTerraform(struct!.runLength),
  }
}


export function forwardingoptionsSamplingInstanceInputToHclTerraform(struct?: ForwardingoptionsSamplingInstanceInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_packets_per_second: {
      value: cdktf.numberToHclTerraform(struct!.maxPacketsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_packet_length: {
      value: cdktf.numberToHclTerraform(struct!.maximumPacketLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_length: {
      value: cdktf.numberToHclTerraform(struct!.runLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingInstanceInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingInstanceInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPacketsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacketsPerSecond = this._maxPacketsPerSecond;
    }
    if (this._maximumPacketLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPacketLength = this._maximumPacketLength;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._runLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.runLength = this._runLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingInstanceInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPacketsPerSecond = undefined;
      this._maximumPacketLength = undefined;
      this._rate = undefined;
      this._runLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPacketsPerSecond = value.maxPacketsPerSecond;
      this._maximumPacketLength = value.maximumPacketLength;
      this._rate = value.rate;
      this._runLength = value.runLength;
    }
  }

  // max_packets_per_second - computed: false, optional: true, required: false
  private _maxPacketsPerSecond?: number; 
  public get maxPacketsPerSecond() {
    return this.getNumberAttribute('max_packets_per_second');
  }
  public set maxPacketsPerSecond(value: number) {
    this._maxPacketsPerSecond = value;
  }
  public resetMaxPacketsPerSecond() {
    this._maxPacketsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketsPerSecondInput() {
    return this._maxPacketsPerSecond;
  }

  // maximum_packet_length - computed: false, optional: true, required: false
  private _maximumPacketLength?: number; 
  public get maximumPacketLength() {
    return this.getNumberAttribute('maximum_packet_length');
  }
  public set maximumPacketLength(value: number) {
    this._maximumPacketLength = value;
  }
  public resetMaximumPacketLength() {
    this._maximumPacketLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPacketLengthInput() {
    return this._maximumPacketLength;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // run_length - computed: false, optional: true, required: false
  private _runLength?: number; 
  public get runLength() {
    return this.getNumberAttribute('run_length');
  }
  public set runLength(value: number) {
    this._runLength = value;
  }
  public resetRunLength() {
    this._runLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLengthInput() {
    return this._runLength;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance junos_forwardingoptions_sampling_instance}
*/
export class ForwardingoptionsSamplingInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_forwardingoptions_sampling_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingoptionsSamplingInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingoptionsSamplingInstance to import
  * @param importFromId The id of the existing ForwardingoptionsSamplingInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingoptionsSamplingInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_forwardingoptions_sampling_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling_instance junos_forwardingoptions_sampling_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingoptionsSamplingInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardingoptionsSamplingInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_forwardingoptions_sampling_instance',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._name = config.name;
    this._routingInstance = config.routingInstance;
    this._familyInet6Input.internalValue = config.familyInet6Input;
    this._familyInet6Output.internalValue = config.familyInet6Output;
    this._familyInetInput.internalValue = config.familyInetInput;
    this._familyInetOutput.internalValue = config.familyInetOutput;
    this._familyMplsInput.internalValue = config.familyMplsInput;
    this._familyMplsOutput.internalValue = config.familyMplsOutput;
    this._input.internalValue = config.input;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // routing_instance - computed: true, optional: true, required: false
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

  // family_inet6_input - computed: false, optional: true, required: false
  private _familyInet6Input = new ForwardingoptionsSamplingInstanceFamilyInet6InputOutputReference(this, "family_inet6_input");
  public get familyInet6Input() {
    return this._familyInet6Input;
  }
  public putFamilyInet6Input(value: ForwardingoptionsSamplingInstanceFamilyInet6Input) {
    this._familyInet6Input.internalValue = value;
  }
  public resetFamilyInet6Input() {
    this._familyInet6Input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInet6InputInput() {
    return this._familyInet6Input.internalValue;
  }

  // family_inet6_output - computed: false, optional: true, required: false
  private _familyInet6Output = new ForwardingoptionsSamplingInstanceFamilyInet6OutputOutputReference(this, "family_inet6_output");
  public get familyInet6Output() {
    return this._familyInet6Output;
  }
  public putFamilyInet6Output(value: ForwardingoptionsSamplingInstanceFamilyInet6Output) {
    this._familyInet6Output.internalValue = value;
  }
  public resetFamilyInet6Output() {
    this._familyInet6Output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInet6OutputInput() {
    return this._familyInet6Output.internalValue;
  }

  // family_inet_input - computed: false, optional: true, required: false
  private _familyInetInput = new ForwardingoptionsSamplingInstanceFamilyInetInputOutputReference(this, "family_inet_input");
  public get familyInetInput() {
    return this._familyInetInput;
  }
  public putFamilyInetInput(value: ForwardingoptionsSamplingInstanceFamilyInetInput) {
    this._familyInetInput.internalValue = value;
  }
  public resetFamilyInetInput() {
    this._familyInetInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInetInputInput() {
    return this._familyInetInput.internalValue;
  }

  // family_inet_output - computed: false, optional: true, required: false
  private _familyInetOutput = new ForwardingoptionsSamplingInstanceFamilyInetOutputOutputReference(this, "family_inet_output");
  public get familyInetOutput() {
    return this._familyInetOutput;
  }
  public putFamilyInetOutput(value: ForwardingoptionsSamplingInstanceFamilyInetOutput) {
    this._familyInetOutput.internalValue = value;
  }
  public resetFamilyInetOutput() {
    this._familyInetOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInetOutputInput() {
    return this._familyInetOutput.internalValue;
  }

  // family_mpls_input - computed: false, optional: true, required: false
  private _familyMplsInput = new ForwardingoptionsSamplingInstanceFamilyMplsInputOutputReference(this, "family_mpls_input");
  public get familyMplsInput() {
    return this._familyMplsInput;
  }
  public putFamilyMplsInput(value: ForwardingoptionsSamplingInstanceFamilyMplsInput) {
    this._familyMplsInput.internalValue = value;
  }
  public resetFamilyMplsInput() {
    this._familyMplsInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyMplsInputInput() {
    return this._familyMplsInput.internalValue;
  }

  // family_mpls_output - computed: false, optional: true, required: false
  private _familyMplsOutput = new ForwardingoptionsSamplingInstanceFamilyMplsOutputOutputReference(this, "family_mpls_output");
  public get familyMplsOutput() {
    return this._familyMplsOutput;
  }
  public putFamilyMplsOutput(value: ForwardingoptionsSamplingInstanceFamilyMplsOutput) {
    this._familyMplsOutput.internalValue = value;
  }
  public resetFamilyMplsOutput() {
    this._familyMplsOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyMplsOutputInput() {
    return this._familyMplsOutput.internalValue;
  }

  // input - computed: false, optional: true, required: false
  private _input = new ForwardingoptionsSamplingInstanceInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: ForwardingoptionsSamplingInstanceInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.booleanToTerraform(this._disable),
      name: cdktf.stringToTerraform(this._name),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      family_inet6_input: forwardingoptionsSamplingInstanceFamilyInet6InputToTerraform(this._familyInet6Input.internalValue),
      family_inet6_output: forwardingoptionsSamplingInstanceFamilyInet6OutputToTerraform(this._familyInet6Output.internalValue),
      family_inet_input: forwardingoptionsSamplingInstanceFamilyInetInputToTerraform(this._familyInetInput.internalValue),
      family_inet_output: forwardingoptionsSamplingInstanceFamilyInetOutputToTerraform(this._familyInetOutput.internalValue),
      family_mpls_input: forwardingoptionsSamplingInstanceFamilyMplsInputToTerraform(this._familyMplsInput.internalValue),
      family_mpls_output: forwardingoptionsSamplingInstanceFamilyMplsOutputToTerraform(this._familyMplsOutput.internalValue),
      input: forwardingoptionsSamplingInstanceInputToTerraform(this._input.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family_inet6_input: {
        value: forwardingoptionsSamplingInstanceFamilyInet6InputToHclTerraform(this._familyInet6Input.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingInstanceFamilyInet6Input",
      },
      family_inet6_output: {
        value: forwardingoptionsSamplingInstanceFamilyInet6OutputToHclTerraform(this._familyInet6Output.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingInstanceFamilyInet6Output",
      },
      family_inet_input: {
        value: forwardingoptionsSamplingInstanceFamilyInetInputToHclTerraform(this._familyInetInput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingInstanceFamilyInetInput",
      },
      family_inet_output: {
        value: forwardingoptionsSamplingInstanceFamilyInetOutputToHclTerraform(this._familyInetOutput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingInstanceFamilyInetOutput",
      },
      family_mpls_input: {
        value: forwardingoptionsSamplingInstanceFamilyMplsInputToHclTerraform(this._familyMplsInput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingInstanceFamilyMplsInput",
      },
      family_mpls_output: {
        value: forwardingoptionsSamplingInstanceFamilyMplsOutputToHclTerraform(this._familyMplsOutput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingInstanceFamilyMplsOutput",
      },
      input: {
        value: forwardingoptionsSamplingInstanceInputToHclTerraform(this._input.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingInstanceInput",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
