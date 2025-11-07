// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingoptionsSamplingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable global sampling instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#disable ForwardingoptionsSampling#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Sample the packet retaining tos value before normalization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#pre_rewrite_tos ForwardingoptionsSampling#pre_rewrite_tos}
  */
  readonly preRewriteTos?: boolean | cdktf.IResolvable;
  /**
  * Routing instance if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#routing_instance ForwardingoptionsSampling#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Sample the packet for active-monitoring only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#sample_once ForwardingoptionsSampling#sample_once}
  */
  readonly sampleOnce?: boolean | cdktf.IResolvable;
  /**
  * family_inet6_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#family_inet6_input ForwardingoptionsSampling#family_inet6_input}
  */
  readonly familyInet6Input?: ForwardingoptionsSamplingFamilyInet6Input;
  /**
  * family_inet6_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#family_inet6_output ForwardingoptionsSampling#family_inet6_output}
  */
  readonly familyInet6Output?: ForwardingoptionsSamplingFamilyInet6Output;
  /**
  * family_inet_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#family_inet_input ForwardingoptionsSampling#family_inet_input}
  */
  readonly familyInetInput?: ForwardingoptionsSamplingFamilyInetInput;
  /**
  * family_inet_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#family_inet_output ForwardingoptionsSampling#family_inet_output}
  */
  readonly familyInetOutput?: ForwardingoptionsSamplingFamilyInetOutput;
  /**
  * family_mpls_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#family_mpls_input ForwardingoptionsSampling#family_mpls_input}
  */
  readonly familyMplsInput?: ForwardingoptionsSamplingFamilyMplsInput;
  /**
  * family_mpls_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#family_mpls_output ForwardingoptionsSampling#family_mpls_output}
  */
  readonly familyMplsOutput?: ForwardingoptionsSamplingFamilyMplsOutput;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#input ForwardingoptionsSampling#input}
  */
  readonly input?: ForwardingoptionsSamplingInput;
}
export interface ForwardingoptionsSamplingFamilyInet6Input {
  /**
  * Threshold of samples per second before dropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#max_packets_per_second ForwardingoptionsSampling#max_packets_per_second}
  */
  readonly maxPacketsPerSecond?: number;
  /**
  * Maximum length of the sampled packet (0..9192 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#maximum_packet_length ForwardingoptionsSampling#maximum_packet_length}
  */
  readonly maximumPacketLength?: number;
  /**
  * Ratio of packets to be sampled (1 out of N) (1..16000000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#rate ForwardingoptionsSampling#rate}
  */
  readonly rate?: number;
  /**
  * Number of samples after initial trigger (0..20).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#run_length ForwardingoptionsSampling#run_length}
  */
  readonly runLength?: number;
}

export function forwardingoptionsSamplingFamilyInet6InputToTerraform(struct?: ForwardingoptionsSamplingFamilyInet6Input | cdktf.IResolvable): any {
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


export function forwardingoptionsSamplingFamilyInet6InputToHclTerraform(struct?: ForwardingoptionsSamplingFamilyInet6Input | cdktf.IResolvable): any {
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

export class ForwardingoptionsSamplingFamilyInet6InputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingFamilyInet6Input | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingoptionsSamplingFamilyInet6Input | cdktf.IResolvable | undefined) {
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
export interface ForwardingoptionsSamplingFamilyInet6OutputFlowServer {
  /**
  * Aggregate by autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_autonomous_system ForwardingoptionsSampling#aggregation_autonomous_system}
  */
  readonly aggregationAutonomousSystem?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_destination_prefix ForwardingoptionsSampling#aggregation_destination_prefix}
  */
  readonly aggregationDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by protocol and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_protocol_port ForwardingoptionsSampling#aggregation_protocol_port}
  */
  readonly aggregationProtocolPort?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source and destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_source_destination_prefix ForwardingoptionsSampling#aggregation_source_destination_prefix}
  */
  readonly aggregationSourceDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Compatible with Caida record format for prefix aggregation (v8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_source_destination_prefix_caida_compliant ForwardingoptionsSampling#aggregation_source_destination_prefix_caida_compliant}
  */
  readonly aggregationSourceDestinationPrefixCaidaCompliant?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_source_prefix ForwardingoptionsSampling#aggregation_source_prefix}
  */
  readonly aggregationSourcePrefix?: boolean | cdktf.IResolvable;
  /**
  * Type of autonomous system number to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#autonomous_system_type ForwardingoptionsSampling#autonomous_system_type}
  */
  readonly autonomousSystemType?: string;
  /**
  * Numeric DSCP value in the range 0 to 63 (0..63).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#dscp ForwardingoptionsSampling#dscp}
  */
  readonly dscp?: number;
  /**
  * Forwarding-class for exported jflow packets, applicable only for inline-jflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#forwarding_class ForwardingoptionsSampling#forwarding_class}
  */
  readonly forwardingClass?: string;
  /**
  * Name of host collecting cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#hostname ForwardingoptionsSampling#hostname}
  */
  readonly hostname: string;
  /**
  * Dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#local_dump ForwardingoptionsSampling#local_dump}
  */
  readonly localDump?: boolean | cdktf.IResolvable;
  /**
  * Don't dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#no_local_dump ForwardingoptionsSampling#no_local_dump}
  */
  readonly noLocalDump?: boolean | cdktf.IResolvable;
  /**
  * UDP port number on host collecting cflowd packets (1..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#port ForwardingoptionsSampling#port}
  */
  readonly port: number;
  /**
  * Name of routing instance on which flow collector is reachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#routing_instance ForwardingoptionsSampling#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Source IPv4 address for cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#source_address ForwardingoptionsSampling#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Template to export data in version 9 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#version9_template ForwardingoptionsSampling#version9_template}
  */
  readonly version9Template?: string;
}

export function forwardingoptionsSamplingFamilyInet6OutputFlowServerToTerraform(struct?: ForwardingoptionsSamplingFamilyInet6OutputFlowServer | cdktf.IResolvable): any {
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
  }
}


export function forwardingoptionsSamplingFamilyInet6OutputFlowServerToHclTerraform(struct?: ForwardingoptionsSamplingFamilyInet6OutputFlowServer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingFamilyInet6OutputFlowServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingFamilyInet6OutputFlowServer | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingFamilyInet6OutputFlowServer | cdktf.IResolvable | undefined) {
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
}

export class ForwardingoptionsSamplingFamilyInet6OutputFlowServerList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingFamilyInet6OutputFlowServer[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingFamilyInet6OutputFlowServerOutputReference {
    return new ForwardingoptionsSamplingFamilyInet6OutputFlowServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingFamilyInet6OutputInterface {
  /**
  * Identity (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#engine_id ForwardingoptionsSampling#engine_id}
  */
  readonly engineId?: number;
  /**
  * Type (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#engine_type ForwardingoptionsSampling#engine_type}
  */
  readonly engineType?: number;
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#name ForwardingoptionsSampling#name}
  */
  readonly name: string;
  /**
  * Address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#source_address ForwardingoptionsSampling#source_address}
  */
  readonly sourceAddress?: string;
}

export function forwardingoptionsSamplingFamilyInet6OutputInterfaceToTerraform(struct?: ForwardingoptionsSamplingFamilyInet6OutputInterface | cdktf.IResolvable): any {
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


export function forwardingoptionsSamplingFamilyInet6OutputInterfaceToHclTerraform(struct?: ForwardingoptionsSamplingFamilyInet6OutputInterface | cdktf.IResolvable): any {
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

export class ForwardingoptionsSamplingFamilyInet6OutputInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingFamilyInet6OutputInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingoptionsSamplingFamilyInet6OutputInterface | cdktf.IResolvable | undefined) {
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

export class ForwardingoptionsSamplingFamilyInet6OutputInterfaceList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingFamilyInet6OutputInterface[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingFamilyInet6OutputInterfaceOutputReference {
    return new ForwardingoptionsSamplingFamilyInet6OutputInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingFamilyInet6Output {
  /**
  * Interval of exporting aggregate accounting information (90..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregate_export_interval ForwardingoptionsSampling#aggregate_export_interval}
  */
  readonly aggregateExportInterval?: number;
  /**
  * Define the customer specific sampling configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#extension_service ForwardingoptionsSampling#extension_service}
  */
  readonly extensionService?: string[];
  /**
  * Interval after which an active flow is exported (60..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#flow_active_timeout ForwardingoptionsSampling#flow_active_timeout}
  */
  readonly flowActiveTimeout?: number;
  /**
  * Interval of inactivity that marks a flow inactive (15..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#flow_inactive_timeout ForwardingoptionsSampling#flow_inactive_timeout}
  */
  readonly flowInactiveTimeout?: number;
  /**
  * Inline processing of sampled packets with flow export rate of monitored packets in kpps (1..3200).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#inline_jflow_export_rate ForwardingoptionsSampling#inline_jflow_export_rate}
  */
  readonly inlineJflowExportRate?: number;
  /**
  * Inline processing of sampled packets with address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#inline_jflow_source_address ForwardingoptionsSampling#inline_jflow_source_address}
  */
  readonly inlineJflowSourceAddress?: string;
  /**
  * flow_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#flow_server ForwardingoptionsSampling#flow_server}
  */
  readonly flowServer?: ForwardingoptionsSamplingFamilyInet6OutputFlowServer[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#interface ForwardingoptionsSampling#interface}
  */
  readonly interface?: ForwardingoptionsSamplingFamilyInet6OutputInterface[] | cdktf.IResolvable;
}

export function forwardingoptionsSamplingFamilyInet6OutputToTerraform(struct?: ForwardingoptionsSamplingFamilyInet6Output | cdktf.IResolvable): any {
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
    flow_server: cdktf.listMapper(forwardingoptionsSamplingFamilyInet6OutputFlowServerToTerraform, true)(struct!.flowServer),
    interface: cdktf.listMapper(forwardingoptionsSamplingFamilyInet6OutputInterfaceToTerraform, true)(struct!.interface),
  }
}


export function forwardingoptionsSamplingFamilyInet6OutputToHclTerraform(struct?: ForwardingoptionsSamplingFamilyInet6Output | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(forwardingoptionsSamplingFamilyInet6OutputFlowServerToHclTerraform, true)(struct!.flowServer),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsSamplingFamilyInet6OutputFlowServerList",
    },
    interface: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingFamilyInet6OutputInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardingoptionsSamplingFamilyInet6OutputInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingFamilyInet6OutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingFamilyInet6Output | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingoptionsSamplingFamilyInet6Output | cdktf.IResolvable | undefined) {
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
  private _flowServer = new ForwardingoptionsSamplingFamilyInet6OutputFlowServerList(this, "flow_server", true);
  public get flowServer() {
    return this._flowServer;
  }
  public putFlowServer(value: ForwardingoptionsSamplingFamilyInet6OutputFlowServer[] | cdktf.IResolvable) {
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
  private _interface = new ForwardingoptionsSamplingFamilyInet6OutputInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ForwardingoptionsSamplingFamilyInet6OutputInterface[] | cdktf.IResolvable) {
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
export interface ForwardingoptionsSamplingFamilyInetInput {
  /**
  * Threshold of samples per second before dropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#max_packets_per_second ForwardingoptionsSampling#max_packets_per_second}
  */
  readonly maxPacketsPerSecond?: number;
  /**
  * Maximum length of the sampled packet (0..9192 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#maximum_packet_length ForwardingoptionsSampling#maximum_packet_length}
  */
  readonly maximumPacketLength?: number;
  /**
  * Ratio of packets to be sampled (1 out of N) (1..16000000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#rate ForwardingoptionsSampling#rate}
  */
  readonly rate?: number;
  /**
  * Number of samples after initial trigger (0..20).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#run_length ForwardingoptionsSampling#run_length}
  */
  readonly runLength?: number;
}

export function forwardingoptionsSamplingFamilyInetInputToTerraform(struct?: ForwardingoptionsSamplingFamilyInetInput | cdktf.IResolvable): any {
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


export function forwardingoptionsSamplingFamilyInetInputToHclTerraform(struct?: ForwardingoptionsSamplingFamilyInetInput | cdktf.IResolvable): any {
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

export class ForwardingoptionsSamplingFamilyInetInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingFamilyInetInput | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingoptionsSamplingFamilyInetInput | cdktf.IResolvable | undefined) {
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
export interface ForwardingoptionsSamplingFamilyInetOutputFile {
  /**
  * Disable sampled packet dumps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#disable ForwardingoptionsSampling#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Name of file to contain sampled packet dumps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#filename ForwardingoptionsSampling#filename}
  */
  readonly filename?: string;
  /**
  * Maximum number of sampled packet dump files (2..10000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#files ForwardingoptionsSampling#files}
  */
  readonly files?: number;
  /**
  * Don't timestamp every packet in the dump.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#no_stamp ForwardingoptionsSampling#no_stamp}
  */
  readonly noStamp?: boolean | cdktf.IResolvable;
  /**
  * Don't allow any user to read the sampled dump.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#no_world_readable ForwardingoptionsSampling#no_world_readable}
  */
  readonly noWorldReadable?: boolean | cdktf.IResolvable;
  /**
  * Maximum sample dump file size (1024..104857600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#size ForwardingoptionsSampling#size}
  */
  readonly size?: number;
  /**
  * Timestamp every packet in the dump.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#stamp ForwardingoptionsSampling#stamp}
  */
  readonly stamp?: boolean | cdktf.IResolvable;
  /**
  * Allow any user to read the sampled dump.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#world_readable ForwardingoptionsSampling#world_readable}
  */
  readonly worldReadable?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsSamplingFamilyInetOutputFileToTerraform(struct?: ForwardingoptionsSamplingFamilyInetOutputFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    filename: cdktf.stringToTerraform(struct!.filename),
    files: cdktf.numberToTerraform(struct!.files),
    no_stamp: cdktf.booleanToTerraform(struct!.noStamp),
    no_world_readable: cdktf.booleanToTerraform(struct!.noWorldReadable),
    size: cdktf.numberToTerraform(struct!.size),
    stamp: cdktf.booleanToTerraform(struct!.stamp),
    world_readable: cdktf.booleanToTerraform(struct!.worldReadable),
  }
}


export function forwardingoptionsSamplingFamilyInetOutputFileToHclTerraform(struct?: ForwardingoptionsSamplingFamilyInetOutputFile | cdktf.IResolvable): any {
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
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    files: {
      value: cdktf.numberToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_stamp: {
      value: cdktf.booleanToHclTerraform(struct!.noStamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    stamp: {
      value: cdktf.booleanToHclTerraform(struct!.stamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ForwardingoptionsSamplingFamilyInetOutputFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingFamilyInetOutputFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._noStamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStamp = this._noStamp;
    }
    if (this._noWorldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWorldReadable = this._noWorldReadable;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._stamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.stamp = this._stamp;
    }
    if (this._worldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.worldReadable = this._worldReadable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingFamilyInetOutputFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._filename = undefined;
      this._files = undefined;
      this._noStamp = undefined;
      this._noWorldReadable = undefined;
      this._size = undefined;
      this._stamp = undefined;
      this._worldReadable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._filename = value.filename;
      this._files = value.files;
      this._noStamp = value.noStamp;
      this._noWorldReadable = value.noWorldReadable;
      this._size = value.size;
      this._stamp = value.stamp;
      this._worldReadable = value.worldReadable;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

  // no_stamp - computed: false, optional: true, required: false
  private _noStamp?: boolean | cdktf.IResolvable; 
  public get noStamp() {
    return this.getBooleanAttribute('no_stamp');
  }
  public set noStamp(value: boolean | cdktf.IResolvable) {
    this._noStamp = value;
  }
  public resetNoStamp() {
    this._noStamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStampInput() {
    return this._noStamp;
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

  // stamp - computed: false, optional: true, required: false
  private _stamp?: boolean | cdktf.IResolvable; 
  public get stamp() {
    return this.getBooleanAttribute('stamp');
  }
  public set stamp(value: boolean | cdktf.IResolvable) {
    this._stamp = value;
  }
  public resetStamp() {
    this._stamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stampInput() {
    return this._stamp;
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
export interface ForwardingoptionsSamplingFamilyInetOutputFlowServer {
  /**
  * Aggregate by autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_autonomous_system ForwardingoptionsSampling#aggregation_autonomous_system}
  */
  readonly aggregationAutonomousSystem?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_destination_prefix ForwardingoptionsSampling#aggregation_destination_prefix}
  */
  readonly aggregationDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by protocol and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_protocol_port ForwardingoptionsSampling#aggregation_protocol_port}
  */
  readonly aggregationProtocolPort?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source and destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_source_destination_prefix ForwardingoptionsSampling#aggregation_source_destination_prefix}
  */
  readonly aggregationSourceDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Compatible with Caida record format for prefix aggregation (v8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_source_destination_prefix_caida_compliant ForwardingoptionsSampling#aggregation_source_destination_prefix_caida_compliant}
  */
  readonly aggregationSourceDestinationPrefixCaidaCompliant?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_source_prefix ForwardingoptionsSampling#aggregation_source_prefix}
  */
  readonly aggregationSourcePrefix?: boolean | cdktf.IResolvable;
  /**
  * Type of autonomous system number to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#autonomous_system_type ForwardingoptionsSampling#autonomous_system_type}
  */
  readonly autonomousSystemType?: string;
  /**
  * Numeric DSCP value in the range 0 to 63 (0..63).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#dscp ForwardingoptionsSampling#dscp}
  */
  readonly dscp?: number;
  /**
  * Forwarding-class for exported jflow packets, applicable only for inline-jflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#forwarding_class ForwardingoptionsSampling#forwarding_class}
  */
  readonly forwardingClass?: string;
  /**
  * Name of host collecting cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#hostname ForwardingoptionsSampling#hostname}
  */
  readonly hostname: string;
  /**
  * Dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#local_dump ForwardingoptionsSampling#local_dump}
  */
  readonly localDump?: boolean | cdktf.IResolvable;
  /**
  * Don't dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#no_local_dump ForwardingoptionsSampling#no_local_dump}
  */
  readonly noLocalDump?: boolean | cdktf.IResolvable;
  /**
  * UDP port number on host collecting cflowd packets (1..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#port ForwardingoptionsSampling#port}
  */
  readonly port: number;
  /**
  * Name of routing instance on which flow collector is reachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#routing_instance ForwardingoptionsSampling#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Source IPv4 address for cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#source_address ForwardingoptionsSampling#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Format of exported cflowd aggregates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#version ForwardingoptionsSampling#version}
  */
  readonly version?: number;
  /**
  * Template to export data in version 9 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#version9_template ForwardingoptionsSampling#version9_template}
  */
  readonly version9Template?: string;
}

export function forwardingoptionsSamplingFamilyInetOutputFlowServerToTerraform(struct?: ForwardingoptionsSamplingFamilyInetOutputFlowServer | cdktf.IResolvable): any {
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
  }
}


export function forwardingoptionsSamplingFamilyInetOutputFlowServerToHclTerraform(struct?: ForwardingoptionsSamplingFamilyInetOutputFlowServer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingFamilyInetOutputFlowServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingFamilyInetOutputFlowServer | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingFamilyInetOutputFlowServer | cdktf.IResolvable | undefined) {
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
}

export class ForwardingoptionsSamplingFamilyInetOutputFlowServerList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingFamilyInetOutputFlowServer[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingFamilyInetOutputFlowServerOutputReference {
    return new ForwardingoptionsSamplingFamilyInetOutputFlowServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingFamilyInetOutputInterface {
  /**
  * Identity (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#engine_id ForwardingoptionsSampling#engine_id}
  */
  readonly engineId?: number;
  /**
  * Type (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#engine_type ForwardingoptionsSampling#engine_type}
  */
  readonly engineType?: number;
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#name ForwardingoptionsSampling#name}
  */
  readonly name: string;
  /**
  * Address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#source_address ForwardingoptionsSampling#source_address}
  */
  readonly sourceAddress?: string;
}

export function forwardingoptionsSamplingFamilyInetOutputInterfaceToTerraform(struct?: ForwardingoptionsSamplingFamilyInetOutputInterface | cdktf.IResolvable): any {
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


export function forwardingoptionsSamplingFamilyInetOutputInterfaceToHclTerraform(struct?: ForwardingoptionsSamplingFamilyInetOutputInterface | cdktf.IResolvable): any {
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

export class ForwardingoptionsSamplingFamilyInetOutputInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingFamilyInetOutputInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingoptionsSamplingFamilyInetOutputInterface | cdktf.IResolvable | undefined) {
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

export class ForwardingoptionsSamplingFamilyInetOutputInterfaceList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingFamilyInetOutputInterface[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingFamilyInetOutputInterfaceOutputReference {
    return new ForwardingoptionsSamplingFamilyInetOutputInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingFamilyInetOutput {
  /**
  * Interval of exporting aggregate accounting information (90..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregate_export_interval ForwardingoptionsSampling#aggregate_export_interval}
  */
  readonly aggregateExportInterval?: number;
  /**
  * Define the customer specific sampling configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#extension_service ForwardingoptionsSampling#extension_service}
  */
  readonly extensionService?: string[];
  /**
  * Interval after which an active flow is exported (60..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#flow_active_timeout ForwardingoptionsSampling#flow_active_timeout}
  */
  readonly flowActiveTimeout?: number;
  /**
  * Interval of inactivity that marks a flow inactive (15..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#flow_inactive_timeout ForwardingoptionsSampling#flow_inactive_timeout}
  */
  readonly flowInactiveTimeout?: number;
  /**
  * Inline processing of sampled packets with flow export rate of monitored packets in kpps (1..3200).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#inline_jflow_export_rate ForwardingoptionsSampling#inline_jflow_export_rate}
  */
  readonly inlineJflowExportRate?: number;
  /**
  * Inline processing of sampled packets with address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#inline_jflow_source_address ForwardingoptionsSampling#inline_jflow_source_address}
  */
  readonly inlineJflowSourceAddress?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#file ForwardingoptionsSampling#file}
  */
  readonly file?: ForwardingoptionsSamplingFamilyInetOutputFile;
  /**
  * flow_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#flow_server ForwardingoptionsSampling#flow_server}
  */
  readonly flowServer?: ForwardingoptionsSamplingFamilyInetOutputFlowServer[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#interface ForwardingoptionsSampling#interface}
  */
  readonly interface?: ForwardingoptionsSamplingFamilyInetOutputInterface[] | cdktf.IResolvable;
}

export function forwardingoptionsSamplingFamilyInetOutputToTerraform(struct?: ForwardingoptionsSamplingFamilyInetOutput | cdktf.IResolvable): any {
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
    file: forwardingoptionsSamplingFamilyInetOutputFileToTerraform(struct!.file),
    flow_server: cdktf.listMapper(forwardingoptionsSamplingFamilyInetOutputFlowServerToTerraform, true)(struct!.flowServer),
    interface: cdktf.listMapper(forwardingoptionsSamplingFamilyInetOutputInterfaceToTerraform, true)(struct!.interface),
  }
}


export function forwardingoptionsSamplingFamilyInetOutputToHclTerraform(struct?: ForwardingoptionsSamplingFamilyInetOutput | cdktf.IResolvable): any {
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
    file: {
      value: forwardingoptionsSamplingFamilyInetOutputFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "ForwardingoptionsSamplingFamilyInetOutputFile",
    },
    flow_server: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingFamilyInetOutputFlowServerToHclTerraform, true)(struct!.flowServer),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsSamplingFamilyInetOutputFlowServerList",
    },
    interface: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingFamilyInetOutputInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardingoptionsSamplingFamilyInetOutputInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingFamilyInetOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingFamilyInetOutput | cdktf.IResolvable | undefined {
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
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
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

  public set internalValue(value: ForwardingoptionsSamplingFamilyInetOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateExportInterval = undefined;
      this._extensionService = undefined;
      this._flowActiveTimeout = undefined;
      this._flowInactiveTimeout = undefined;
      this._inlineJflowExportRate = undefined;
      this._inlineJflowSourceAddress = undefined;
      this._file.internalValue = undefined;
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
      this._file.internalValue = value.file;
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

  // file - computed: false, optional: true, required: false
  private _file = new ForwardingoptionsSamplingFamilyInetOutputFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: ForwardingoptionsSamplingFamilyInetOutputFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // flow_server - computed: false, optional: true, required: false
  private _flowServer = new ForwardingoptionsSamplingFamilyInetOutputFlowServerList(this, "flow_server", true);
  public get flowServer() {
    return this._flowServer;
  }
  public putFlowServer(value: ForwardingoptionsSamplingFamilyInetOutputFlowServer[] | cdktf.IResolvable) {
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
  private _interface = new ForwardingoptionsSamplingFamilyInetOutputInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ForwardingoptionsSamplingFamilyInetOutputInterface[] | cdktf.IResolvable) {
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
export interface ForwardingoptionsSamplingFamilyMplsInput {
  /**
  * Threshold of samples per second before dropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#max_packets_per_second ForwardingoptionsSampling#max_packets_per_second}
  */
  readonly maxPacketsPerSecond?: number;
  /**
  * Maximum length of the sampled packet (0..9192 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#maximum_packet_length ForwardingoptionsSampling#maximum_packet_length}
  */
  readonly maximumPacketLength?: number;
  /**
  * Ratio of packets to be sampled (1 out of N) (1..16000000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#rate ForwardingoptionsSampling#rate}
  */
  readonly rate?: number;
  /**
  * Number of samples after initial trigger (0..20).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#run_length ForwardingoptionsSampling#run_length}
  */
  readonly runLength?: number;
}

export function forwardingoptionsSamplingFamilyMplsInputToTerraform(struct?: ForwardingoptionsSamplingFamilyMplsInput | cdktf.IResolvable): any {
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


export function forwardingoptionsSamplingFamilyMplsInputToHclTerraform(struct?: ForwardingoptionsSamplingFamilyMplsInput | cdktf.IResolvable): any {
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

export class ForwardingoptionsSamplingFamilyMplsInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingFamilyMplsInput | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingoptionsSamplingFamilyMplsInput | cdktf.IResolvable | undefined) {
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
export interface ForwardingoptionsSamplingFamilyMplsOutputFlowServer {
  /**
  * Aggregate by autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_autonomous_system ForwardingoptionsSampling#aggregation_autonomous_system}
  */
  readonly aggregationAutonomousSystem?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_destination_prefix ForwardingoptionsSampling#aggregation_destination_prefix}
  */
  readonly aggregationDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by protocol and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_protocol_port ForwardingoptionsSampling#aggregation_protocol_port}
  */
  readonly aggregationProtocolPort?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source and destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_source_destination_prefix ForwardingoptionsSampling#aggregation_source_destination_prefix}
  */
  readonly aggregationSourceDestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Compatible with Caida record format for prefix aggregation (v8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_source_destination_prefix_caida_compliant ForwardingoptionsSampling#aggregation_source_destination_prefix_caida_compliant}
  */
  readonly aggregationSourceDestinationPrefixCaidaCompliant?: boolean | cdktf.IResolvable;
  /**
  * Aggregate by source prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregation_source_prefix ForwardingoptionsSampling#aggregation_source_prefix}
  */
  readonly aggregationSourcePrefix?: boolean | cdktf.IResolvable;
  /**
  * Type of autonomous system number to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#autonomous_system_type ForwardingoptionsSampling#autonomous_system_type}
  */
  readonly autonomousSystemType?: string;
  /**
  * Numeric DSCP value in the range 0 to 63 (0..63).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#dscp ForwardingoptionsSampling#dscp}
  */
  readonly dscp?: number;
  /**
  * Forwarding-class for exported jflow packets, applicable only for inline-jflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#forwarding_class ForwardingoptionsSampling#forwarding_class}
  */
  readonly forwardingClass?: string;
  /**
  * Name of host collecting cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#hostname ForwardingoptionsSampling#hostname}
  */
  readonly hostname: string;
  /**
  * Dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#local_dump ForwardingoptionsSampling#local_dump}
  */
  readonly localDump?: boolean | cdktf.IResolvable;
  /**
  * Don't dump cflowd records to log file before exporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#no_local_dump ForwardingoptionsSampling#no_local_dump}
  */
  readonly noLocalDump?: boolean | cdktf.IResolvable;
  /**
  * UDP port number on host collecting cflowd packets (1..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#port ForwardingoptionsSampling#port}
  */
  readonly port: number;
  /**
  * Name of routing instance on which flow collector is reachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#routing_instance ForwardingoptionsSampling#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Source IPv4 address for cflowd packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#source_address ForwardingoptionsSampling#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Template to export data in version 9 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#version9_template ForwardingoptionsSampling#version9_template}
  */
  readonly version9Template?: string;
}

export function forwardingoptionsSamplingFamilyMplsOutputFlowServerToTerraform(struct?: ForwardingoptionsSamplingFamilyMplsOutputFlowServer | cdktf.IResolvable): any {
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
  }
}


export function forwardingoptionsSamplingFamilyMplsOutputFlowServerToHclTerraform(struct?: ForwardingoptionsSamplingFamilyMplsOutputFlowServer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingFamilyMplsOutputFlowServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingFamilyMplsOutputFlowServer | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsSamplingFamilyMplsOutputFlowServer | cdktf.IResolvable | undefined) {
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
}

export class ForwardingoptionsSamplingFamilyMplsOutputFlowServerList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingFamilyMplsOutputFlowServer[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingFamilyMplsOutputFlowServerOutputReference {
    return new ForwardingoptionsSamplingFamilyMplsOutputFlowServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingFamilyMplsOutputInterface {
  /**
  * Identity (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#engine_id ForwardingoptionsSampling#engine_id}
  */
  readonly engineId?: number;
  /**
  * Type (number) of this accounting interface (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#engine_type ForwardingoptionsSampling#engine_type}
  */
  readonly engineType?: number;
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#name ForwardingoptionsSampling#name}
  */
  readonly name: string;
  /**
  * Address to use for generating monitored packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#source_address ForwardingoptionsSampling#source_address}
  */
  readonly sourceAddress?: string;
}

export function forwardingoptionsSamplingFamilyMplsOutputInterfaceToTerraform(struct?: ForwardingoptionsSamplingFamilyMplsOutputInterface | cdktf.IResolvable): any {
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


export function forwardingoptionsSamplingFamilyMplsOutputInterfaceToHclTerraform(struct?: ForwardingoptionsSamplingFamilyMplsOutputInterface | cdktf.IResolvable): any {
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

export class ForwardingoptionsSamplingFamilyMplsOutputInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsSamplingFamilyMplsOutputInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingoptionsSamplingFamilyMplsOutputInterface | cdktf.IResolvable | undefined) {
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

export class ForwardingoptionsSamplingFamilyMplsOutputInterfaceList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsSamplingFamilyMplsOutputInterface[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsSamplingFamilyMplsOutputInterfaceOutputReference {
    return new ForwardingoptionsSamplingFamilyMplsOutputInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsSamplingFamilyMplsOutput {
  /**
  * Interval of exporting aggregate accounting information (90..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#aggregate_export_interval ForwardingoptionsSampling#aggregate_export_interval}
  */
  readonly aggregateExportInterval?: number;
  /**
  * Interval after which an active flow is exported (60..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#flow_active_timeout ForwardingoptionsSampling#flow_active_timeout}
  */
  readonly flowActiveTimeout?: number;
  /**
  * Interval of inactivity that marks a flow inactive (15..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#flow_inactive_timeout ForwardingoptionsSampling#flow_inactive_timeout}
  */
  readonly flowInactiveTimeout?: number;
  /**
  * flow_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#flow_server ForwardingoptionsSampling#flow_server}
  */
  readonly flowServer?: ForwardingoptionsSamplingFamilyMplsOutputFlowServer[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#interface ForwardingoptionsSampling#interface}
  */
  readonly interface?: ForwardingoptionsSamplingFamilyMplsOutputInterface[] | cdktf.IResolvable;
}

export function forwardingoptionsSamplingFamilyMplsOutputToTerraform(struct?: ForwardingoptionsSamplingFamilyMplsOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_export_interval: cdktf.numberToTerraform(struct!.aggregateExportInterval),
    flow_active_timeout: cdktf.numberToTerraform(struct!.flowActiveTimeout),
    flow_inactive_timeout: cdktf.numberToTerraform(struct!.flowInactiveTimeout),
    flow_server: cdktf.listMapper(forwardingoptionsSamplingFamilyMplsOutputFlowServerToTerraform, true)(struct!.flowServer),
    interface: cdktf.listMapper(forwardingoptionsSamplingFamilyMplsOutputInterfaceToTerraform, true)(struct!.interface),
  }
}


export function forwardingoptionsSamplingFamilyMplsOutputToHclTerraform(struct?: ForwardingoptionsSamplingFamilyMplsOutput | cdktf.IResolvable): any {
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
    flow_server: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingFamilyMplsOutputFlowServerToHclTerraform, true)(struct!.flowServer),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsSamplingFamilyMplsOutputFlowServerList",
    },
    interface: {
      value: cdktf.listMapperHcl(forwardingoptionsSamplingFamilyMplsOutputInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardingoptionsSamplingFamilyMplsOutputInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsSamplingFamilyMplsOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingFamilyMplsOutput | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingoptionsSamplingFamilyMplsOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateExportInterval = undefined;
      this._flowActiveTimeout = undefined;
      this._flowInactiveTimeout = undefined;
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

  // flow_server - computed: false, optional: true, required: false
  private _flowServer = new ForwardingoptionsSamplingFamilyMplsOutputFlowServerList(this, "flow_server", true);
  public get flowServer() {
    return this._flowServer;
  }
  public putFlowServer(value: ForwardingoptionsSamplingFamilyMplsOutputFlowServer[] | cdktf.IResolvable) {
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
  private _interface = new ForwardingoptionsSamplingFamilyMplsOutputInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ForwardingoptionsSamplingFamilyMplsOutputInterface[] | cdktf.IResolvable) {
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
export interface ForwardingoptionsSamplingInput {
  /**
  * Threshold of samples per second before dropping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#max_packets_per_second ForwardingoptionsSampling#max_packets_per_second}
  */
  readonly maxPacketsPerSecond?: number;
  /**
  * Maximum length of the sampled packet (0..9192 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#maximum_packet_length ForwardingoptionsSampling#maximum_packet_length}
  */
  readonly maximumPacketLength?: number;
  /**
  * Ratio of packets to be sampled (1 out of N) (1..16000000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#rate ForwardingoptionsSampling#rate}
  */
  readonly rate?: number;
  /**
  * Number of samples after initial trigger (0..20).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#run_length ForwardingoptionsSampling#run_length}
  */
  readonly runLength?: number;
}

export function forwardingoptionsSamplingInputToTerraform(struct?: ForwardingoptionsSamplingInput | cdktf.IResolvable): any {
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


export function forwardingoptionsSamplingInputToHclTerraform(struct?: ForwardingoptionsSamplingInput | cdktf.IResolvable): any {
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

export class ForwardingoptionsSamplingInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsSamplingInput | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ForwardingoptionsSamplingInput | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling junos_forwardingoptions_sampling}
*/
export class ForwardingoptionsSampling extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_forwardingoptions_sampling";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingoptionsSampling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingoptionsSampling to import
  * @param importFromId The id of the existing ForwardingoptionsSampling that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingoptionsSampling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_forwardingoptions_sampling", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_sampling junos_forwardingoptions_sampling} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingoptionsSamplingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ForwardingoptionsSamplingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_forwardingoptions_sampling',
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
    this._disable = config.disable;
    this._preRewriteTos = config.preRewriteTos;
    this._routingInstance = config.routingInstance;
    this._sampleOnce = config.sampleOnce;
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

  // pre_rewrite_tos - computed: false, optional: true, required: false
  private _preRewriteTos?: boolean | cdktf.IResolvable; 
  public get preRewriteTos() {
    return this.getBooleanAttribute('pre_rewrite_tos');
  }
  public set preRewriteTos(value: boolean | cdktf.IResolvable) {
    this._preRewriteTos = value;
  }
  public resetPreRewriteTos() {
    this._preRewriteTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preRewriteTosInput() {
    return this._preRewriteTos;
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

  // sample_once - computed: false, optional: true, required: false
  private _sampleOnce?: boolean | cdktf.IResolvable; 
  public get sampleOnce() {
    return this.getBooleanAttribute('sample_once');
  }
  public set sampleOnce(value: boolean | cdktf.IResolvable) {
    this._sampleOnce = value;
  }
  public resetSampleOnce() {
    this._sampleOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleOnceInput() {
    return this._sampleOnce;
  }

  // family_inet6_input - computed: false, optional: true, required: false
  private _familyInet6Input = new ForwardingoptionsSamplingFamilyInet6InputOutputReference(this, "family_inet6_input");
  public get familyInet6Input() {
    return this._familyInet6Input;
  }
  public putFamilyInet6Input(value: ForwardingoptionsSamplingFamilyInet6Input) {
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
  private _familyInet6Output = new ForwardingoptionsSamplingFamilyInet6OutputOutputReference(this, "family_inet6_output");
  public get familyInet6Output() {
    return this._familyInet6Output;
  }
  public putFamilyInet6Output(value: ForwardingoptionsSamplingFamilyInet6Output) {
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
  private _familyInetInput = new ForwardingoptionsSamplingFamilyInetInputOutputReference(this, "family_inet_input");
  public get familyInetInput() {
    return this._familyInetInput;
  }
  public putFamilyInetInput(value: ForwardingoptionsSamplingFamilyInetInput) {
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
  private _familyInetOutput = new ForwardingoptionsSamplingFamilyInetOutputOutputReference(this, "family_inet_output");
  public get familyInetOutput() {
    return this._familyInetOutput;
  }
  public putFamilyInetOutput(value: ForwardingoptionsSamplingFamilyInetOutput) {
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
  private _familyMplsInput = new ForwardingoptionsSamplingFamilyMplsInputOutputReference(this, "family_mpls_input");
  public get familyMplsInput() {
    return this._familyMplsInput;
  }
  public putFamilyMplsInput(value: ForwardingoptionsSamplingFamilyMplsInput) {
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
  private _familyMplsOutput = new ForwardingoptionsSamplingFamilyMplsOutputOutputReference(this, "family_mpls_output");
  public get familyMplsOutput() {
    return this._familyMplsOutput;
  }
  public putFamilyMplsOutput(value: ForwardingoptionsSamplingFamilyMplsOutput) {
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
  private _input = new ForwardingoptionsSamplingInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: ForwardingoptionsSamplingInput) {
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
      pre_rewrite_tos: cdktf.booleanToTerraform(this._preRewriteTos),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      sample_once: cdktf.booleanToTerraform(this._sampleOnce),
      family_inet6_input: forwardingoptionsSamplingFamilyInet6InputToTerraform(this._familyInet6Input.internalValue),
      family_inet6_output: forwardingoptionsSamplingFamilyInet6OutputToTerraform(this._familyInet6Output.internalValue),
      family_inet_input: forwardingoptionsSamplingFamilyInetInputToTerraform(this._familyInetInput.internalValue),
      family_inet_output: forwardingoptionsSamplingFamilyInetOutputToTerraform(this._familyInetOutput.internalValue),
      family_mpls_input: forwardingoptionsSamplingFamilyMplsInputToTerraform(this._familyMplsInput.internalValue),
      family_mpls_output: forwardingoptionsSamplingFamilyMplsOutputToTerraform(this._familyMplsOutput.internalValue),
      input: forwardingoptionsSamplingInputToTerraform(this._input.internalValue),
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
      pre_rewrite_tos: {
        value: cdktf.booleanToHclTerraform(this._preRewriteTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_once: {
        value: cdktf.booleanToHclTerraform(this._sampleOnce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      family_inet6_input: {
        value: forwardingoptionsSamplingFamilyInet6InputToHclTerraform(this._familyInet6Input.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingFamilyInet6Input",
      },
      family_inet6_output: {
        value: forwardingoptionsSamplingFamilyInet6OutputToHclTerraform(this._familyInet6Output.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingFamilyInet6Output",
      },
      family_inet_input: {
        value: forwardingoptionsSamplingFamilyInetInputToHclTerraform(this._familyInetInput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingFamilyInetInput",
      },
      family_inet_output: {
        value: forwardingoptionsSamplingFamilyInetOutputToHclTerraform(this._familyInetOutput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingFamilyInetOutput",
      },
      family_mpls_input: {
        value: forwardingoptionsSamplingFamilyMplsInputToHclTerraform(this._familyMplsInput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingFamilyMplsInput",
      },
      family_mpls_output: {
        value: forwardingoptionsSamplingFamilyMplsOutputToHclTerraform(this._familyMplsOutput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingFamilyMplsOutput",
      },
      input: {
        value: forwardingoptionsSamplingInputToHclTerraform(this._input.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsSamplingInput",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
