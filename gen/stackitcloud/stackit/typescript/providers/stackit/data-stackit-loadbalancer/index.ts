// https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitLoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Load balancer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer#name DataStackitLoadbalancer#name}
  */
  readonly name: string;
  /**
  * STACKIT project ID to which the Load Balancer is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer#project_id DataStackitLoadbalancer#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer#region DataStackitLoadbalancer#region}
  */
  readonly region?: string;
}
export interface DataStackitLoadbalancerListenersServerNameIndicators {
  /**
  * A domain name to match in order to pass TLS traffic to the target pool in the current listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer#name DataStackitLoadbalancer#name}
  */
  readonly name?: string;
}

export function dataStackitLoadbalancerListenersServerNameIndicatorsToTerraform(struct?: DataStackitLoadbalancerListenersServerNameIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataStackitLoadbalancerListenersServerNameIndicatorsToHclTerraform(struct?: DataStackitLoadbalancerListenersServerNameIndicators | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStackitLoadbalancerListenersServerNameIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitLoadbalancerListenersServerNameIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerListenersServerNameIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataStackitLoadbalancerListenersServerNameIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataStackitLoadbalancerListenersServerNameIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataStackitLoadbalancerListenersServerNameIndicatorsOutputReference {
    return new DataStackitLoadbalancerListenersServerNameIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackitLoadbalancerListenersTcp {
}

export function dataStackitLoadbalancerListenersTcpToTerraform(struct?: DataStackitLoadbalancerListenersTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitLoadbalancerListenersTcpToHclTerraform(struct?: DataStackitLoadbalancerListenersTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitLoadbalancerListenersTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitLoadbalancerListenersTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerListenersTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
}
export interface DataStackitLoadbalancerListenersUdp {
}

export function dataStackitLoadbalancerListenersUdpToTerraform(struct?: DataStackitLoadbalancerListenersUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitLoadbalancerListenersUdpToHclTerraform(struct?: DataStackitLoadbalancerListenersUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitLoadbalancerListenersUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitLoadbalancerListenersUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerListenersUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
}
export interface DataStackitLoadbalancerListeners {
  /**
  * A list of domain names to match in order to pass TLS traffic to the target pool in the current listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer#server_name_indicators DataStackitLoadbalancer#server_name_indicators}
  */
  readonly serverNameIndicators?: DataStackitLoadbalancerListenersServerNameIndicators[] | cdktf.IResolvable;
}

export function dataStackitLoadbalancerListenersToTerraform(struct?: DataStackitLoadbalancerListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_name_indicators: cdktf.listMapper(dataStackitLoadbalancerListenersServerNameIndicatorsToTerraform, false)(struct!.serverNameIndicators),
  }
}


export function dataStackitLoadbalancerListenersToHclTerraform(struct?: DataStackitLoadbalancerListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_name_indicators: {
      value: cdktf.listMapperHcl(dataStackitLoadbalancerListenersServerNameIndicatorsToHclTerraform, false)(struct!.serverNameIndicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataStackitLoadbalancerListenersServerNameIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStackitLoadbalancerListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitLoadbalancerListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverNameIndicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNameIndicators = this._serverNameIndicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverNameIndicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverNameIndicators.internalValue = value.serverNameIndicators;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // server_name_indicators - computed: true, optional: true, required: false
  private _serverNameIndicators = new DataStackitLoadbalancerListenersServerNameIndicatorsList(this, "server_name_indicators", false);
  public get serverNameIndicators() {
    return this._serverNameIndicators;
  }
  public putServerNameIndicators(value: DataStackitLoadbalancerListenersServerNameIndicators[] | cdktf.IResolvable) {
    this._serverNameIndicators.internalValue = value;
  }
  public resetServerNameIndicators() {
    this._serverNameIndicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameIndicatorsInput() {
    return this._serverNameIndicators.internalValue;
  }

  // target_pool - computed: true, optional: false, required: false
  public get targetPool() {
    return this.getStringAttribute('target_pool');
  }

  // tcp - computed: true, optional: false, required: false
  private _tcp = new DataStackitLoadbalancerListenersTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataStackitLoadbalancerListenersUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
}

export class DataStackitLoadbalancerListenersList extends cdktf.ComplexList {
  public internalValue? : DataStackitLoadbalancerListeners[] | cdktf.IResolvable

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
  public get(index: number): DataStackitLoadbalancerListenersOutputReference {
    return new DataStackitLoadbalancerListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackitLoadbalancerNetworks {
}

export function dataStackitLoadbalancerNetworksToTerraform(struct?: DataStackitLoadbalancerNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitLoadbalancerNetworksToHclTerraform(struct?: DataStackitLoadbalancerNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitLoadbalancerNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitLoadbalancerNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataStackitLoadbalancerNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitLoadbalancerNetworksOutputReference {
    return new DataStackitLoadbalancerNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackitLoadbalancerOptionsObservabilityLogs {
}

export function dataStackitLoadbalancerOptionsObservabilityLogsToTerraform(struct?: DataStackitLoadbalancerOptionsObservabilityLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitLoadbalancerOptionsObservabilityLogsToHclTerraform(struct?: DataStackitLoadbalancerOptionsObservabilityLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitLoadbalancerOptionsObservabilityLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitLoadbalancerOptionsObservabilityLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerOptionsObservabilityLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_ref - computed: true, optional: false, required: false
  public get credentialsRef() {
    return this.getStringAttribute('credentials_ref');
  }

  // push_url - computed: true, optional: false, required: false
  public get pushUrl() {
    return this.getStringAttribute('push_url');
  }
}
export interface DataStackitLoadbalancerOptionsObservabilityMetrics {
}

export function dataStackitLoadbalancerOptionsObservabilityMetricsToTerraform(struct?: DataStackitLoadbalancerOptionsObservabilityMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitLoadbalancerOptionsObservabilityMetricsToHclTerraform(struct?: DataStackitLoadbalancerOptionsObservabilityMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitLoadbalancerOptionsObservabilityMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitLoadbalancerOptionsObservabilityMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerOptionsObservabilityMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_ref - computed: true, optional: false, required: false
  public get credentialsRef() {
    return this.getStringAttribute('credentials_ref');
  }

  // push_url - computed: true, optional: false, required: false
  public get pushUrl() {
    return this.getStringAttribute('push_url');
  }
}
export interface DataStackitLoadbalancerOptionsObservability {
}

export function dataStackitLoadbalancerOptionsObservabilityToTerraform(struct?: DataStackitLoadbalancerOptionsObservability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitLoadbalancerOptionsObservabilityToHclTerraform(struct?: DataStackitLoadbalancerOptionsObservability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitLoadbalancerOptionsObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitLoadbalancerOptionsObservability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerOptionsObservability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataStackitLoadbalancerOptionsObservabilityLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataStackitLoadbalancerOptionsObservabilityMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
}
export interface DataStackitLoadbalancerOptions {
}

export function dataStackitLoadbalancerOptionsToTerraform(struct?: DataStackitLoadbalancerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitLoadbalancerOptionsToHclTerraform(struct?: DataStackitLoadbalancerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitLoadbalancerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitLoadbalancerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return cdktf.Fn.tolist(this.getListAttribute('acl'));
  }

  // observability - computed: true, optional: false, required: false
  private _observability = new DataStackitLoadbalancerOptionsObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }

  // private_network_only - computed: true, optional: false, required: false
  public get privateNetworkOnly() {
    return this.getBooleanAttribute('private_network_only');
  }
}
export interface DataStackitLoadbalancerTargetPoolsActiveHealthCheck {
}

export function dataStackitLoadbalancerTargetPoolsActiveHealthCheckToTerraform(struct?: DataStackitLoadbalancerTargetPoolsActiveHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitLoadbalancerTargetPoolsActiveHealthCheckToHclTerraform(struct?: DataStackitLoadbalancerTargetPoolsActiveHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitLoadbalancerTargetPoolsActiveHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitLoadbalancerTargetPoolsActiveHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerTargetPoolsActiveHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // interval_jitter - computed: true, optional: false, required: false
  public get intervalJitter() {
    return this.getStringAttribute('interval_jitter');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}
export interface DataStackitLoadbalancerTargetPoolsSessionPersistence {
  /**
  * If true then all connections from one source IP address are redirected to the same target. This setting changes the load balancing algorithm to Maglev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer#use_source_ip_address DataStackitLoadbalancer#use_source_ip_address}
  */
  readonly useSourceIpAddress?: boolean | cdktf.IResolvable;
}

export function dataStackitLoadbalancerTargetPoolsSessionPersistenceToTerraform(struct?: DataStackitLoadbalancerTargetPoolsSessionPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_source_ip_address: cdktf.booleanToTerraform(struct!.useSourceIpAddress),
  }
}


export function dataStackitLoadbalancerTargetPoolsSessionPersistenceToHclTerraform(struct?: DataStackitLoadbalancerTargetPoolsSessionPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_source_ip_address: {
      value: cdktf.booleanToHclTerraform(struct!.useSourceIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStackitLoadbalancerTargetPoolsSessionPersistenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitLoadbalancerTargetPoolsSessionPersistence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useSourceIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSourceIpAddress = this._useSourceIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerTargetPoolsSessionPersistence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useSourceIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useSourceIpAddress = value.useSourceIpAddress;
    }
  }

  // use_source_ip_address - computed: true, optional: true, required: false
  private _useSourceIpAddress?: boolean | cdktf.IResolvable; 
  public get useSourceIpAddress() {
    return this.getBooleanAttribute('use_source_ip_address');
  }
  public set useSourceIpAddress(value: boolean | cdktf.IResolvable) {
    this._useSourceIpAddress = value;
  }
  public resetUseSourceIpAddress() {
    this._useSourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceIpAddressInput() {
    return this._useSourceIpAddress;
  }
}
export interface DataStackitLoadbalancerTargetPoolsTargets {
}

export function dataStackitLoadbalancerTargetPoolsTargetsToTerraform(struct?: DataStackitLoadbalancerTargetPoolsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitLoadbalancerTargetPoolsTargetsToHclTerraform(struct?: DataStackitLoadbalancerTargetPoolsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitLoadbalancerTargetPoolsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitLoadbalancerTargetPoolsTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerTargetPoolsTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}

export class DataStackitLoadbalancerTargetPoolsTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitLoadbalancerTargetPoolsTargetsOutputReference {
    return new DataStackitLoadbalancerTargetPoolsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStackitLoadbalancerTargetPools {
  /**
  * Here you can setup various session persistence options, so far only "`use_source_ip_address`" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer#session_persistence DataStackitLoadbalancer#session_persistence}
  */
  readonly sessionPersistence?: DataStackitLoadbalancerTargetPoolsSessionPersistence;
}

export function dataStackitLoadbalancerTargetPoolsToTerraform(struct?: DataStackitLoadbalancerTargetPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_persistence: dataStackitLoadbalancerTargetPoolsSessionPersistenceToTerraform(struct!.sessionPersistence),
  }
}


export function dataStackitLoadbalancerTargetPoolsToHclTerraform(struct?: DataStackitLoadbalancerTargetPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_persistence: {
      value: dataStackitLoadbalancerTargetPoolsSessionPersistenceToHclTerraform(struct!.sessionPersistence),
      isBlock: true,
      type: "struct",
      storageClassType: "DataStackitLoadbalancerTargetPoolsSessionPersistence",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStackitLoadbalancerTargetPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitLoadbalancerTargetPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionPersistence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPersistence = this._sessionPersistence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitLoadbalancerTargetPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionPersistence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionPersistence.internalValue = value.sessionPersistence;
    }
  }

  // active_health_check - computed: true, optional: false, required: false
  private _activeHealthCheck = new DataStackitLoadbalancerTargetPoolsActiveHealthCheckOutputReference(this, "active_health_check");
  public get activeHealthCheck() {
    return this._activeHealthCheck;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // session_persistence - computed: true, optional: true, required: false
  private _sessionPersistence = new DataStackitLoadbalancerTargetPoolsSessionPersistenceOutputReference(this, "session_persistence");
  public get sessionPersistence() {
    return this._sessionPersistence;
  }
  public putSessionPersistence(value: DataStackitLoadbalancerTargetPoolsSessionPersistence) {
    this._sessionPersistence.internalValue = value;
  }
  public resetSessionPersistence() {
    this._sessionPersistence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistenceInput() {
    return this._sessionPersistence.internalValue;
  }

  // target_port - computed: true, optional: false, required: false
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataStackitLoadbalancerTargetPoolsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataStackitLoadbalancerTargetPoolsList extends cdktf.ComplexList {
  public internalValue? : DataStackitLoadbalancerTargetPools[] | cdktf.IResolvable

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
  public get(index: number): DataStackitLoadbalancerTargetPoolsOutputReference {
    return new DataStackitLoadbalancerTargetPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer stackit_loadbalancer}
*/
export class DataStackitLoadbalancer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitLoadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitLoadbalancer to import
  * @param importFromId The id of the existing DataStackitLoadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitLoadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/loadbalancer stackit_loadbalancer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitLoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitLoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_security_group_assignment - computed: true, optional: false, required: false
  public get disableSecurityGroupAssignment() {
    return this.getBooleanAttribute('disable_security_group_assignment');
  }

  // external_address - computed: true, optional: false, required: false
  public get externalAddress() {
    return this.getStringAttribute('external_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listeners - computed: true, optional: false, required: false
  private _listeners = new DataStackitLoadbalancerListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
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

  // networks - computed: true, optional: false, required: false
  private _networks = new DataStackitLoadbalancerNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataStackitLoadbalancerOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // private_address - computed: true, optional: false, required: false
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // target_pools - computed: true, optional: false, required: false
  private _targetPools = new DataStackitLoadbalancerTargetPoolsList(this, "target_pools", false);
  public get targetPools() {
    return this._targetPools;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
