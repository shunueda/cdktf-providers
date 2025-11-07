// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationsOrderedConfig extends cdktf.TerraformMetaArguments {
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#application ApplicationsOrdered#application}
  */
  readonly application?: ApplicationsOrderedApplication[] | cdktf.IResolvable;
  /**
  * application_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#application_set ApplicationsOrdered#application_set}
  */
  readonly applicationSet?: ApplicationsOrderedApplicationSet[] | cdktf.IResolvable;
}
export interface ApplicationsOrderedApplicationTerm {
  /**
  * Application Layer Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#alg ApplicationsOrdered#alg}
  */
  readonly alg?: string;
  /**
  * Match TCP/UDP destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#destination_port ApplicationsOrdered#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Match ICMP6 message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#icmp6_code ApplicationsOrdered#icmp6_code}
  */
  readonly icmp6Code?: string;
  /**
  * Match ICMP6 message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#icmp6_type ApplicationsOrdered#icmp6_type}
  */
  readonly icmp6Type?: string;
  /**
  * Match ICMP message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#icmp_code ApplicationsOrdered#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * Match ICMP message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#icmp_type ApplicationsOrdered#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Application-specific inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#inactivity_timeout ApplicationsOrdered#inactivity_timeout}
  */
  readonly inactivityTimeout?: number;
  /**
  * Disables inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#inactivity_timeout_never ApplicationsOrdered#inactivity_timeout_never}
  */
  readonly inactivityTimeoutNever?: boolean | cdktf.IResolvable;
  /**
  * Term name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#name ApplicationsOrdered#name}
  */
  readonly name: string;
  /**
  * Match IP protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#protocol ApplicationsOrdered#protocol}
  */
  readonly protocol: string;
  /**
  * Match range of RPC program numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#rpc_program_number ApplicationsOrdered#rpc_program_number}
  */
  readonly rpcProgramNumber?: string;
  /**
  * Match TCP/UDP source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#source_port ApplicationsOrdered#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Match universal unique identifier for DCE RPC objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#uuid ApplicationsOrdered#uuid}
  */
  readonly uuid?: string;
}

export function applicationsOrderedApplicationTermToTerraform(struct?: ApplicationsOrderedApplicationTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    icmp6_code: cdktf.stringToTerraform(struct!.icmp6Code),
    icmp6_type: cdktf.stringToTerraform(struct!.icmp6Type),
    icmp_code: cdktf.stringToTerraform(struct!.icmpCode),
    icmp_type: cdktf.stringToTerraform(struct!.icmpType),
    inactivity_timeout: cdktf.numberToTerraform(struct!.inactivityTimeout),
    inactivity_timeout_never: cdktf.booleanToTerraform(struct!.inactivityTimeoutNever),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rpc_program_number: cdktf.stringToTerraform(struct!.rpcProgramNumber),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function applicationsOrderedApplicationTermToHclTerraform(struct?: ApplicationsOrderedApplicationTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp6_code: {
      value: cdktf.stringToHclTerraform(struct!.icmp6Code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp6_type: {
      value: cdktf.stringToHclTerraform(struct!.icmp6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_code: {
      value: cdktf.stringToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type: {
      value: cdktf.stringToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity_timeout: {
      value: cdktf.numberToHclTerraform(struct!.inactivityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactivity_timeout_never: {
      value: cdktf.booleanToHclTerraform(struct!.inactivityTimeoutNever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpc_program_number: {
      value: cdktf.stringToHclTerraform(struct!.rpcProgramNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsOrderedApplicationTermOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsOrderedApplicationTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._icmp6Code !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6Code = this._icmp6Code;
    }
    if (this._icmp6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6Type = this._icmp6Type;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._inactivityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeout = this._inactivityTimeout;
    }
    if (this._inactivityTimeoutNever !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeoutNever = this._inactivityTimeoutNever;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rpcProgramNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpcProgramNumber = this._rpcProgramNumber;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsOrderedApplicationTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._destinationPort = undefined;
      this._icmp6Code = undefined;
      this._icmp6Type = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._inactivityTimeout = undefined;
      this._inactivityTimeoutNever = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._rpcProgramNumber = undefined;
      this._sourcePort = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._destinationPort = value.destinationPort;
      this._icmp6Code = value.icmp6Code;
      this._icmp6Type = value.icmp6Type;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._inactivityTimeout = value.inactivityTimeout;
      this._inactivityTimeoutNever = value.inactivityTimeoutNever;
      this._name = value.name;
      this._protocol = value.protocol;
      this._rpcProgramNumber = value.rpcProgramNumber;
      this._sourcePort = value.sourcePort;
      this._uuid = value.uuid;
    }
  }

  // alg - computed: false, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // icmp6_code - computed: false, optional: true, required: false
  private _icmp6Code?: string; 
  public get icmp6Code() {
    return this.getStringAttribute('icmp6_code');
  }
  public set icmp6Code(value: string) {
    this._icmp6Code = value;
  }
  public resetIcmp6Code() {
    this._icmp6Code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6CodeInput() {
    return this._icmp6Code;
  }

  // icmp6_type - computed: false, optional: true, required: false
  private _icmp6Type?: string; 
  public get icmp6Type() {
    return this.getStringAttribute('icmp6_type');
  }
  public set icmp6Type(value: string) {
    this._icmp6Type = value;
  }
  public resetIcmp6Type() {
    this._icmp6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6TypeInput() {
    return this._icmp6Type;
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string; 
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }
  public set icmpCode(value: string) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string; 
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // inactivity_timeout - computed: false, optional: true, required: false
  private _inactivityTimeout?: number; 
  public get inactivityTimeout() {
    return this.getNumberAttribute('inactivity_timeout');
  }
  public set inactivityTimeout(value: number) {
    this._inactivityTimeout = value;
  }
  public resetInactivityTimeout() {
    this._inactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutInput() {
    return this._inactivityTimeout;
  }

  // inactivity_timeout_never - computed: false, optional: true, required: false
  private _inactivityTimeoutNever?: boolean | cdktf.IResolvable; 
  public get inactivityTimeoutNever() {
    return this.getBooleanAttribute('inactivity_timeout_never');
  }
  public set inactivityTimeoutNever(value: boolean | cdktf.IResolvable) {
    this._inactivityTimeoutNever = value;
  }
  public resetInactivityTimeoutNever() {
    this._inactivityTimeoutNever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutNeverInput() {
    return this._inactivityTimeoutNever;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rpc_program_number - computed: false, optional: true, required: false
  private _rpcProgramNumber?: string; 
  public get rpcProgramNumber() {
    return this.getStringAttribute('rpc_program_number');
  }
  public set rpcProgramNumber(value: string) {
    this._rpcProgramNumber = value;
  }
  public resetRpcProgramNumber() {
    this._rpcProgramNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcProgramNumberInput() {
    return this._rpcProgramNumber;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // uuid - computed: false, optional: true, required: false
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
}

export class ApplicationsOrderedApplicationTermList extends cdktf.ComplexList {
  public internalValue? : ApplicationsOrderedApplicationTerm[] | cdktf.IResolvable

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
  public get(index: number): ApplicationsOrderedApplicationTermOutputReference {
    return new ApplicationsOrderedApplicationTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsOrderedApplication {
  /**
  * Application protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#application_protocol ApplicationsOrdered#application_protocol}
  */
  readonly applicationProtocol?: string;
  /**
  * Text description of application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#description ApplicationsOrdered#description}
  */
  readonly description?: string;
  /**
  * Match TCP/UDP destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#destination_port ApplicationsOrdered#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Knob to control the translation of A query to AAAA query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#do_not_translate_a_query_to_aaaa_query ApplicationsOrdered#do_not_translate_a_query_to_aaaa_query}
  */
  readonly doNotTranslateAQueryToAaaaQuery?: boolean | cdktf.IResolvable;
  /**
  * Knob to control the translation of AAAA query to A query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#do_not_translate_aaaa_query_to_a_query ApplicationsOrdered#do_not_translate_aaaa_query_to_a_query}
  */
  readonly doNotTranslateAaaaQueryToAQuery?: boolean | cdktf.IResolvable;
  /**
  * Match ether type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#ether_type ApplicationsOrdered#ether_type}
  */
  readonly etherType?: string;
  /**
  * Match ICMP6 message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#icmp6_code ApplicationsOrdered#icmp6_code}
  */
  readonly icmp6Code?: string;
  /**
  * Match ICMP6 message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#icmp6_type ApplicationsOrdered#icmp6_type}
  */
  readonly icmp6Type?: string;
  /**
  * Match ICMP message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#icmp_code ApplicationsOrdered#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * Match ICMP message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#icmp_type ApplicationsOrdered#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Application-specific inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#inactivity_timeout ApplicationsOrdered#inactivity_timeout}
  */
  readonly inactivityTimeout?: number;
  /**
  * Disables inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#inactivity_timeout_never ApplicationsOrdered#inactivity_timeout_never}
  */
  readonly inactivityTimeoutNever?: boolean | cdktf.IResolvable;
  /**
  * Application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#name ApplicationsOrdered#name}
  */
  readonly name: string;
  /**
  * Match IP protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#protocol ApplicationsOrdered#protocol}
  */
  readonly protocol?: string;
  /**
  * Match range of RPC program numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#rpc_program_number ApplicationsOrdered#rpc_program_number}
  */
  readonly rpcProgramNumber?: string;
  /**
  * Match TCP/UDP source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#source_port ApplicationsOrdered#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Match universal unique identifier for DCE RPC objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#uuid ApplicationsOrdered#uuid}
  */
  readonly uuid?: string;
  /**
  * term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#term ApplicationsOrdered#term}
  */
  readonly term?: ApplicationsOrderedApplicationTerm[] | cdktf.IResolvable;
}

export function applicationsOrderedApplicationToTerraform(struct?: ApplicationsOrderedApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_protocol: cdktf.stringToTerraform(struct!.applicationProtocol),
    description: cdktf.stringToTerraform(struct!.description),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    do_not_translate_a_query_to_aaaa_query: cdktf.booleanToTerraform(struct!.doNotTranslateAQueryToAaaaQuery),
    do_not_translate_aaaa_query_to_a_query: cdktf.booleanToTerraform(struct!.doNotTranslateAaaaQueryToAQuery),
    ether_type: cdktf.stringToTerraform(struct!.etherType),
    icmp6_code: cdktf.stringToTerraform(struct!.icmp6Code),
    icmp6_type: cdktf.stringToTerraform(struct!.icmp6Type),
    icmp_code: cdktf.stringToTerraform(struct!.icmpCode),
    icmp_type: cdktf.stringToTerraform(struct!.icmpType),
    inactivity_timeout: cdktf.numberToTerraform(struct!.inactivityTimeout),
    inactivity_timeout_never: cdktf.booleanToTerraform(struct!.inactivityTimeoutNever),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rpc_program_number: cdktf.stringToTerraform(struct!.rpcProgramNumber),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    term: cdktf.listMapper(applicationsOrderedApplicationTermToTerraform, true)(struct!.term),
  }
}


export function applicationsOrderedApplicationToHclTerraform(struct?: ApplicationsOrderedApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_protocol: {
      value: cdktf.stringToHclTerraform(struct!.applicationProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    do_not_translate_a_query_to_aaaa_query: {
      value: cdktf.booleanToHclTerraform(struct!.doNotTranslateAQueryToAaaaQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    do_not_translate_aaaa_query_to_a_query: {
      value: cdktf.booleanToHclTerraform(struct!.doNotTranslateAaaaQueryToAQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ether_type: {
      value: cdktf.stringToHclTerraform(struct!.etherType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp6_code: {
      value: cdktf.stringToHclTerraform(struct!.icmp6Code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp6_type: {
      value: cdktf.stringToHclTerraform(struct!.icmp6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_code: {
      value: cdktf.stringToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type: {
      value: cdktf.stringToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity_timeout: {
      value: cdktf.numberToHclTerraform(struct!.inactivityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactivity_timeout_never: {
      value: cdktf.booleanToHclTerraform(struct!.inactivityTimeoutNever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpc_program_number: {
      value: cdktf.stringToHclTerraform(struct!.rpcProgramNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    term: {
      value: cdktf.listMapperHcl(applicationsOrderedApplicationTermToHclTerraform, true)(struct!.term),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsOrderedApplicationTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsOrderedApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsOrderedApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationProtocol = this._applicationProtocol;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._doNotTranslateAQueryToAaaaQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotTranslateAQueryToAaaaQuery = this._doNotTranslateAQueryToAaaaQuery;
    }
    if (this._doNotTranslateAaaaQueryToAQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotTranslateAaaaQueryToAQuery = this._doNotTranslateAaaaQueryToAQuery;
    }
    if (this._etherType !== undefined) {
      hasAnyValues = true;
      internalValueResult.etherType = this._etherType;
    }
    if (this._icmp6Code !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6Code = this._icmp6Code;
    }
    if (this._icmp6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6Type = this._icmp6Type;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._inactivityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeout = this._inactivityTimeout;
    }
    if (this._inactivityTimeoutNever !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeoutNever = this._inactivityTimeoutNever;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rpcProgramNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpcProgramNumber = this._rpcProgramNumber;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._term?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.term = this._term?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsOrderedApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationProtocol = undefined;
      this._description = undefined;
      this._destinationPort = undefined;
      this._doNotTranslateAQueryToAaaaQuery = undefined;
      this._doNotTranslateAaaaQueryToAQuery = undefined;
      this._etherType = undefined;
      this._icmp6Code = undefined;
      this._icmp6Type = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._inactivityTimeout = undefined;
      this._inactivityTimeoutNever = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._rpcProgramNumber = undefined;
      this._sourcePort = undefined;
      this._uuid = undefined;
      this._term.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationProtocol = value.applicationProtocol;
      this._description = value.description;
      this._destinationPort = value.destinationPort;
      this._doNotTranslateAQueryToAaaaQuery = value.doNotTranslateAQueryToAaaaQuery;
      this._doNotTranslateAaaaQueryToAQuery = value.doNotTranslateAaaaQueryToAQuery;
      this._etherType = value.etherType;
      this._icmp6Code = value.icmp6Code;
      this._icmp6Type = value.icmp6Type;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._inactivityTimeout = value.inactivityTimeout;
      this._inactivityTimeoutNever = value.inactivityTimeoutNever;
      this._name = value.name;
      this._protocol = value.protocol;
      this._rpcProgramNumber = value.rpcProgramNumber;
      this._sourcePort = value.sourcePort;
      this._uuid = value.uuid;
      this._term.internalValue = value.term;
    }
  }

  // application_protocol - computed: false, optional: true, required: false
  private _applicationProtocol?: string; 
  public get applicationProtocol() {
    return this.getStringAttribute('application_protocol');
  }
  public set applicationProtocol(value: string) {
    this._applicationProtocol = value;
  }
  public resetApplicationProtocol() {
    this._applicationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProtocolInput() {
    return this._applicationProtocol;
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

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // do_not_translate_a_query_to_aaaa_query - computed: false, optional: true, required: false
  private _doNotTranslateAQueryToAaaaQuery?: boolean | cdktf.IResolvable; 
  public get doNotTranslateAQueryToAaaaQuery() {
    return this.getBooleanAttribute('do_not_translate_a_query_to_aaaa_query');
  }
  public set doNotTranslateAQueryToAaaaQuery(value: boolean | cdktf.IResolvable) {
    this._doNotTranslateAQueryToAaaaQuery = value;
  }
  public resetDoNotTranslateAQueryToAaaaQuery() {
    this._doNotTranslateAQueryToAaaaQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotTranslateAQueryToAaaaQueryInput() {
    return this._doNotTranslateAQueryToAaaaQuery;
  }

  // do_not_translate_aaaa_query_to_a_query - computed: false, optional: true, required: false
  private _doNotTranslateAaaaQueryToAQuery?: boolean | cdktf.IResolvable; 
  public get doNotTranslateAaaaQueryToAQuery() {
    return this.getBooleanAttribute('do_not_translate_aaaa_query_to_a_query');
  }
  public set doNotTranslateAaaaQueryToAQuery(value: boolean | cdktf.IResolvable) {
    this._doNotTranslateAaaaQueryToAQuery = value;
  }
  public resetDoNotTranslateAaaaQueryToAQuery() {
    this._doNotTranslateAaaaQueryToAQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotTranslateAaaaQueryToAQueryInput() {
    return this._doNotTranslateAaaaQueryToAQuery;
  }

  // ether_type - computed: false, optional: true, required: false
  private _etherType?: string; 
  public get etherType() {
    return this.getStringAttribute('ether_type');
  }
  public set etherType(value: string) {
    this._etherType = value;
  }
  public resetEtherType() {
    this._etherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeInput() {
    return this._etherType;
  }

  // icmp6_code - computed: false, optional: true, required: false
  private _icmp6Code?: string; 
  public get icmp6Code() {
    return this.getStringAttribute('icmp6_code');
  }
  public set icmp6Code(value: string) {
    this._icmp6Code = value;
  }
  public resetIcmp6Code() {
    this._icmp6Code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6CodeInput() {
    return this._icmp6Code;
  }

  // icmp6_type - computed: false, optional: true, required: false
  private _icmp6Type?: string; 
  public get icmp6Type() {
    return this.getStringAttribute('icmp6_type');
  }
  public set icmp6Type(value: string) {
    this._icmp6Type = value;
  }
  public resetIcmp6Type() {
    this._icmp6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6TypeInput() {
    return this._icmp6Type;
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string; 
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }
  public set icmpCode(value: string) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string; 
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // inactivity_timeout - computed: false, optional: true, required: false
  private _inactivityTimeout?: number; 
  public get inactivityTimeout() {
    return this.getNumberAttribute('inactivity_timeout');
  }
  public set inactivityTimeout(value: number) {
    this._inactivityTimeout = value;
  }
  public resetInactivityTimeout() {
    this._inactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutInput() {
    return this._inactivityTimeout;
  }

  // inactivity_timeout_never - computed: false, optional: true, required: false
  private _inactivityTimeoutNever?: boolean | cdktf.IResolvable; 
  public get inactivityTimeoutNever() {
    return this.getBooleanAttribute('inactivity_timeout_never');
  }
  public set inactivityTimeoutNever(value: boolean | cdktf.IResolvable) {
    this._inactivityTimeoutNever = value;
  }
  public resetInactivityTimeoutNever() {
    this._inactivityTimeoutNever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutNeverInput() {
    return this._inactivityTimeoutNever;
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

  // rpc_program_number - computed: false, optional: true, required: false
  private _rpcProgramNumber?: string; 
  public get rpcProgramNumber() {
    return this.getStringAttribute('rpc_program_number');
  }
  public set rpcProgramNumber(value: string) {
    this._rpcProgramNumber = value;
  }
  public resetRpcProgramNumber() {
    this._rpcProgramNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcProgramNumberInput() {
    return this._rpcProgramNumber;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // uuid - computed: false, optional: true, required: false
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

  // term - computed: false, optional: true, required: false
  private _term = new ApplicationsOrderedApplicationTermList(this, "term", false);
  public get term() {
    return this._term;
  }
  public putTerm(value: ApplicationsOrderedApplicationTerm[] | cdktf.IResolvable) {
    this._term.internalValue = value;
  }
  public resetTerm() {
    this._term.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termInput() {
    return this._term.internalValue;
  }
}

export class ApplicationsOrderedApplicationList extends cdktf.ComplexList {
  public internalValue? : ApplicationsOrderedApplication[] | cdktf.IResolvable

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
  public get(index: number): ApplicationsOrderedApplicationOutputReference {
    return new ApplicationsOrderedApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsOrderedApplicationSet {
  /**
  * Application-set to be included in the set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#application_set ApplicationsOrdered#application_set}
  */
  readonly applicationSet?: string[];
  /**
  * Application to be included in the set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#applications ApplicationsOrdered#applications}
  */
  readonly applications?: string[];
  /**
  * Description for application-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#description ApplicationsOrdered#description}
  */
  readonly description?: string;
  /**
  * Application set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#name ApplicationsOrdered#name}
  */
  readonly name: string;
}

export function applicationsOrderedApplicationSetToTerraform(struct?: ApplicationsOrderedApplicationSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationSet),
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applicationsOrderedApplicationSetToHclTerraform(struct?: ApplicationsOrderedApplicationSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationSet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsOrderedApplicationSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsOrderedApplicationSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSet = this._applicationSet;
    }
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsOrderedApplicationSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationSet = undefined;
      this._applications = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationSet = value.applicationSet;
      this._applications = value.applications;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // application_set - computed: false, optional: true, required: false
  private _applicationSet?: string[]; 
  public get applicationSet() {
    return this.getListAttribute('application_set');
  }
  public set applicationSet(value: string[]) {
    this._applicationSet = value;
  }
  public resetApplicationSet() {
    this._applicationSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSetInput() {
    return this._applicationSet;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
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
}

export class ApplicationsOrderedApplicationSetList extends cdktf.ComplexList {
  public internalValue? : ApplicationsOrderedApplicationSet[] | cdktf.IResolvable

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
  public get(index: number): ApplicationsOrderedApplicationSetOutputReference {
    return new ApplicationsOrderedApplicationSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered junos_applications_ordered}
*/
export class ApplicationsOrdered extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_applications_ordered";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationsOrdered resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationsOrdered to import
  * @param importFromId The id of the existing ApplicationsOrdered that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationsOrdered to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_applications_ordered", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/applications_ordered junos_applications_ordered} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationsOrderedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationsOrderedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_applications_ordered',
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
    this._application.internalValue = config.application;
    this._applicationSet.internalValue = config.applicationSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // application - computed: false, optional: true, required: false
  private _application = new ApplicationsOrderedApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }
  public putApplication(value: ApplicationsOrderedApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // application_set - computed: false, optional: true, required: false
  private _applicationSet = new ApplicationsOrderedApplicationSetList(this, "application_set", false);
  public get applicationSet() {
    return this._applicationSet;
  }
  public putApplicationSet(value: ApplicationsOrderedApplicationSet[] | cdktf.IResolvable) {
    this._applicationSet.internalValue = value;
  }
  public resetApplicationSet() {
    this._applicationSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSetInput() {
    return this._applicationSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.listMapper(applicationsOrderedApplicationToTerraform, true)(this._application.internalValue),
      application_set: cdktf.listMapper(applicationsOrderedApplicationSetToTerraform, true)(this._applicationSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.listMapperHcl(applicationsOrderedApplicationToHclTerraform, true)(this._application.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationsOrderedApplicationList",
      },
      application_set: {
        value: cdktf.listMapperHcl(applicationsOrderedApplicationSetToHclTerraform, true)(this._applicationSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationsOrderedApplicationSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
