// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#application_protocol Application#application_protocol}
  */
  readonly applicationProtocol?: string;
  /**
  * Text description of application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#description Application#description}
  */
  readonly description?: string;
  /**
  * Match TCP/UDP destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#destination_port Application#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Knob to control the translation of A query to AAAA query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#do_not_translate_a_query_to_aaaa_query Application#do_not_translate_a_query_to_aaaa_query}
  */
  readonly doNotTranslateAQueryToAaaaQuery?: boolean | cdktf.IResolvable;
  /**
  * Knob to control the translation of AAAA query to A query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#do_not_translate_aaaa_query_to_a_query Application#do_not_translate_aaaa_query_to_a_query}
  */
  readonly doNotTranslateAaaaQueryToAQuery?: boolean | cdktf.IResolvable;
  /**
  * Match ether type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#ether_type Application#ether_type}
  */
  readonly etherType?: string;
  /**
  * Match ICMP6 message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#icmp6_code Application#icmp6_code}
  */
  readonly icmp6Code?: string;
  /**
  * Match ICMP6 message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#icmp6_type Application#icmp6_type}
  */
  readonly icmp6Type?: string;
  /**
  * Match ICMP message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#icmp_code Application#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * Match ICMP message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#icmp_type Application#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Application-specific inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#inactivity_timeout Application#inactivity_timeout}
  */
  readonly inactivityTimeout?: number;
  /**
  * Disables inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#inactivity_timeout_never Application#inactivity_timeout_never}
  */
  readonly inactivityTimeoutNever?: boolean | cdktf.IResolvable;
  /**
  * Application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Match IP protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#protocol Application#protocol}
  */
  readonly protocol?: string;
  /**
  * Match range of RPC program numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#rpc_program_number Application#rpc_program_number}
  */
  readonly rpcProgramNumber?: string;
  /**
  * Match TCP/UDP source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#source_port Application#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Match universal unique identifier for DCE RPC objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#uuid Application#uuid}
  */
  readonly uuid?: string;
  /**
  * term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#term Application#term}
  */
  readonly term?: ApplicationTerm[] | cdktf.IResolvable;
}
export interface ApplicationTerm {
  /**
  * Application Layer Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#alg Application#alg}
  */
  readonly alg?: string;
  /**
  * Match TCP/UDP destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#destination_port Application#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Match ICMP6 message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#icmp6_code Application#icmp6_code}
  */
  readonly icmp6Code?: string;
  /**
  * Match ICMP6 message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#icmp6_type Application#icmp6_type}
  */
  readonly icmp6Type?: string;
  /**
  * Match ICMP message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#icmp_code Application#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * Match ICMP message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#icmp_type Application#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Application-specific inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#inactivity_timeout Application#inactivity_timeout}
  */
  readonly inactivityTimeout?: number;
  /**
  * Disables inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#inactivity_timeout_never Application#inactivity_timeout_never}
  */
  readonly inactivityTimeoutNever?: boolean | cdktf.IResolvable;
  /**
  * Term name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Match IP protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#protocol Application#protocol}
  */
  readonly protocol: string;
  /**
  * Match range of RPC program numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#rpc_program_number Application#rpc_program_number}
  */
  readonly rpcProgramNumber?: string;
  /**
  * Match TCP/UDP source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#source_port Application#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Match universal unique identifier for DCE RPC objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#uuid Application#uuid}
  */
  readonly uuid?: string;
}

export function applicationTermToTerraform(struct?: ApplicationTerm | cdktf.IResolvable): any {
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


export function applicationTermToHclTerraform(struct?: ApplicationTerm | cdktf.IResolvable): any {
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

export class ApplicationTermOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationTerm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationTerm | cdktf.IResolvable | undefined) {
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

export class ApplicationTermList extends cdktf.ComplexList {
  public internalValue? : ApplicationTerm[] | cdktf.IResolvable

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
  public get(index: number): ApplicationTermOutputReference {
    return new ApplicationTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application junos_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/application junos_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_application',
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
    this._applicationProtocol = config.applicationProtocol;
    this._description = config.description;
    this._destinationPort = config.destinationPort;
    this._doNotTranslateAQueryToAaaaQuery = config.doNotTranslateAQueryToAaaaQuery;
    this._doNotTranslateAaaaQueryToAQuery = config.doNotTranslateAaaaQueryToAQuery;
    this._etherType = config.etherType;
    this._icmp6Code = config.icmp6Code;
    this._icmp6Type = config.icmp6Type;
    this._icmpCode = config.icmpCode;
    this._icmpType = config.icmpType;
    this._inactivityTimeout = config.inactivityTimeout;
    this._inactivityTimeoutNever = config.inactivityTimeoutNever;
    this._name = config.name;
    this._protocol = config.protocol;
    this._rpcProgramNumber = config.rpcProgramNumber;
    this._sourcePort = config.sourcePort;
    this._uuid = config.uuid;
    this._term.internalValue = config.term;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _term = new ApplicationTermList(this, "term", false);
  public get term() {
    return this._term;
  }
  public putTerm(value: ApplicationTerm[] | cdktf.IResolvable) {
    this._term.internalValue = value;
  }
  public resetTerm() {
    this._term.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termInput() {
    return this._term.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_protocol: cdktf.stringToTerraform(this._applicationProtocol),
      description: cdktf.stringToTerraform(this._description),
      destination_port: cdktf.stringToTerraform(this._destinationPort),
      do_not_translate_a_query_to_aaaa_query: cdktf.booleanToTerraform(this._doNotTranslateAQueryToAaaaQuery),
      do_not_translate_aaaa_query_to_a_query: cdktf.booleanToTerraform(this._doNotTranslateAaaaQueryToAQuery),
      ether_type: cdktf.stringToTerraform(this._etherType),
      icmp6_code: cdktf.stringToTerraform(this._icmp6Code),
      icmp6_type: cdktf.stringToTerraform(this._icmp6Type),
      icmp_code: cdktf.stringToTerraform(this._icmpCode),
      icmp_type: cdktf.stringToTerraform(this._icmpType),
      inactivity_timeout: cdktf.numberToTerraform(this._inactivityTimeout),
      inactivity_timeout_never: cdktf.booleanToTerraform(this._inactivityTimeoutNever),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      rpc_program_number: cdktf.stringToTerraform(this._rpcProgramNumber),
      source_port: cdktf.stringToTerraform(this._sourcePort),
      uuid: cdktf.stringToTerraform(this._uuid),
      term: cdktf.listMapper(applicationTermToTerraform, true)(this._term.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_protocol: {
        value: cdktf.stringToHclTerraform(this._applicationProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port: {
        value: cdktf.stringToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      do_not_translate_a_query_to_aaaa_query: {
        value: cdktf.booleanToHclTerraform(this._doNotTranslateAQueryToAaaaQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      do_not_translate_aaaa_query_to_a_query: {
        value: cdktf.booleanToHclTerraform(this._doNotTranslateAaaaQueryToAQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ether_type: {
        value: cdktf.stringToHclTerraform(this._etherType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp6_code: {
        value: cdktf.stringToHclTerraform(this._icmp6Code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp6_type: {
        value: cdktf.stringToHclTerraform(this._icmp6Type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_code: {
        value: cdktf.stringToHclTerraform(this._icmpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_type: {
        value: cdktf.stringToHclTerraform(this._icmpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inactivity_timeout: {
        value: cdktf.numberToHclTerraform(this._inactivityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inactivity_timeout_never: {
        value: cdktf.booleanToHclTerraform(this._inactivityTimeoutNever),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpc_program_number: {
        value: cdktf.stringToHclTerraform(this._rpcProgramNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.stringToHclTerraform(this._sourcePort),
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
      term: {
        value: cdktf.listMapperHcl(applicationTermToHclTerraform, true)(this._term.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationTermList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
