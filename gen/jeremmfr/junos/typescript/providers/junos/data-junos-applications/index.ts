// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJunosApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A regexp to apply a filter on applications name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#match_name DataJunosApplications#match_name}
  */
  readonly matchName?: string;
  /**
  * match_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#match_options DataJunosApplications#match_options}
  */
  readonly matchOptions?: DataJunosApplicationsMatchOptions[] | cdktf.IResolvable;
}
export interface DataJunosApplicationsApplicationsTerm {
}

export function dataJunosApplicationsApplicationsTermToTerraform(struct?: DataJunosApplicationsApplicationsTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosApplicationsApplicationsTermToHclTerraform(struct?: DataJunosApplicationsApplicationsTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosApplicationsApplicationsTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataJunosApplicationsApplicationsTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosApplicationsApplicationsTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alg - computed: true, optional: false, required: false
  public get alg() {
    return this.getStringAttribute('alg');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // icmp6_code - computed: true, optional: false, required: false
  public get icmp6Code() {
    return this.getStringAttribute('icmp6_code');
  }

  // icmp6_type - computed: true, optional: false, required: false
  public get icmp6Type() {
    return this.getStringAttribute('icmp6_type');
  }

  // icmp_code - computed: true, optional: false, required: false
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }

  // icmp_type - computed: true, optional: false, required: false
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }

  // inactivity_timeout - computed: true, optional: false, required: false
  public get inactivityTimeout() {
    return this.getNumberAttribute('inactivity_timeout');
  }

  // inactivity_timeout_never - computed: true, optional: false, required: false
  public get inactivityTimeoutNever() {
    return this.getBooleanAttribute('inactivity_timeout_never');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rpc_program_number - computed: true, optional: false, required: false
  public get rpcProgramNumber() {
    return this.getStringAttribute('rpc_program_number');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataJunosApplicationsApplicationsTermList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosApplicationsApplicationsTermOutputReference {
    return new DataJunosApplicationsApplicationsTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosApplicationsApplications {
}

export function dataJunosApplicationsApplicationsToTerraform(struct?: DataJunosApplicationsApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosApplicationsApplicationsToHclTerraform(struct?: DataJunosApplicationsApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosApplicationsApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataJunosApplicationsApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosApplicationsApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_protocol - computed: true, optional: false, required: false
  public get applicationProtocol() {
    return this.getStringAttribute('application_protocol');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // do_not_translate_a_query_to_aaaa_query - computed: true, optional: false, required: false
  public get doNotTranslateAQueryToAaaaQuery() {
    return this.getBooleanAttribute('do_not_translate_a_query_to_aaaa_query');
  }

  // do_not_translate_aaaa_query_to_a_query - computed: true, optional: false, required: false
  public get doNotTranslateAaaaQueryToAQuery() {
    return this.getBooleanAttribute('do_not_translate_aaaa_query_to_a_query');
  }

  // ether_type - computed: true, optional: false, required: false
  public get etherType() {
    return this.getStringAttribute('ether_type');
  }

  // icmp6_code - computed: true, optional: false, required: false
  public get icmp6Code() {
    return this.getStringAttribute('icmp6_code');
  }

  // icmp6_type - computed: true, optional: false, required: false
  public get icmp6Type() {
    return this.getStringAttribute('icmp6_type');
  }

  // icmp_code - computed: true, optional: false, required: false
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }

  // icmp_type - computed: true, optional: false, required: false
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }

  // inactivity_timeout - computed: true, optional: false, required: false
  public get inactivityTimeout() {
    return this.getNumberAttribute('inactivity_timeout');
  }

  // inactivity_timeout_never - computed: true, optional: false, required: false
  public get inactivityTimeoutNever() {
    return this.getBooleanAttribute('inactivity_timeout_never');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rpc_program_number - computed: true, optional: false, required: false
  public get rpcProgramNumber() {
    return this.getStringAttribute('rpc_program_number');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // term - computed: true, optional: false, required: false
  private _term = new DataJunosApplicationsApplicationsTermList(this, "term", false);
  public get term() {
    return this._term;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataJunosApplicationsApplicationsList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosApplicationsApplicationsOutputReference {
    return new DataJunosApplicationsApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosApplicationsMatchOptions {
  /**
  * Application Layer Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#alg DataJunosApplications#alg}
  */
  readonly alg?: string;
  /**
  * Application protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#application_protocol DataJunosApplications#application_protocol}
  */
  readonly applicationProtocol?: string;
  /**
  * Match TCP/UDP destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#destination_port DataJunosApplications#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Knob to control the translation of A query to AAAA query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#do_not_translate_a_query_to_aaaa_query DataJunosApplications#do_not_translate_a_query_to_aaaa_query}
  */
  readonly doNotTranslateAQueryToAaaaQuery?: boolean | cdktf.IResolvable;
  /**
  * Knob to control the translation of AAAA query to A query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#do_not_translate_aaaa_query_to_a_query DataJunosApplications#do_not_translate_aaaa_query_to_a_query}
  */
  readonly doNotTranslateAaaaQueryToAQuery?: boolean | cdktf.IResolvable;
  /**
  * Match ether type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#ether_type DataJunosApplications#ether_type}
  */
  readonly etherType?: string;
  /**
  * Match ICMP6 message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#icmp6_code DataJunosApplications#icmp6_code}
  */
  readonly icmp6Code?: string;
  /**
  * Match ICMP6 message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#icmp6_type DataJunosApplications#icmp6_type}
  */
  readonly icmp6Type?: string;
  /**
  * Match ICMP message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#icmp_code DataJunosApplications#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * Match ICMP message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#icmp_type DataJunosApplications#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Application-specific inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#inactivity_timeout DataJunosApplications#inactivity_timeout}
  */
  readonly inactivityTimeout?: number;
  /**
  * Disables inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#inactivity_timeout_never DataJunosApplications#inactivity_timeout_never}
  */
  readonly inactivityTimeoutNever?: boolean | cdktf.IResolvable;
  /**
  * Match IP protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#protocol DataJunosApplications#protocol}
  */
  readonly protocol?: string;
  /**
  * Match range of RPC program numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#rpc_program_number DataJunosApplications#rpc_program_number}
  */
  readonly rpcProgramNumber?: string;
  /**
  * Match TCP/UDP source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#source_port DataJunosApplications#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Match universal unique identifier for DCE RPC objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#uuid DataJunosApplications#uuid}
  */
  readonly uuid?: string;
}

export function dataJunosApplicationsMatchOptionsToTerraform(struct?: DataJunosApplicationsMatchOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    application_protocol: cdktf.stringToTerraform(struct!.applicationProtocol),
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
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rpc_program_number: cdktf.stringToTerraform(struct!.rpcProgramNumber),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataJunosApplicationsMatchOptionsToHclTerraform(struct?: DataJunosApplicationsMatchOptions | cdktf.IResolvable): any {
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
    application_protocol: {
      value: cdktf.stringToHclTerraform(struct!.applicationProtocol),
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

export class DataJunosApplicationsMatchOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosApplicationsMatchOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._applicationProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationProtocol = this._applicationProtocol;
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

  public set internalValue(value: DataJunosApplicationsMatchOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._applicationProtocol = undefined;
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
      this._applicationProtocol = value.applicationProtocol;
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
}

export class DataJunosApplicationsMatchOptionsList extends cdktf.ComplexList {
  public internalValue? : DataJunosApplicationsMatchOptions[] | cdktf.IResolvable

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
  public get(index: number): DataJunosApplicationsMatchOptionsOutputReference {
    return new DataJunosApplicationsMatchOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications junos_applications}
*/
export class DataJunosApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJunosApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJunosApplications to import
  * @param importFromId The id of the existing DataJunosApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJunosApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/applications junos_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJunosApplicationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJunosApplicationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_applications',
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
    this._matchName = config.matchName;
    this._matchOptions.internalValue = config.matchOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: true, optional: false, required: false
  private _applications = new DataJunosApplicationsApplicationsList(this, "applications", false);
  public get applications() {
    return this._applications;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // match_options - computed: false, optional: true, required: false
  private _matchOptions = new DataJunosApplicationsMatchOptionsList(this, "match_options", true);
  public get matchOptions() {
    return this._matchOptions;
  }
  public putMatchOptions(value: DataJunosApplicationsMatchOptions[] | cdktf.IResolvable) {
    this._matchOptions.internalValue = value;
  }
  public resetMatchOptions() {
    this._matchOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      match_name: cdktf.stringToTerraform(this._matchName),
      match_options: cdktf.listMapper(dataJunosApplicationsMatchOptionsToTerraform, true)(this._matchOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      match_name: {
        value: cdktf.stringToHclTerraform(this._matchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_options: {
        value: cdktf.listMapperHcl(dataJunosApplicationsMatchOptionsToHclTerraform, true)(this._matchOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataJunosApplicationsMatchOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
