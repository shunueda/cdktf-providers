// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpnsenseFirewallFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_filter#id DataOpnsenseFirewallFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataOpnsenseFirewallFilterFilterDestination {
}

export function dataOpnsenseFirewallFilterFilterDestinationToTerraform(struct?: DataOpnsenseFirewallFilterFilterDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterFilterDestinationToHclTerraform(struct?: DataOpnsenseFirewallFilterFilterDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterFilterDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterFilterDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterFilterDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invert - computed: true, optional: false, required: false
  public get invert() {
    return this.getBooleanAttribute('invert');
  }

  // net - computed: true, optional: false, required: false
  public get net() {
    return this.getStringAttribute('net');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface DataOpnsenseFirewallFilterFilterSource {
}

export function dataOpnsenseFirewallFilterFilterSourceToTerraform(struct?: DataOpnsenseFirewallFilterFilterSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterFilterSourceToHclTerraform(struct?: DataOpnsenseFirewallFilterFilterSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterFilterSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterFilterSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterFilterSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invert - computed: true, optional: false, required: false
  public get invert() {
    return this.getBooleanAttribute('invert');
  }

  // net - computed: true, optional: false, required: false
  public get net() {
    return this.getStringAttribute('net');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface DataOpnsenseFirewallFilterFilter {
}

export function dataOpnsenseFirewallFilterFilterToTerraform(struct?: DataOpnsenseFirewallFilterFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterFilterToHclTerraform(struct?: DataOpnsenseFirewallFilterFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // allow_options - computed: true, optional: false, required: false
  public get allowOptions() {
    return this.getBooleanAttribute('allow_options');
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataOpnsenseFirewallFilterFilterDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // icmp_type - computed: true, optional: false, required: false
  public get icmpType() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_type'));
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // quick - computed: true, optional: false, required: false
  public get quick() {
    return this.getBooleanAttribute('quick');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataOpnsenseFirewallFilterFilterSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // tcp_flags - computed: true, optional: false, required: false
  public get tcpFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_flags'));
  }

  // tcp_flags_out_of - computed: true, optional: false, required: false
  public get tcpFlagsOutOf() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_flags_out_of'));
  }
}
export interface DataOpnsenseFirewallFilterInterface {
}

export function dataOpnsenseFirewallFilterInterfaceToTerraform(struct?: DataOpnsenseFirewallFilterInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterInterfaceToHclTerraform(struct?: DataOpnsenseFirewallFilterInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }

  // invert - computed: true, optional: false, required: false
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
}
export interface DataOpnsenseFirewallFilterInternalTagging {
}

export function dataOpnsenseFirewallFilterInternalTaggingToTerraform(struct?: DataOpnsenseFirewallFilterInternalTagging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterInternalTaggingToHclTerraform(struct?: DataOpnsenseFirewallFilterInternalTagging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterInternalTaggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterInternalTagging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterInternalTagging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_local - computed: true, optional: false, required: false
  public get matchLocal() {
    return this.getStringAttribute('match_local');
  }

  // set_local - computed: true, optional: false, required: false
  public get setLocal() {
    return this.getStringAttribute('set_local');
  }
}
export interface DataOpnsenseFirewallFilterPriority {
}

export function dataOpnsenseFirewallFilterPriorityToTerraform(struct?: DataOpnsenseFirewallFilterPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterPriorityToHclTerraform(struct?: DataOpnsenseFirewallFilterPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // low_delay_set - computed: true, optional: false, required: false
  public get lowDelaySet() {
    return this.getNumberAttribute('low_delay_set');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getNumberAttribute('match');
  }

  // match_tos - computed: true, optional: false, required: false
  public get matchTos() {
    return this.getStringAttribute('match_tos');
  }

  // set - computed: true, optional: false, required: false
  public get set() {
    return this.getNumberAttribute('set');
  }
}
export interface DataOpnsenseFirewallFilterSourceRouting {
}

export function dataOpnsenseFirewallFilterSourceRoutingToTerraform(struct?: DataOpnsenseFirewallFilterSourceRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterSourceRoutingToHclTerraform(struct?: DataOpnsenseFirewallFilterSourceRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterSourceRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterSourceRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterSourceRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_reply_to - computed: true, optional: false, required: false
  public get disableReplyTo() {
    return this.getBooleanAttribute('disable_reply_to');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // reply_to - computed: true, optional: false, required: false
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }
}
export interface DataOpnsenseFirewallFilterStatefulFirewallAdaptiveTimeouts {
}

export function dataOpnsenseFirewallFilterStatefulFirewallAdaptiveTimeoutsToTerraform(struct?: DataOpnsenseFirewallFilterStatefulFirewallAdaptiveTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterStatefulFirewallAdaptiveTimeoutsToHclTerraform(struct?: DataOpnsenseFirewallFilterStatefulFirewallAdaptiveTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterStatefulFirewallAdaptiveTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterStatefulFirewallAdaptiveTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterStatefulFirewallAdaptiveTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getNumberAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getNumberAttribute('start');
  }
}
export interface DataOpnsenseFirewallFilterStatefulFirewallMaxNewConnections {
}

export function dataOpnsenseFirewallFilterStatefulFirewallMaxNewConnectionsToTerraform(struct?: DataOpnsenseFirewallFilterStatefulFirewallMaxNewConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterStatefulFirewallMaxNewConnectionsToHclTerraform(struct?: DataOpnsenseFirewallFilterStatefulFirewallMaxNewConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterStatefulFirewallMaxNewConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterStatefulFirewallMaxNewConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterStatefulFirewallMaxNewConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}
export interface DataOpnsenseFirewallFilterStatefulFirewallMax {
}

export function dataOpnsenseFirewallFilterStatefulFirewallMaxToTerraform(struct?: DataOpnsenseFirewallFilterStatefulFirewallMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterStatefulFirewallMaxToHclTerraform(struct?: DataOpnsenseFirewallFilterStatefulFirewallMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterStatefulFirewallMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterStatefulFirewallMax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterStatefulFirewallMax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // new_connections - computed: true, optional: false, required: false
  private _newConnections = new DataOpnsenseFirewallFilterStatefulFirewallMaxNewConnectionsOutputReference(this, "new_connections");
  public get newConnections() {
    return this._newConnections;
  }

  // source_connections - computed: true, optional: false, required: false
  public get sourceConnections() {
    return this.getNumberAttribute('source_connections');
  }

  // source_nodes - computed: true, optional: false, required: false
  public get sourceNodes() {
    return this.getNumberAttribute('source_nodes');
  }

  // source_states - computed: true, optional: false, required: false
  public get sourceStates() {
    return this.getNumberAttribute('source_states');
  }

  // states - computed: true, optional: false, required: false
  public get states() {
    return this.getNumberAttribute('states');
  }
}
export interface DataOpnsenseFirewallFilterStatefulFirewall {
}

export function dataOpnsenseFirewallFilterStatefulFirewallToTerraform(struct?: DataOpnsenseFirewallFilterStatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterStatefulFirewallToHclTerraform(struct?: DataOpnsenseFirewallFilterStatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterStatefulFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterStatefulFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterStatefulFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adaptive_timeouts - computed: true, optional: false, required: false
  private _adaptiveTimeouts = new DataOpnsenseFirewallFilterStatefulFirewallAdaptiveTimeoutsOutputReference(this, "adaptive_timeouts");
  public get adaptiveTimeouts() {
    return this._adaptiveTimeouts;
  }

  // max - computed: true, optional: false, required: false
  private _max = new DataOpnsenseFirewallFilterStatefulFirewallMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }

  // no_pfsync - computed: true, optional: false, required: false
  public get noPfsync() {
    return this.getBooleanAttribute('no_pfsync');
  }

  // overload_table - computed: true, optional: false, required: false
  public get overloadTable() {
    return this.getStringAttribute('overload_table');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOpnsenseFirewallFilterTrafficShaping {
}

export function dataOpnsenseFirewallFilterTrafficShapingToTerraform(struct?: DataOpnsenseFirewallFilterTrafficShaping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallFilterTrafficShapingToHclTerraform(struct?: DataOpnsenseFirewallFilterTrafficShaping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallFilterTrafficShapingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallFilterTrafficShaping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallFilterTrafficShaping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reverse_shaper - computed: true, optional: false, required: false
  public get reverseShaper() {
    return this.getStringAttribute('reverse_shaper');
  }

  // shaper - computed: true, optional: false, required: false
  public get shaper() {
    return this.getStringAttribute('shaper');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_filter opnsense_firewall_filter}
*/
export class DataOpnsenseFirewallFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_firewall_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpnsenseFirewallFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpnsenseFirewallFilter to import
  * @param importFromId The id of the existing DataOpnsenseFirewallFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpnsenseFirewallFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_firewall_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_filter opnsense_firewall_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpnsenseFirewallFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpnsenseFirewallFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_firewall_filter',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return cdktf.Fn.tolist(this.getListAttribute('categories'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataOpnsenseFirewallFilterFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataOpnsenseFirewallFilterInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }

  // internal_tagging - computed: true, optional: false, required: false
  private _internalTagging = new DataOpnsenseFirewallFilterInternalTaggingOutputReference(this, "internal_tagging");
  public get internalTagging() {
    return this._internalTagging;
  }

  // no_xmlrpc_sync - computed: true, optional: false, required: false
  public get noXmlrpcSync() {
    return this.getBooleanAttribute('no_xmlrpc_sync');
  }

  // priority - computed: true, optional: false, required: false
  private _priority = new DataOpnsenseFirewallFilterPriorityOutputReference(this, "priority");
  public get priority() {
    return this._priority;
  }

  // sequence - computed: true, optional: false, required: false
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }

  // source_routing - computed: true, optional: false, required: false
  private _sourceRouting = new DataOpnsenseFirewallFilterSourceRoutingOutputReference(this, "source_routing");
  public get sourceRouting() {
    return this._sourceRouting;
  }

  // stateful_firewall - computed: true, optional: false, required: false
  private _statefulFirewall = new DataOpnsenseFirewallFilterStatefulFirewallOutputReference(this, "stateful_firewall");
  public get statefulFirewall() {
    return this._statefulFirewall;
  }

  // traffic_shaping - computed: true, optional: false, required: false
  private _trafficShaping = new DataOpnsenseFirewallFilterTrafficShapingOutputReference(this, "traffic_shaping");
  public get trafficShaping() {
    return this._trafficShaping;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
