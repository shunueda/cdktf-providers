// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_client_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnClientProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_client_profile#client_profile_name DataSolacebrokerMsgVpnClientProfile#client_profile_name}
  */
  readonly clientProfileName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_client_profile#msg_vpn_name DataSolacebrokerMsgVpnClientProfile#msg_vpn_name}
  */
  readonly msgVpnName: string;
}
export interface DataSolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
}
export interface DataSolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnClientProfileEventTransactionCountThreshold {
}

export function dataSolacebrokerMsgVpnClientProfileEventTransactionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventTransactionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnClientProfileEventTransactionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnClientProfileEventTransactionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnClientProfileEventTransactionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnClientProfileEventTransactionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnClientProfileEventTransactionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_client_profile solacebroker_msg_vpn_client_profile}
*/
export class DataSolacebrokerMsgVpnClientProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_client_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnClientProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnClientProfile to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnClientProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_client_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnClientProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_client_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_client_profile solacebroker_msg_vpn_client_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnClientProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnClientProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_client_profile',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientProfileName = config.clientProfileName;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_bridge_connections_enabled - computed: true, optional: false, required: false
  public get allowBridgeConnectionsEnabled() {
    return this.getBooleanAttribute('allow_bridge_connections_enabled');
  }

  // allow_guaranteed_endpoint_create_durability - computed: true, optional: false, required: false
  public get allowGuaranteedEndpointCreateDurability() {
    return this.getStringAttribute('allow_guaranteed_endpoint_create_durability');
  }

  // allow_guaranteed_endpoint_create_enabled - computed: true, optional: false, required: false
  public get allowGuaranteedEndpointCreateEnabled() {
    return this.getBooleanAttribute('allow_guaranteed_endpoint_create_enabled');
  }

  // allow_guaranteed_msg_receive_enabled - computed: true, optional: false, required: false
  public get allowGuaranteedMsgReceiveEnabled() {
    return this.getBooleanAttribute('allow_guaranteed_msg_receive_enabled');
  }

  // allow_guaranteed_msg_send_enabled - computed: true, optional: false, required: false
  public get allowGuaranteedMsgSendEnabled() {
    return this.getBooleanAttribute('allow_guaranteed_msg_send_enabled');
  }

  // allow_shared_subscriptions_enabled - computed: true, optional: false, required: false
  public get allowSharedSubscriptionsEnabled() {
    return this.getBooleanAttribute('allow_shared_subscriptions_enabled');
  }

  // allow_transacted_sessions_enabled - computed: true, optional: false, required: false
  public get allowTransactedSessionsEnabled() {
    return this.getBooleanAttribute('allow_transacted_sessions_enabled');
  }

  // api_queue_management_copy_from_on_create_template_name - computed: true, optional: false, required: false
  public get apiQueueManagementCopyFromOnCreateTemplateName() {
    return this.getStringAttribute('api_queue_management_copy_from_on_create_template_name');
  }

  // api_topic_endpoint_management_copy_from_on_create_template_name - computed: true, optional: false, required: false
  public get apiTopicEndpointManagementCopyFromOnCreateTemplateName() {
    return this.getStringAttribute('api_topic_endpoint_management_copy_from_on_create_template_name');
  }

  // client_profile_name - computed: false, optional: false, required: true
  private _clientProfileName?: string; 
  public get clientProfileName() {
    return this.getStringAttribute('client_profile_name');
  }
  public set clientProfileName(value: string) {
    this._clientProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileNameInput() {
    return this._clientProfileName;
  }

  // compression_enabled - computed: true, optional: false, required: false
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }

  // eliding_delay - computed: true, optional: false, required: false
  public get elidingDelay() {
    return this.getNumberAttribute('eliding_delay');
  }

  // eliding_enabled - computed: true, optional: false, required: false
  public get elidingEnabled() {
    return this.getBooleanAttribute('eliding_enabled');
  }

  // eliding_max_topic_count - computed: true, optional: false, required: false
  public get elidingMaxTopicCount() {
    return this.getNumberAttribute('eliding_max_topic_count');
  }

  // event_client_provisioned_endpoint_spool_usage_threshold - computed: true, optional: false, required: false
  private _eventClientProvisionedEndpointSpoolUsageThreshold = new DataSolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdOutputReference(this, "event_client_provisioned_endpoint_spool_usage_threshold");
  public get eventClientProvisionedEndpointSpoolUsageThreshold() {
    return this._eventClientProvisionedEndpointSpoolUsageThreshold;
  }

  // event_connection_count_per_client_username_threshold - computed: true, optional: false, required: false
  private _eventConnectionCountPerClientUsernameThreshold = new DataSolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdOutputReference(this, "event_connection_count_per_client_username_threshold");
  public get eventConnectionCountPerClientUsernameThreshold() {
    return this._eventConnectionCountPerClientUsernameThreshold;
  }

  // event_egress_flow_count_threshold - computed: true, optional: false, required: false
  private _eventEgressFlowCountThreshold = new DataSolacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdOutputReference(this, "event_egress_flow_count_threshold");
  public get eventEgressFlowCountThreshold() {
    return this._eventEgressFlowCountThreshold;
  }

  // event_endpoint_count_per_client_username_threshold - computed: true, optional: false, required: false
  private _eventEndpointCountPerClientUsernameThreshold = new DataSolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdOutputReference(this, "event_endpoint_count_per_client_username_threshold");
  public get eventEndpointCountPerClientUsernameThreshold() {
    return this._eventEndpointCountPerClientUsernameThreshold;
  }

  // event_ingress_flow_count_threshold - computed: true, optional: false, required: false
  private _eventIngressFlowCountThreshold = new DataSolacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdOutputReference(this, "event_ingress_flow_count_threshold");
  public get eventIngressFlowCountThreshold() {
    return this._eventIngressFlowCountThreshold;
  }

  // event_service_smf_connection_count_per_client_username_threshold - computed: true, optional: false, required: false
  private _eventServiceSmfConnectionCountPerClientUsernameThreshold = new DataSolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdOutputReference(this, "event_service_smf_connection_count_per_client_username_threshold");
  public get eventServiceSmfConnectionCountPerClientUsernameThreshold() {
    return this._eventServiceSmfConnectionCountPerClientUsernameThreshold;
  }

  // event_service_web_connection_count_per_client_username_threshold - computed: true, optional: false, required: false
  private _eventServiceWebConnectionCountPerClientUsernameThreshold = new DataSolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdOutputReference(this, "event_service_web_connection_count_per_client_username_threshold");
  public get eventServiceWebConnectionCountPerClientUsernameThreshold() {
    return this._eventServiceWebConnectionCountPerClientUsernameThreshold;
  }

  // event_subscription_count_threshold - computed: true, optional: false, required: false
  private _eventSubscriptionCountThreshold = new DataSolacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdOutputReference(this, "event_subscription_count_threshold");
  public get eventSubscriptionCountThreshold() {
    return this._eventSubscriptionCountThreshold;
  }

  // event_transacted_session_count_threshold - computed: true, optional: false, required: false
  private _eventTransactedSessionCountThreshold = new DataSolacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdOutputReference(this, "event_transacted_session_count_threshold");
  public get eventTransactedSessionCountThreshold() {
    return this._eventTransactedSessionCountThreshold;
  }

  // event_transaction_count_threshold - computed: true, optional: false, required: false
  private _eventTransactionCountThreshold = new DataSolacebrokerMsgVpnClientProfileEventTransactionCountThresholdOutputReference(this, "event_transaction_count_threshold");
  public get eventTransactionCountThreshold() {
    return this._eventTransactionCountThreshold;
  }

  // max_amqp_link_count - computed: true, optional: false, required: false
  public get maxAmqpLinkCount() {
    return this.getNumberAttribute('max_amqp_link_count');
  }

  // max_connection_count_per_client_username - computed: true, optional: false, required: false
  public get maxConnectionCountPerClientUsername() {
    return this.getNumberAttribute('max_connection_count_per_client_username');
  }

  // max_egress_flow_count - computed: true, optional: false, required: false
  public get maxEgressFlowCount() {
    return this.getNumberAttribute('max_egress_flow_count');
  }

  // max_endpoint_count_per_client_username - computed: true, optional: false, required: false
  public get maxEndpointCountPerClientUsername() {
    return this.getNumberAttribute('max_endpoint_count_per_client_username');
  }

  // max_ingress_flow_count - computed: true, optional: false, required: false
  public get maxIngressFlowCount() {
    return this.getNumberAttribute('max_ingress_flow_count');
  }

  // max_msgs_per_transaction - computed: true, optional: false, required: false
  public get maxMsgsPerTransaction() {
    return this.getNumberAttribute('max_msgs_per_transaction');
  }

  // max_subscription_count - computed: true, optional: false, required: false
  public get maxSubscriptionCount() {
    return this.getNumberAttribute('max_subscription_count');
  }

  // max_transacted_session_count - computed: true, optional: false, required: false
  public get maxTransactedSessionCount() {
    return this.getNumberAttribute('max_transacted_session_count');
  }

  // max_transaction_count - computed: true, optional: false, required: false
  public get maxTransactionCount() {
    return this.getNumberAttribute('max_transaction_count');
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // queue_control1_max_depth - computed: true, optional: false, required: false
  public get queueControl1MaxDepth() {
    return this.getNumberAttribute('queue_control1_max_depth');
  }

  // queue_control1_min_msg_burst - computed: true, optional: false, required: false
  public get queueControl1MinMsgBurst() {
    return this.getNumberAttribute('queue_control1_min_msg_burst');
  }

  // queue_direct1_max_depth - computed: true, optional: false, required: false
  public get queueDirect1MaxDepth() {
    return this.getNumberAttribute('queue_direct1_max_depth');
  }

  // queue_direct1_min_msg_burst - computed: true, optional: false, required: false
  public get queueDirect1MinMsgBurst() {
    return this.getNumberAttribute('queue_direct1_min_msg_burst');
  }

  // queue_direct2_max_depth - computed: true, optional: false, required: false
  public get queueDirect2MaxDepth() {
    return this.getNumberAttribute('queue_direct2_max_depth');
  }

  // queue_direct2_min_msg_burst - computed: true, optional: false, required: false
  public get queueDirect2MinMsgBurst() {
    return this.getNumberAttribute('queue_direct2_min_msg_burst');
  }

  // queue_direct3_max_depth - computed: true, optional: false, required: false
  public get queueDirect3MaxDepth() {
    return this.getNumberAttribute('queue_direct3_max_depth');
  }

  // queue_direct3_min_msg_burst - computed: true, optional: false, required: false
  public get queueDirect3MinMsgBurst() {
    return this.getNumberAttribute('queue_direct3_min_msg_burst');
  }

  // queue_guaranteed1_max_depth - computed: true, optional: false, required: false
  public get queueGuaranteed1MaxDepth() {
    return this.getNumberAttribute('queue_guaranteed1_max_depth');
  }

  // queue_guaranteed1_min_msg_burst - computed: true, optional: false, required: false
  public get queueGuaranteed1MinMsgBurst() {
    return this.getNumberAttribute('queue_guaranteed1_min_msg_burst');
  }

  // reject_msg_to_sender_on_no_subscription_match_enabled - computed: true, optional: false, required: false
  public get rejectMsgToSenderOnNoSubscriptionMatchEnabled() {
    return this.getBooleanAttribute('reject_msg_to_sender_on_no_subscription_match_enabled');
  }

  // replication_allow_client_connect_when_standby_enabled - computed: true, optional: false, required: false
  public get replicationAllowClientConnectWhenStandbyEnabled() {
    return this.getBooleanAttribute('replication_allow_client_connect_when_standby_enabled');
  }

  // service_min_keepalive_timeout - computed: true, optional: false, required: false
  public get serviceMinKeepaliveTimeout() {
    return this.getNumberAttribute('service_min_keepalive_timeout');
  }

  // service_smf_max_connection_count_per_client_username - computed: true, optional: false, required: false
  public get serviceSmfMaxConnectionCountPerClientUsername() {
    return this.getNumberAttribute('service_smf_max_connection_count_per_client_username');
  }

  // service_smf_min_keepalive_enabled - computed: true, optional: false, required: false
  public get serviceSmfMinKeepaliveEnabled() {
    return this.getBooleanAttribute('service_smf_min_keepalive_enabled');
  }

  // service_web_inactive_timeout - computed: true, optional: false, required: false
  public get serviceWebInactiveTimeout() {
    return this.getNumberAttribute('service_web_inactive_timeout');
  }

  // service_web_max_connection_count_per_client_username - computed: true, optional: false, required: false
  public get serviceWebMaxConnectionCountPerClientUsername() {
    return this.getNumberAttribute('service_web_max_connection_count_per_client_username');
  }

  // service_web_max_payload - computed: true, optional: false, required: false
  public get serviceWebMaxPayload() {
    return this.getNumberAttribute('service_web_max_payload');
  }

  // tcp_congestion_window_size - computed: true, optional: false, required: false
  public get tcpCongestionWindowSize() {
    return this.getNumberAttribute('tcp_congestion_window_size');
  }

  // tcp_keepalive_count - computed: true, optional: false, required: false
  public get tcpKeepaliveCount() {
    return this.getNumberAttribute('tcp_keepalive_count');
  }

  // tcp_keepalive_idle_time - computed: true, optional: false, required: false
  public get tcpKeepaliveIdleTime() {
    return this.getNumberAttribute('tcp_keepalive_idle_time');
  }

  // tcp_keepalive_interval - computed: true, optional: false, required: false
  public get tcpKeepaliveInterval() {
    return this.getNumberAttribute('tcp_keepalive_interval');
  }

  // tcp_max_segment_size - computed: true, optional: false, required: false
  public get tcpMaxSegmentSize() {
    return this.getNumberAttribute('tcp_max_segment_size');
  }

  // tcp_max_window_size - computed: true, optional: false, required: false
  public get tcpMaxWindowSize() {
    return this.getNumberAttribute('tcp_max_window_size');
  }

  // tls_allow_downgrade_to_plain_text_enabled - computed: true, optional: false, required: false
  public get tlsAllowDowngradeToPlainTextEnabled() {
    return this.getBooleanAttribute('tls_allow_downgrade_to_plain_text_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_profile_name: cdktf.stringToTerraform(this._clientProfileName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_profile_name: {
        value: cdktf.stringToHclTerraform(this._clientProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
