// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessAutostoppingRuleScaleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the cloud connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#cloud_connector_id DataHarnessAutostoppingRuleScaleGroup#cloud_connector_id}
  */
  readonly cloudConnectorId: string;
  /**
  * Custom URLs used to access the instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#custom_domains DataHarnessAutostoppingRuleScaleGroup#custom_domains}
  */
  readonly customDomains?: string[];
  /**
  * Boolean that indicates whether the AutoStopping rule should be created in DryRun mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#dry_run DataHarnessAutostoppingRuleScaleGroup#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#id DataHarnessAutostoppingRuleScaleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle time in minutes. This is the time that the AutoStopping rule waits before stopping the idle instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#idle_time_mins DataHarnessAutostoppingRuleScaleGroup#idle_time_mins}
  */
  readonly idleTimeMins?: number;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#name DataHarnessAutostoppingRuleScaleGroup#name}
  */
  readonly name: string;
  /**
  * depends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#depends DataHarnessAutostoppingRuleScaleGroup#depends}
  */
  readonly depends?: DataHarnessAutostoppingRuleScaleGroupDepends[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#http DataHarnessAutostoppingRuleScaleGroup#http}
  */
  readonly http?: DataHarnessAutostoppingRuleScaleGroupHttp[] | cdktf.IResolvable;
  /**
  * scale_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#scale_group DataHarnessAutostoppingRuleScaleGroup#scale_group}
  */
  readonly scaleGroup: DataHarnessAutostoppingRuleScaleGroupScaleGroup;
}
export interface DataHarnessAutostoppingRuleScaleGroupDepends {
  /**
  * Number of seconds the rule should wait after warming up the dependent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#delay_in_sec DataHarnessAutostoppingRuleScaleGroup#delay_in_sec}
  */
  readonly delayInSec?: number;
  /**
  * Rule id of the dependent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#rule_id DataHarnessAutostoppingRuleScaleGroup#rule_id}
  */
  readonly ruleId: number;
}

export function dataHarnessAutostoppingRuleScaleGroupDependsToTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupDepends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_in_sec: cdktf.numberToTerraform(struct!.delayInSec),
    rule_id: cdktf.numberToTerraform(struct!.ruleId),
  }
}


export function dataHarnessAutostoppingRuleScaleGroupDependsToHclTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupDepends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.delayInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_id: {
      value: cdktf.numberToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleScaleGroupDependsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleScaleGroupDepends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayInSec = this._delayInSec;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleScaleGroupDepends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayInSec = undefined;
      this._ruleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayInSec = value.delayInSec;
      this._ruleId = value.ruleId;
    }
  }

  // delay_in_sec - computed: false, optional: true, required: false
  private _delayInSec?: number; 
  public get delayInSec() {
    return this.getNumberAttribute('delay_in_sec');
  }
  public set delayInSec(value: number) {
    this._delayInSec = value;
  }
  public resetDelayInSec() {
    this._delayInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInSecInput() {
    return this._delayInSec;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}

export class DataHarnessAutostoppingRuleScaleGroupDependsList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleScaleGroupDepends[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleScaleGroupDependsOutputReference {
    return new DataHarnessAutostoppingRuleScaleGroupDependsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleScaleGroupHttpHealth {
  /**
  * API path to use for health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#path DataHarnessAutostoppingRuleScaleGroup#path}
  */
  readonly path?: string;
  /**
  * Health check port on the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#port DataHarnessAutostoppingRuleScaleGroup#port}
  */
  readonly port: number;
  /**
  * Protocol can be http or https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#protocol DataHarnessAutostoppingRuleScaleGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Lower limit for acceptable status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#status_code_from DataHarnessAutostoppingRuleScaleGroup#status_code_from}
  */
  readonly statusCodeFrom?: number;
  /**
  * Upper limit for acceptable status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#status_code_to DataHarnessAutostoppingRuleScaleGroup#status_code_to}
  */
  readonly statusCodeTo?: number;
  /**
  * Health check timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#timeout DataHarnessAutostoppingRuleScaleGroup#timeout}
  */
  readonly timeout?: number;
}

export function dataHarnessAutostoppingRuleScaleGroupHttpHealthToTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupHttpHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code_from: cdktf.numberToTerraform(struct!.statusCodeFrom),
    status_code_to: cdktf.numberToTerraform(struct!.statusCodeTo),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function dataHarnessAutostoppingRuleScaleGroupHttpHealthToHclTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupHttpHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code_from: {
      value: cdktf.numberToHclTerraform(struct!.statusCodeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_code_to: {
      value: cdktf.numberToHclTerraform(struct!.statusCodeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleScaleGroupHttpHealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleScaleGroupHttpHealth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCodeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeFrom = this._statusCodeFrom;
    }
    if (this._statusCodeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeTo = this._statusCodeTo;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleScaleGroupHttpHealth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCodeFrom = undefined;
      this._statusCodeTo = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCodeFrom = value.statusCodeFrom;
      this._statusCodeTo = value.statusCodeTo;
      this._timeout = value.timeout;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // status_code_from - computed: false, optional: true, required: false
  private _statusCodeFrom?: number; 
  public get statusCodeFrom() {
    return this.getNumberAttribute('status_code_from');
  }
  public set statusCodeFrom(value: number) {
    this._statusCodeFrom = value;
  }
  public resetStatusCodeFrom() {
    this._statusCodeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeFromInput() {
    return this._statusCodeFrom;
  }

  // status_code_to - computed: false, optional: true, required: false
  private _statusCodeTo?: number; 
  public get statusCodeTo() {
    return this.getNumberAttribute('status_code_to');
  }
  public set statusCodeTo(value: number) {
    this._statusCodeTo = value;
  }
  public resetStatusCodeTo() {
    this._statusCodeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeToInput() {
    return this._statusCodeTo;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class DataHarnessAutostoppingRuleScaleGroupHttpHealthList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleScaleGroupHttpHealth[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleScaleGroupHttpHealthOutputReference {
    return new DataHarnessAutostoppingRuleScaleGroupHttpHealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleScaleGroupHttpRouting {
  /**
  * Organization Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#action DataHarnessAutostoppingRuleScaleGroup#action}
  */
  readonly action?: string;
  /**
  * Port on the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#source_port DataHarnessAutostoppingRuleScaleGroup#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Source protocol of the proxy can be http or https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#source_protocol DataHarnessAutostoppingRuleScaleGroup#source_protocol}
  */
  readonly sourceProtocol: string;
  /**
  * Port on the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#target_port DataHarnessAutostoppingRuleScaleGroup#target_port}
  */
  readonly targetPort?: number;
  /**
  * Target protocol of the instance can be http or https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#target_protocol DataHarnessAutostoppingRuleScaleGroup#target_protocol}
  */
  readonly targetProtocol: string;
}

export function dataHarnessAutostoppingRuleScaleGroupHttpRoutingToTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupHttpRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    source_protocol: cdktf.stringToTerraform(struct!.sourceProtocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    target_protocol: cdktf.stringToTerraform(struct!.targetProtocol),
  }
}


export function dataHarnessAutostoppingRuleScaleGroupHttpRoutingToHclTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupHttpRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_protocol: {
      value: cdktf.stringToHclTerraform(struct!.sourceProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_protocol: {
      value: cdktf.stringToHclTerraform(struct!.targetProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleScaleGroupHttpRoutingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleScaleGroupHttpRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProtocol = this._sourceProtocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._targetProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProtocol = this._targetProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleScaleGroupHttpRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._sourcePort = undefined;
      this._sourceProtocol = undefined;
      this._targetPort = undefined;
      this._targetProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._sourcePort = value.sourcePort;
      this._sourceProtocol = value.sourceProtocol;
      this._targetPort = value.targetPort;
      this._targetProtocol = value.targetProtocol;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_protocol - computed: false, optional: false, required: true
  private _sourceProtocol?: string; 
  public get sourceProtocol() {
    return this.getStringAttribute('source_protocol');
  }
  public set sourceProtocol(value: string) {
    this._sourceProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProtocolInput() {
    return this._sourceProtocol;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // target_protocol - computed: false, optional: false, required: true
  private _targetProtocol?: string; 
  public get targetProtocol() {
    return this.getStringAttribute('target_protocol');
  }
  public set targetProtocol(value: string) {
    this._targetProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProtocolInput() {
    return this._targetProtocol;
  }
}

export class DataHarnessAutostoppingRuleScaleGroupHttpRoutingList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleScaleGroupHttpRouting[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleScaleGroupHttpRoutingOutputReference {
    return new DataHarnessAutostoppingRuleScaleGroupHttpRoutingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleScaleGroupHttp {
  /**
  * Id of the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#proxy_id DataHarnessAutostoppingRuleScaleGroup#proxy_id}
  */
  readonly proxyId: string;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#health DataHarnessAutostoppingRuleScaleGroup#health}
  */
  readonly health?: DataHarnessAutostoppingRuleScaleGroupHttpHealth[] | cdktf.IResolvable;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#routing DataHarnessAutostoppingRuleScaleGroup#routing}
  */
  readonly routing?: DataHarnessAutostoppingRuleScaleGroupHttpRouting[] | cdktf.IResolvable;
}

export function dataHarnessAutostoppingRuleScaleGroupHttpToTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_id: cdktf.stringToTerraform(struct!.proxyId),
    health: cdktf.listMapper(dataHarnessAutostoppingRuleScaleGroupHttpHealthToTerraform, true)(struct!.health),
    routing: cdktf.listMapper(dataHarnessAutostoppingRuleScaleGroupHttpRoutingToTerraform, true)(struct!.routing),
  }
}


export function dataHarnessAutostoppingRuleScaleGroupHttpToHclTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_id: {
      value: cdktf.stringToHclTerraform(struct!.proxyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health: {
      value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleScaleGroupHttpHealthToHclTerraform, true)(struct!.health),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessAutostoppingRuleScaleGroupHttpHealthList",
    },
    routing: {
      value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleScaleGroupHttpRoutingToHclTerraform, true)(struct!.routing),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessAutostoppingRuleScaleGroupHttpRoutingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleScaleGroupHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessAutostoppingRuleScaleGroupHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyId = this._proxyId;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._routing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleScaleGroupHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyId = undefined;
      this._health.internalValue = undefined;
      this._routing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyId = value.proxyId;
      this._health.internalValue = value.health;
      this._routing.internalValue = value.routing;
    }
  }

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataHarnessAutostoppingRuleScaleGroupHttpHealthList(this, "health", false);
  public get health() {
    return this._health;
  }
  public putHealth(value: DataHarnessAutostoppingRuleScaleGroupHttpHealth[] | cdktf.IResolvable) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new DataHarnessAutostoppingRuleScaleGroupHttpRoutingList(this, "routing", false);
  public get routing() {
    return this._routing;
  }
  public putRouting(value: DataHarnessAutostoppingRuleScaleGroupHttpRouting[] | cdktf.IResolvable) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}

export class DataHarnessAutostoppingRuleScaleGroupHttpList extends cdktf.ComplexList {
  public internalValue? : DataHarnessAutostoppingRuleScaleGroupHttp[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessAutostoppingRuleScaleGroupHttpOutputReference {
    return new DataHarnessAutostoppingRuleScaleGroupHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessAutostoppingRuleScaleGroupScaleGroup {
  /**
  * Desired capacity of the Scaling Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#desired DataHarnessAutostoppingRuleScaleGroup#desired}
  */
  readonly desired: number;
  /**
  * ID of the Scaling Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#id DataHarnessAutostoppingRuleScaleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Maximum capacity of the Scaling Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#max DataHarnessAutostoppingRuleScaleGroup#max}
  */
  readonly max: number;
  /**
  * Minimum capacity of the Scaling Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#min DataHarnessAutostoppingRuleScaleGroup#min}
  */
  readonly min: number;
  /**
  * Name of the Scaling Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#name DataHarnessAutostoppingRuleScaleGroup#name}
  */
  readonly name: string;
  /**
  * On-demand capacity of the Scaling Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#on_demand DataHarnessAutostoppingRuleScaleGroup#on_demand}
  */
  readonly onDemand: number;
  /**
  * Region of the Scaling Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#region DataHarnessAutostoppingRuleScaleGroup#region}
  */
  readonly region?: string;
  /**
  * Zone of the Scaling Group. Needed for GCP only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#zone DataHarnessAutostoppingRuleScaleGroup#zone}
  */
  readonly zone?: string;
}

export function dataHarnessAutostoppingRuleScaleGroupScaleGroupToTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupScaleGroupOutputReference | DataHarnessAutostoppingRuleScaleGroupScaleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired: cdktf.numberToTerraform(struct!.desired),
    id: cdktf.stringToTerraform(struct!.id),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    name: cdktf.stringToTerraform(struct!.name),
    on_demand: cdktf.numberToTerraform(struct!.onDemand),
    region: cdktf.stringToTerraform(struct!.region),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataHarnessAutostoppingRuleScaleGroupScaleGroupToHclTerraform(struct?: DataHarnessAutostoppingRuleScaleGroupScaleGroupOutputReference | DataHarnessAutostoppingRuleScaleGroupScaleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired: {
      value: cdktf.numberToHclTerraform(struct!.desired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
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
    on_demand: {
      value: cdktf.numberToHclTerraform(struct!.onDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessAutostoppingRuleScaleGroupScaleGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessAutostoppingRuleScaleGroupScaleGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desired !== undefined) {
      hasAnyValues = true;
      internalValueResult.desired = this._desired;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemand = this._onDemand;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessAutostoppingRuleScaleGroupScaleGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desired = undefined;
      this._id = undefined;
      this._max = undefined;
      this._min = undefined;
      this._name = undefined;
      this._onDemand = undefined;
      this._region = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desired = value.desired;
      this._id = value.id;
      this._max = value.max;
      this._min = value.min;
      this._name = value.name;
      this._onDemand = value.onDemand;
      this._region = value.region;
      this._zone = value.zone;
    }
  }

  // desired - computed: false, optional: false, required: true
  private _desired?: number; 
  public get desired() {
    return this.getNumberAttribute('desired');
  }
  public set desired(value: number) {
    this._desired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredInput() {
    return this._desired;
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

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // on_demand - computed: false, optional: false, required: true
  private _onDemand?: number; 
  public get onDemand() {
    return this.getNumberAttribute('on_demand');
  }
  public set onDemand(value: number) {
    this._onDemand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandInput() {
    return this._onDemand;
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group harness_autostopping_rule_scale_group}
*/
export class DataHarnessAutostoppingRuleScaleGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_autostopping_rule_scale_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessAutostoppingRuleScaleGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessAutostoppingRuleScaleGroup to import
  * @param importFromId The id of the existing DataHarnessAutostoppingRuleScaleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessAutostoppingRuleScaleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_autostopping_rule_scale_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_rule_scale_group harness_autostopping_rule_scale_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessAutostoppingRuleScaleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessAutostoppingRuleScaleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_autostopping_rule_scale_group',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudConnectorId = config.cloudConnectorId;
    this._customDomains = config.customDomains;
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._idleTimeMins = config.idleTimeMins;
    this._name = config.name;
    this._depends.internalValue = config.depends;
    this._http.internalValue = config.http;
    this._scaleGroup.internalValue = config.scaleGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_connector_id - computed: false, optional: false, required: true
  private _cloudConnectorId?: string; 
  public get cloudConnectorId() {
    return this.getStringAttribute('cloud_connector_id');
  }
  public set cloudConnectorId(value: string) {
    this._cloudConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectorIdInput() {
    return this._cloudConnectorId;
  }

  // custom_domains - computed: false, optional: true, required: false
  private _customDomains?: string[]; 
  public get customDomains() {
    return this.getListAttribute('custom_domains');
  }
  public set customDomains(value: string[]) {
    this._customDomains = value;
  }
  public resetCustomDomains() {
    this._customDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }

  // idle_time_mins - computed: false, optional: true, required: false
  private _idleTimeMins?: number; 
  public get idleTimeMins() {
    return this.getNumberAttribute('idle_time_mins');
  }
  public set idleTimeMins(value: number) {
    this._idleTimeMins = value;
  }
  public resetIdleTimeMins() {
    this._idleTimeMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeMinsInput() {
    return this._idleTimeMins;
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

  // depends - computed: false, optional: true, required: false
  private _depends = new DataHarnessAutostoppingRuleScaleGroupDependsList(this, "depends", false);
  public get depends() {
    return this._depends;
  }
  public putDepends(value: DataHarnessAutostoppingRuleScaleGroupDepends[] | cdktf.IResolvable) {
    this._depends.internalValue = value;
  }
  public resetDepends() {
    this._depends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsInput() {
    return this._depends.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataHarnessAutostoppingRuleScaleGroupHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataHarnessAutostoppingRuleScaleGroupHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // scale_group - computed: false, optional: false, required: true
  private _scaleGroup = new DataHarnessAutostoppingRuleScaleGroupScaleGroupOutputReference(this, "scale_group");
  public get scaleGroup() {
    return this._scaleGroup;
  }
  public putScaleGroup(value: DataHarnessAutostoppingRuleScaleGroupScaleGroup) {
    this._scaleGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleGroupInput() {
    return this._scaleGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_connector_id: cdktf.stringToTerraform(this._cloudConnectorId),
      custom_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customDomains),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      idle_time_mins: cdktf.numberToTerraform(this._idleTimeMins),
      name: cdktf.stringToTerraform(this._name),
      depends: cdktf.listMapper(dataHarnessAutostoppingRuleScaleGroupDependsToTerraform, true)(this._depends.internalValue),
      http: cdktf.listMapper(dataHarnessAutostoppingRuleScaleGroupHttpToTerraform, true)(this._http.internalValue),
      scale_group: dataHarnessAutostoppingRuleScaleGroupScaleGroupToTerraform(this._scaleGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_connector_id: {
        value: cdktf.stringToHclTerraform(this._cloudConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_time_mins: {
        value: cdktf.numberToHclTerraform(this._idleTimeMins),
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
      depends: {
        value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleScaleGroupDependsToHclTerraform, true)(this._depends.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessAutostoppingRuleScaleGroupDependsList",
      },
      http: {
        value: cdktf.listMapperHcl(dataHarnessAutostoppingRuleScaleGroupHttpToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessAutostoppingRuleScaleGroupHttpList",
      },
      scale_group: {
        value: dataHarnessAutostoppingRuleScaleGroupScaleGroupToHclTerraform(this._scaleGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessAutostoppingRuleScaleGroupScaleGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
