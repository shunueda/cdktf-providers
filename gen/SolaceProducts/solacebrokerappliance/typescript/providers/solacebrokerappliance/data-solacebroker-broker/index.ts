// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_broker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerBrokerConfig extends cdktf.TerraformMetaArguments {
}
export interface DataSolacebrokerBrokerGuaranteedMsgingEventCacheUsageThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventCacheUsageThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventCacheUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventCacheUsageThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventCacheUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventCacheUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventCacheUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventCacheUsageThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventDeliveredUnackedThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventDeliveredUnackedThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventDeliveredUnackedThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventDeliveredUnackedThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventDeliveredUnackedThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventDeliveredUnackedThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventDeliveredUnackedThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventDeliveredUnackedThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventDiskUsageThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventDiskUsageThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventDiskUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventDiskUsageThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventDiskUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventDiskUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventDiskUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventDiskUsageThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventEgressFlowCountThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventEgressFlowCountThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventEgressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventEgressFlowCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventEgressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventEgressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventEgressFlowCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventEgressFlowCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventEndpointCountThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventEndpointCountThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventEndpointCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventEndpointCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventEndpointCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventEndpointCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventEndpointCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventEndpointCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventIngressFlowCountThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventIngressFlowCountThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventIngressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventIngressFlowCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventIngressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventIngressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventIngressFlowCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventIngressFlowCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventMsgCountThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventMsgCountThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventMsgCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventMsgCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventMsgCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventMsgCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventMsgCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventMsgCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolFileCountThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolFileCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolFileCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolFileCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolUsageThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolUsageThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolUsageThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolUsageThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionCountThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionCountThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionResourceCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerGuaranteedMsgingEventTransactionCountThreshold {
}

export function dataSolacebrokerBrokerGuaranteedMsgingEventTransactionCountThresholdToTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventTransactionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerGuaranteedMsgingEventTransactionCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerGuaranteedMsgingEventTransactionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerGuaranteedMsgingEventTransactionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerGuaranteedMsgingEventTransactionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerGuaranteedMsgingEventTransactionCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerServiceEventConnectionCountThreshold {
}

export function dataSolacebrokerBrokerServiceEventConnectionCountThresholdToTerraform(struct?: DataSolacebrokerBrokerServiceEventConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerServiceEventConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerServiceEventConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerServiceEventConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerServiceEventConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerServiceEventConnectionCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerServiceRestEventOutgoingConnectionCountThreshold {
}

export function dataSolacebrokerBrokerServiceRestEventOutgoingConnectionCountThresholdToTerraform(struct?: DataSolacebrokerBrokerServiceRestEventOutgoingConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerServiceRestEventOutgoingConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerServiceRestEventOutgoingConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerServiceRestEventOutgoingConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerServiceRestEventOutgoingConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerServiceRestEventOutgoingConnectionCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerServiceSmfEventConnectionCountThreshold {
}

export function dataSolacebrokerBrokerServiceSmfEventConnectionCountThresholdToTerraform(struct?: DataSolacebrokerBrokerServiceSmfEventConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerServiceSmfEventConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerServiceSmfEventConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerServiceSmfEventConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerServiceSmfEventConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerServiceSmfEventConnectionCountThreshold | undefined) {
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
export interface DataSolacebrokerBrokerServiceTlsEventConnectionCountThreshold {
}

export function dataSolacebrokerBrokerServiceTlsEventConnectionCountThresholdToTerraform(struct?: DataSolacebrokerBrokerServiceTlsEventConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerBrokerServiceTlsEventConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerBrokerServiceTlsEventConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerBrokerServiceTlsEventConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerBrokerServiceTlsEventConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerBrokerServiceTlsEventConnectionCountThreshold | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_broker solacebroker_broker}
*/
export class DataSolacebrokerBroker extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_broker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerBroker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerBroker to import
  * @param importFromId The id of the existing DataSolacebrokerBroker that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_broker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerBroker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_broker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_broker solacebroker_broker} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerBrokerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerBrokerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_broker',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_brute_force_protection_enabled - computed: true, optional: false, required: false
  public get authBruteForceProtectionEnabled() {
    return this.getBooleanAttribute('auth_brute_force_protection_enabled');
  }

  // auth_client_cert_revocation_check_mode - computed: true, optional: false, required: false
  public get authClientCertRevocationCheckMode() {
    return this.getStringAttribute('auth_client_cert_revocation_check_mode');
  }

  // config_sync_authentication_client_cert_max_chain_depth - computed: true, optional: false, required: false
  public get configSyncAuthenticationClientCertMaxChainDepth() {
    return this.getNumberAttribute('config_sync_authentication_client_cert_max_chain_depth');
  }

  // config_sync_authentication_client_cert_validate_date_enabled - computed: true, optional: false, required: false
  public get configSyncAuthenticationClientCertValidateDateEnabled() {
    return this.getBooleanAttribute('config_sync_authentication_client_cert_validate_date_enabled');
  }

  // config_sync_client_profile_tcp_initial_congestion_window - computed: true, optional: false, required: false
  public get configSyncClientProfileTcpInitialCongestionWindow() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_initial_congestion_window');
  }

  // config_sync_client_profile_tcp_keepalive_count - computed: true, optional: false, required: false
  public get configSyncClientProfileTcpKeepaliveCount() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_keepalive_count');
  }

  // config_sync_client_profile_tcp_keepalive_idle - computed: true, optional: false, required: false
  public get configSyncClientProfileTcpKeepaliveIdle() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_keepalive_idle');
  }

  // config_sync_client_profile_tcp_keepalive_interval - computed: true, optional: false, required: false
  public get configSyncClientProfileTcpKeepaliveInterval() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_keepalive_interval');
  }

  // config_sync_client_profile_tcp_max_window - computed: true, optional: false, required: false
  public get configSyncClientProfileTcpMaxWindow() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_max_window');
  }

  // config_sync_client_profile_tcp_mss - computed: true, optional: false, required: false
  public get configSyncClientProfileTcpMss() {
    return this.getNumberAttribute('config_sync_client_profile_tcp_mss');
  }

  // config_sync_enabled - computed: true, optional: false, required: false
  public get configSyncEnabled() {
    return this.getBooleanAttribute('config_sync_enabled');
  }

  // config_sync_synchronize_username_enabled - computed: true, optional: false, required: false
  public get configSyncSynchronizeUsernameEnabled() {
    return this.getBooleanAttribute('config_sync_synchronize_username_enabled');
  }

  // config_sync_tls_enabled - computed: true, optional: false, required: false
  public get configSyncTlsEnabled() {
    return this.getBooleanAttribute('config_sync_tls_enabled');
  }

  // guaranteed_msging_defragmentation_schedule_day_list - computed: true, optional: false, required: false
  public get guaranteedMsgingDefragmentationScheduleDayList() {
    return this.getStringAttribute('guaranteed_msging_defragmentation_schedule_day_list');
  }

  // guaranteed_msging_defragmentation_schedule_enabled - computed: true, optional: false, required: false
  public get guaranteedMsgingDefragmentationScheduleEnabled() {
    return this.getBooleanAttribute('guaranteed_msging_defragmentation_schedule_enabled');
  }

  // guaranteed_msging_defragmentation_schedule_time_list - computed: true, optional: false, required: false
  public get guaranteedMsgingDefragmentationScheduleTimeList() {
    return this.getStringAttribute('guaranteed_msging_defragmentation_schedule_time_list');
  }

  // guaranteed_msging_defragmentation_threshold_enabled - computed: true, optional: false, required: false
  public get guaranteedMsgingDefragmentationThresholdEnabled() {
    return this.getBooleanAttribute('guaranteed_msging_defragmentation_threshold_enabled');
  }

  // guaranteed_msging_defragmentation_threshold_fragmentation_percentage - computed: true, optional: false, required: false
  public get guaranteedMsgingDefragmentationThresholdFragmentationPercentage() {
    return this.getNumberAttribute('guaranteed_msging_defragmentation_threshold_fragmentation_percentage');
  }

  // guaranteed_msging_defragmentation_threshold_min_interval - computed: true, optional: false, required: false
  public get guaranteedMsgingDefragmentationThresholdMinInterval() {
    return this.getNumberAttribute('guaranteed_msging_defragmentation_threshold_min_interval');
  }

  // guaranteed_msging_defragmentation_threshold_usage_percentage - computed: true, optional: false, required: false
  public get guaranteedMsgingDefragmentationThresholdUsagePercentage() {
    return this.getNumberAttribute('guaranteed_msging_defragmentation_threshold_usage_percentage');
  }

  // guaranteed_msging_disk_array_wwn - computed: true, optional: false, required: false
  public get guaranteedMsgingDiskArrayWwn() {
    return this.getStringAttribute('guaranteed_msging_disk_array_wwn');
  }

  // guaranteed_msging_disk_location - computed: true, optional: false, required: false
  public get guaranteedMsgingDiskLocation() {
    return this.getStringAttribute('guaranteed_msging_disk_location');
  }

  // guaranteed_msging_enabled - computed: true, optional: false, required: false
  public get guaranteedMsgingEnabled() {
    return this.getBooleanAttribute('guaranteed_msging_enabled');
  }

  // guaranteed_msging_event_cache_usage_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventCacheUsageThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventCacheUsageThresholdOutputReference(this, "guaranteed_msging_event_cache_usage_threshold");
  public get guaranteedMsgingEventCacheUsageThreshold() {
    return this._guaranteedMsgingEventCacheUsageThreshold;
  }

  // guaranteed_msging_event_delivered_unacked_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventDeliveredUnackedThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventDeliveredUnackedThresholdOutputReference(this, "guaranteed_msging_event_delivered_unacked_threshold");
  public get guaranteedMsgingEventDeliveredUnackedThreshold() {
    return this._guaranteedMsgingEventDeliveredUnackedThreshold;
  }

  // guaranteed_msging_event_disk_usage_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventDiskUsageThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventDiskUsageThresholdOutputReference(this, "guaranteed_msging_event_disk_usage_threshold");
  public get guaranteedMsgingEventDiskUsageThreshold() {
    return this._guaranteedMsgingEventDiskUsageThreshold;
  }

  // guaranteed_msging_event_egress_flow_count_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventEgressFlowCountThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventEgressFlowCountThresholdOutputReference(this, "guaranteed_msging_event_egress_flow_count_threshold");
  public get guaranteedMsgingEventEgressFlowCountThreshold() {
    return this._guaranteedMsgingEventEgressFlowCountThreshold;
  }

  // guaranteed_msging_event_endpoint_count_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventEndpointCountThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventEndpointCountThresholdOutputReference(this, "guaranteed_msging_event_endpoint_count_threshold");
  public get guaranteedMsgingEventEndpointCountThreshold() {
    return this._guaranteedMsgingEventEndpointCountThreshold;
  }

  // guaranteed_msging_event_ingress_flow_count_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventIngressFlowCountThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventIngressFlowCountThresholdOutputReference(this, "guaranteed_msging_event_ingress_flow_count_threshold");
  public get guaranteedMsgingEventIngressFlowCountThreshold() {
    return this._guaranteedMsgingEventIngressFlowCountThreshold;
  }

  // guaranteed_msging_event_msg_count_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventMsgCountThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventMsgCountThresholdOutputReference(this, "guaranteed_msging_event_msg_count_threshold");
  public get guaranteedMsgingEventMsgCountThreshold() {
    return this._guaranteedMsgingEventMsgCountThreshold;
  }

  // guaranteed_msging_event_msg_spool_file_count_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventMsgSpoolFileCountThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolFileCountThresholdOutputReference(this, "guaranteed_msging_event_msg_spool_file_count_threshold");
  public get guaranteedMsgingEventMsgSpoolFileCountThreshold() {
    return this._guaranteedMsgingEventMsgSpoolFileCountThreshold;
  }

  // guaranteed_msging_event_msg_spool_usage_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventMsgSpoolUsageThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventMsgSpoolUsageThresholdOutputReference(this, "guaranteed_msging_event_msg_spool_usage_threshold");
  public get guaranteedMsgingEventMsgSpoolUsageThreshold() {
    return this._guaranteedMsgingEventMsgSpoolUsageThreshold;
  }

  // guaranteed_msging_event_transacted_session_count_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventTransactedSessionCountThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionCountThresholdOutputReference(this, "guaranteed_msging_event_transacted_session_count_threshold");
  public get guaranteedMsgingEventTransactedSessionCountThreshold() {
    return this._guaranteedMsgingEventTransactedSessionCountThreshold;
  }

  // guaranteed_msging_event_transacted_session_resource_count_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventTransactedSessionResourceCountThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventTransactedSessionResourceCountThresholdOutputReference(this, "guaranteed_msging_event_transacted_session_resource_count_threshold");
  public get guaranteedMsgingEventTransactedSessionResourceCountThreshold() {
    return this._guaranteedMsgingEventTransactedSessionResourceCountThreshold;
  }

  // guaranteed_msging_event_transaction_count_threshold - computed: true, optional: false, required: false
  private _guaranteedMsgingEventTransactionCountThreshold = new DataSolacebrokerBrokerGuaranteedMsgingEventTransactionCountThresholdOutputReference(this, "guaranteed_msging_event_transaction_count_threshold");
  public get guaranteedMsgingEventTransactionCountThreshold() {
    return this._guaranteedMsgingEventTransactionCountThreshold;
  }

  // guaranteed_msging_max_cache_usage - computed: true, optional: false, required: false
  public get guaranteedMsgingMaxCacheUsage() {
    return this.getNumberAttribute('guaranteed_msging_max_cache_usage');
  }

  // guaranteed_msging_max_msg_spool_usage - computed: true, optional: false, required: false
  public get guaranteedMsgingMaxMsgSpoolUsage() {
    return this.getNumberAttribute('guaranteed_msging_max_msg_spool_usage');
  }

  // guaranteed_msging_transaction_replication_compatibility_mode - computed: true, optional: false, required: false
  public get guaranteedMsgingTransactionReplicationCompatibilityMode() {
    return this.getStringAttribute('guaranteed_msging_transaction_replication_compatibility_mode');
  }

  // guaranteed_msging_virtual_router_when_active_active - computed: true, optional: false, required: false
  public get guaranteedMsgingVirtualRouterWhenActiveActive() {
    return this.getStringAttribute('guaranteed_msging_virtual_router_when_active_active');
  }

  // oauth_profile_default - computed: true, optional: false, required: false
  public get oauthProfileDefault() {
    return this.getStringAttribute('oauth_profile_default');
  }

  // service_amqp_enabled - computed: true, optional: false, required: false
  public get serviceAmqpEnabled() {
    return this.getBooleanAttribute('service_amqp_enabled');
  }

  // service_amqp_tls_listen_port - computed: true, optional: false, required: false
  public get serviceAmqpTlsListenPort() {
    return this.getNumberAttribute('service_amqp_tls_listen_port');
  }

  // service_event_connection_count_threshold - computed: true, optional: false, required: false
  private _serviceEventConnectionCountThreshold = new DataSolacebrokerBrokerServiceEventConnectionCountThresholdOutputReference(this, "service_event_connection_count_threshold");
  public get serviceEventConnectionCountThreshold() {
    return this._serviceEventConnectionCountThreshold;
  }

  // service_health_check_enabled - computed: true, optional: false, required: false
  public get serviceHealthCheckEnabled() {
    return this.getBooleanAttribute('service_health_check_enabled');
  }

  // service_health_check_listen_port - computed: true, optional: false, required: false
  public get serviceHealthCheckListenPort() {
    return this.getNumberAttribute('service_health_check_listen_port');
  }

  // service_health_check_tls_enabled - computed: true, optional: false, required: false
  public get serviceHealthCheckTlsEnabled() {
    return this.getBooleanAttribute('service_health_check_tls_enabled');
  }

  // service_health_check_tls_listen_port - computed: true, optional: false, required: false
  public get serviceHealthCheckTlsListenPort() {
    return this.getNumberAttribute('service_health_check_tls_listen_port');
  }

  // service_mqtt_enabled - computed: true, optional: false, required: false
  public get serviceMqttEnabled() {
    return this.getBooleanAttribute('service_mqtt_enabled');
  }

  // service_msg_backbone_enabled - computed: true, optional: false, required: false
  public get serviceMsgBackboneEnabled() {
    return this.getBooleanAttribute('service_msg_backbone_enabled');
  }

  // service_rest_event_outgoing_connection_count_threshold - computed: true, optional: false, required: false
  private _serviceRestEventOutgoingConnectionCountThreshold = new DataSolacebrokerBrokerServiceRestEventOutgoingConnectionCountThresholdOutputReference(this, "service_rest_event_outgoing_connection_count_threshold");
  public get serviceRestEventOutgoingConnectionCountThreshold() {
    return this._serviceRestEventOutgoingConnectionCountThreshold;
  }

  // service_rest_incoming_enabled - computed: true, optional: false, required: false
  public get serviceRestIncomingEnabled() {
    return this.getBooleanAttribute('service_rest_incoming_enabled');
  }

  // service_rest_outgoing_enabled - computed: true, optional: false, required: false
  public get serviceRestOutgoingEnabled() {
    return this.getBooleanAttribute('service_rest_outgoing_enabled');
  }

  // service_semp_cors_allow_any_host_enabled - computed: true, optional: false, required: false
  public get serviceSempCorsAllowAnyHostEnabled() {
    return this.getBooleanAttribute('service_semp_cors_allow_any_host_enabled');
  }

  // service_semp_legacy_timeout_enabled - computed: true, optional: false, required: false
  public get serviceSempLegacyTimeoutEnabled() {
    return this.getBooleanAttribute('service_semp_legacy_timeout_enabled');
  }

  // service_semp_plain_text_enabled - computed: true, optional: false, required: false
  public get serviceSempPlainTextEnabled() {
    return this.getBooleanAttribute('service_semp_plain_text_enabled');
  }

  // service_semp_session_idle_timeout - computed: true, optional: false, required: false
  public get serviceSempSessionIdleTimeout() {
    return this.getNumberAttribute('service_semp_session_idle_timeout');
  }

  // service_semp_session_max_lifetime - computed: true, optional: false, required: false
  public get serviceSempSessionMaxLifetime() {
    return this.getNumberAttribute('service_semp_session_max_lifetime');
  }

  // service_semp_tls_enabled - computed: true, optional: false, required: false
  public get serviceSempTlsEnabled() {
    return this.getBooleanAttribute('service_semp_tls_enabled');
  }

  // service_smf_compression_listen_port - computed: true, optional: false, required: false
  public get serviceSmfCompressionListenPort() {
    return this.getNumberAttribute('service_smf_compression_listen_port');
  }

  // service_smf_enabled - computed: true, optional: false, required: false
  public get serviceSmfEnabled() {
    return this.getBooleanAttribute('service_smf_enabled');
  }

  // service_smf_event_connection_count_threshold - computed: true, optional: false, required: false
  private _serviceSmfEventConnectionCountThreshold = new DataSolacebrokerBrokerServiceSmfEventConnectionCountThresholdOutputReference(this, "service_smf_event_connection_count_threshold");
  public get serviceSmfEventConnectionCountThreshold() {
    return this._serviceSmfEventConnectionCountThreshold;
  }

  // service_smf_plain_text_listen_port - computed: true, optional: false, required: false
  public get serviceSmfPlainTextListenPort() {
    return this.getNumberAttribute('service_smf_plain_text_listen_port');
  }

  // service_smf_routing_control_listen_port - computed: true, optional: false, required: false
  public get serviceSmfRoutingControlListenPort() {
    return this.getNumberAttribute('service_smf_routing_control_listen_port');
  }

  // service_smf_tls_listen_port - computed: true, optional: false, required: false
  public get serviceSmfTlsListenPort() {
    return this.getNumberAttribute('service_smf_tls_listen_port');
  }

  // service_tls_event_connection_count_threshold - computed: true, optional: false, required: false
  private _serviceTlsEventConnectionCountThreshold = new DataSolacebrokerBrokerServiceTlsEventConnectionCountThresholdOutputReference(this, "service_tls_event_connection_count_threshold");
  public get serviceTlsEventConnectionCountThreshold() {
    return this._serviceTlsEventConnectionCountThreshold;
  }

  // service_web_transport_enabled - computed: true, optional: false, required: false
  public get serviceWebTransportEnabled() {
    return this.getBooleanAttribute('service_web_transport_enabled');
  }

  // service_web_transport_plain_text_listen_port - computed: true, optional: false, required: false
  public get serviceWebTransportPlainTextListenPort() {
    return this.getNumberAttribute('service_web_transport_plain_text_listen_port');
  }

  // service_web_transport_tls_listen_port - computed: true, optional: false, required: false
  public get serviceWebTransportTlsListenPort() {
    return this.getNumberAttribute('service_web_transport_tls_listen_port');
  }

  // service_web_transport_web_url_suffix - computed: true, optional: false, required: false
  public get serviceWebTransportWebUrlSuffix() {
    return this.getStringAttribute('service_web_transport_web_url_suffix');
  }

  // tls_block_version10_enabled - computed: true, optional: false, required: false
  public get tlsBlockVersion10Enabled() {
    return this.getBooleanAttribute('tls_block_version10_enabled');
  }

  // tls_block_version11_enabled - computed: true, optional: false, required: false
  public get tlsBlockVersion11Enabled() {
    return this.getBooleanAttribute('tls_block_version11_enabled');
  }

  // tls_cipher_suite_management_list - computed: true, optional: false, required: false
  public get tlsCipherSuiteManagementList() {
    return this.getStringAttribute('tls_cipher_suite_management_list');
  }

  // tls_cipher_suite_msg_backbone_list - computed: true, optional: false, required: false
  public get tlsCipherSuiteMsgBackboneList() {
    return this.getStringAttribute('tls_cipher_suite_msg_backbone_list');
  }

  // tls_cipher_suite_secure_shell_list - computed: true, optional: false, required: false
  public get tlsCipherSuiteSecureShellList() {
    return this.getStringAttribute('tls_cipher_suite_secure_shell_list');
  }

  // tls_crime_exploit_protection_enabled - computed: true, optional: false, required: false
  public get tlsCrimeExploitProtectionEnabled() {
    return this.getBooleanAttribute('tls_crime_exploit_protection_enabled');
  }

  // tls_standard_domain_certificate_authorities_enabled - computed: true, optional: false, required: false
  public get tlsStandardDomainCertificateAuthoritiesEnabled() {
    return this.getBooleanAttribute('tls_standard_domain_certificate_authorities_enabled');
  }

  // tls_ticket_lifetime - computed: true, optional: false, required: false
  public get tlsTicketLifetime() {
    return this.getNumberAttribute('tls_ticket_lifetime');
  }

  // web_manager_allow_unencrypted_wizards_enabled - computed: true, optional: false, required: false
  public get webManagerAllowUnencryptedWizardsEnabled() {
    return this.getBooleanAttribute('web_manager_allow_unencrypted_wizards_enabled');
  }

  // web_manager_redirect_http_enabled - computed: true, optional: false, required: false
  public get webManagerRedirectHttpEnabled() {
    return this.getBooleanAttribute('web_manager_redirect_http_enabled');
  }

  // web_manager_redirect_http_override_tls_port - computed: true, optional: false, required: false
  public get webManagerRedirectHttpOverrideTlsPort() {
    return this.getNumberAttribute('web_manager_redirect_http_override_tls_port');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
