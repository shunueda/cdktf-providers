// https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#annotations Check#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#command Check#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#cron Check#cron}
  */
  readonly cron?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#env_vars Check#env_vars}
  */
  readonly envVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#handlers Check#handlers}
  */
  readonly handlers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#high_flap_threshold Check#high_flap_threshold}
  */
  readonly highFlapThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#id Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#interval Check#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#labels Check#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#low_flap_threshold Check#low_flap_threshold}
  */
  readonly lowFlapThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#name Check#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#namespace Check#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#output_metric_format Check#output_metric_format}
  */
  readonly outputMetricFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#output_metric_handlers Check#output_metric_handlers}
  */
  readonly outputMetricHandlers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#proxy_entity_name Check#proxy_entity_name}
  */
  readonly proxyEntityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#publish Check#publish}
  */
  readonly publish?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#round_robin Check#round_robin}
  */
  readonly roundRobin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#runtime_assets Check#runtime_assets}
  */
  readonly runtimeAssets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#secrets Check#secrets}
  */
  readonly secrets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#stdin Check#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#subscriptions Check#subscriptions}
  */
  readonly subscriptions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#timeout Check#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#ttl Check#ttl}
  */
  readonly ttl?: number;
  /**
  * check_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#check_hook Check#check_hook}
  */
  readonly checkHook?: CheckCheckHook[] | cdktf.IResolvable;
  /**
  * pipelines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#pipelines Check#pipelines}
  */
  readonly pipelines?: CheckPipelines[] | cdktf.IResolvable;
  /**
  * proxy_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#proxy_requests Check#proxy_requests}
  */
  readonly proxyRequests?: CheckProxyRequests;
  /**
  * subdue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#subdue Check#subdue}
  */
  readonly subdue?: CheckSubdue[] | cdktf.IResolvable;
}
export interface CheckCheckHook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#hook Check#hook}
  */
  readonly hook?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#trigger Check#trigger}
  */
  readonly trigger?: string;
}

export function checkCheckHookToTerraform(struct?: CheckCheckHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hook: cdktf.stringToTerraform(struct!.hook),
    trigger: cdktf.stringToTerraform(struct!.trigger),
  }
}


export function checkCheckHookToHclTerraform(struct?: CheckCheckHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hook: {
      value: cdktf.stringToHclTerraform(struct!.hook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger: {
      value: cdktf.stringToHclTerraform(struct!.trigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckCheckHookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckCheckHook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hook !== undefined) {
      hasAnyValues = true;
      internalValueResult.hook = this._hook;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckCheckHook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hook = undefined;
      this._trigger = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hook = value.hook;
      this._trigger = value.trigger;
    }
  }

  // hook - computed: false, optional: true, required: false
  private _hook?: string; 
  public get hook() {
    return this.getStringAttribute('hook');
  }
  public set hook(value: string) {
    this._hook = value;
  }
  public resetHook() {
    this._hook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookInput() {
    return this._hook;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }
}

export class CheckCheckHookList extends cdktf.ComplexList {
  public internalValue? : CheckCheckHook[] | cdktf.IResolvable

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
  public get(index: number): CheckCheckHookOutputReference {
    return new CheckCheckHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckPipelines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#api_version Check#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#name Check#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#type Check#type}
  */
  readonly type?: string;
}

export function checkPipelinesToTerraform(struct?: CheckPipelines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function checkPipelinesToHclTerraform(struct?: CheckPipelines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckPipelinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckPipelines | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckPipelines | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CheckPipelinesList extends cdktf.ComplexList {
  public internalValue? : CheckPipelines[] | cdktf.IResolvable

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
  public get(index: number): CheckPipelinesOutputReference {
    return new CheckPipelinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckProxyRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#entity_attributes Check#entity_attributes}
  */
  readonly entityAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#splay Check#splay}
  */
  readonly splay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#splay_coverage Check#splay_coverage}
  */
  readonly splayCoverage?: number;
}

export function checkProxyRequestsToTerraform(struct?: CheckProxyRequestsOutputReference | CheckProxyRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityAttributes),
    splay: cdktf.booleanToTerraform(struct!.splay),
    splay_coverage: cdktf.numberToTerraform(struct!.splayCoverage),
  }
}


export function checkProxyRequestsToHclTerraform(struct?: CheckProxyRequestsOutputReference | CheckProxyRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    splay: {
      value: cdktf.booleanToHclTerraform(struct!.splay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    splay_coverage: {
      value: cdktf.numberToHclTerraform(struct!.splayCoverage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckProxyRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckProxyRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityAttributes = this._entityAttributes;
    }
    if (this._splay !== undefined) {
      hasAnyValues = true;
      internalValueResult.splay = this._splay;
    }
    if (this._splayCoverage !== undefined) {
      hasAnyValues = true;
      internalValueResult.splayCoverage = this._splayCoverage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckProxyRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityAttributes = undefined;
      this._splay = undefined;
      this._splayCoverage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityAttributes = value.entityAttributes;
      this._splay = value.splay;
      this._splayCoverage = value.splayCoverage;
    }
  }

  // entity_attributes - computed: false, optional: true, required: false
  private _entityAttributes?: string[]; 
  public get entityAttributes() {
    return this.getListAttribute('entity_attributes');
  }
  public set entityAttributes(value: string[]) {
    this._entityAttributes = value;
  }
  public resetEntityAttributes() {
    this._entityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityAttributesInput() {
    return this._entityAttributes;
  }

  // splay - computed: false, optional: true, required: false
  private _splay?: boolean | cdktf.IResolvable; 
  public get splay() {
    return this.getBooleanAttribute('splay');
  }
  public set splay(value: boolean | cdktf.IResolvable) {
    this._splay = value;
  }
  public resetSplay() {
    this._splay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splayInput() {
    return this._splay;
  }

  // splay_coverage - computed: false, optional: true, required: false
  private _splayCoverage?: number; 
  public get splayCoverage() {
    return this.getNumberAttribute('splay_coverage');
  }
  public set splayCoverage(value: number) {
    this._splayCoverage = value;
  }
  public resetSplayCoverage() {
    this._splayCoverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splayCoverageInput() {
    return this._splayCoverage;
  }
}
export interface CheckSubdue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#begin Check#begin}
  */
  readonly begin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#day Check#day}
  */
  readonly day: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#end Check#end}
  */
  readonly end: string;
}

export function checkSubdueToTerraform(struct?: CheckSubdue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.stringToTerraform(struct!.begin),
    day: cdktf.stringToTerraform(struct!.day),
    end: cdktf.stringToTerraform(struct!.end),
  }
}


export function checkSubdueToHclTerraform(struct?: CheckSubdue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.stringToHclTerraform(struct!.begin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckSubdueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckSubdue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin;
    }
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckSubdue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin = undefined;
      this._day = undefined;
      this._end = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin = value.begin;
      this._day = value.day;
      this._end = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin?: string; 
  public get begin() {
    return this.getStringAttribute('begin');
  }
  public set begin(value: string) {
    this._begin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin;
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }
}

export class CheckSubdueList extends cdktf.ComplexList {
  public internalValue? : CheckSubdue[] | cdktf.IResolvable

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
  public get(index: number): CheckSubdueOutputReference {
    return new CheckSubdueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check sensu_check}
*/
export class Check extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sensu_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Check resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Check to import
  * @param importFromId The id of the existing Check that should be imported. Refer to the {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Check to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sensu_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/check sensu_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckConfig
  */
  public constructor(scope: Construct, id: string, config: CheckConfig) {
    super(scope, id, {
      terraformResourceType: 'sensu_check',
      terraformGeneratorMetadata: {
        providerName: 'sensu',
        providerVersion: '0.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._command = config.command;
    this._cron = config.cron;
    this._envVars = config.envVars;
    this._handlers = config.handlers;
    this._highFlapThreshold = config.highFlapThreshold;
    this._id = config.id;
    this._interval = config.interval;
    this._labels = config.labels;
    this._lowFlapThreshold = config.lowFlapThreshold;
    this._name = config.name;
    this._namespace = config.namespace;
    this._outputMetricFormat = config.outputMetricFormat;
    this._outputMetricHandlers = config.outputMetricHandlers;
    this._proxyEntityName = config.proxyEntityName;
    this._publish = config.publish;
    this._roundRobin = config.roundRobin;
    this._runtimeAssets = config.runtimeAssets;
    this._secrets = config.secrets;
    this._stdin = config.stdin;
    this._subscriptions = config.subscriptions;
    this._timeout = config.timeout;
    this._ttl = config.ttl;
    this._checkHook.internalValue = config.checkHook;
    this._pipelines.internalValue = config.pipelines;
    this._proxyRequests.internalValue = config.proxyRequests;
    this._subdue.internalValue = config.subdue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // cron - computed: false, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars?: { [key: string]: string }; 
  public get envVars() {
    return this.getStringMapAttribute('env_vars');
  }
  public set envVars(value: { [key: string]: string }) {
    this._envVars = value;
  }
  public resetEnvVars() {
    this._envVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars;
  }

  // handlers - computed: false, optional: true, required: false
  private _handlers?: string[]; 
  public get handlers() {
    return this.getListAttribute('handlers');
  }
  public set handlers(value: string[]) {
    this._handlers = value;
  }
  public resetHandlers() {
    this._handlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlersInput() {
    return this._handlers;
  }

  // high_flap_threshold - computed: false, optional: true, required: false
  private _highFlapThreshold?: number; 
  public get highFlapThreshold() {
    return this.getNumberAttribute('high_flap_threshold');
  }
  public set highFlapThreshold(value: number) {
    this._highFlapThreshold = value;
  }
  public resetHighFlapThreshold() {
    this._highFlapThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highFlapThresholdInput() {
    return this._highFlapThreshold;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // low_flap_threshold - computed: false, optional: true, required: false
  private _lowFlapThreshold?: number; 
  public get lowFlapThreshold() {
    return this.getNumberAttribute('low_flap_threshold');
  }
  public set lowFlapThreshold(value: number) {
    this._lowFlapThreshold = value;
  }
  public resetLowFlapThreshold() {
    this._lowFlapThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowFlapThresholdInput() {
    return this._lowFlapThreshold;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // output_metric_format - computed: false, optional: true, required: false
  private _outputMetricFormat?: string; 
  public get outputMetricFormat() {
    return this.getStringAttribute('output_metric_format');
  }
  public set outputMetricFormat(value: string) {
    this._outputMetricFormat = value;
  }
  public resetOutputMetricFormat() {
    this._outputMetricFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputMetricFormatInput() {
    return this._outputMetricFormat;
  }

  // output_metric_handlers - computed: false, optional: true, required: false
  private _outputMetricHandlers?: string[]; 
  public get outputMetricHandlers() {
    return this.getListAttribute('output_metric_handlers');
  }
  public set outputMetricHandlers(value: string[]) {
    this._outputMetricHandlers = value;
  }
  public resetOutputMetricHandlers() {
    this._outputMetricHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputMetricHandlersInput() {
    return this._outputMetricHandlers;
  }

  // proxy_entity_name - computed: false, optional: true, required: false
  private _proxyEntityName?: string; 
  public get proxyEntityName() {
    return this.getStringAttribute('proxy_entity_name');
  }
  public set proxyEntityName(value: string) {
    this._proxyEntityName = value;
  }
  public resetProxyEntityName() {
    this._proxyEntityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyEntityNameInput() {
    return this._proxyEntityName;
  }

  // publish - computed: false, optional: true, required: false
  private _publish?: boolean | cdktf.IResolvable; 
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktf.IResolvable) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin?: boolean | cdktf.IResolvable; 
  public get roundRobin() {
    return this.getBooleanAttribute('round_robin');
  }
  public set roundRobin(value: boolean | cdktf.IResolvable) {
    this._roundRobin = value;
  }
  public resetRoundRobin() {
    this._roundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin;
  }

  // runtime_assets - computed: false, optional: true, required: false
  private _runtimeAssets?: string[]; 
  public get runtimeAssets() {
    return this.getListAttribute('runtime_assets');
  }
  public set runtimeAssets(value: string[]) {
    this._runtimeAssets = value;
  }
  public resetRuntimeAssets() {
    this._runtimeAssets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeAssetsInput() {
    return this._runtimeAssets;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: { [key: string]: string }; 
  public get secrets() {
    return this.getStringMapAttribute('secrets');
  }
  public set secrets(value: { [key: string]: string }) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // stdin - computed: false, optional: true, required: false
  private _stdin?: boolean | cdktf.IResolvable; 
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }
  public set stdin(value: boolean | cdktf.IResolvable) {
    this._stdin = value;
  }
  public resetStdin() {
    this._stdin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinInput() {
    return this._stdin;
  }

  // subscriptions - computed: false, optional: false, required: true
  private _subscriptions?: string[]; 
  public get subscriptions() {
    return this.getListAttribute('subscriptions');
  }
  public set subscriptions(value: string[]) {
    this._subscriptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // check_hook - computed: false, optional: true, required: false
  private _checkHook = new CheckCheckHookList(this, "check_hook", true);
  public get checkHook() {
    return this._checkHook;
  }
  public putCheckHook(value: CheckCheckHook[] | cdktf.IResolvable) {
    this._checkHook.internalValue = value;
  }
  public resetCheckHook() {
    this._checkHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkHookInput() {
    return this._checkHook.internalValue;
  }

  // pipelines - computed: false, optional: true, required: false
  private _pipelines = new CheckPipelinesList(this, "pipelines", false);
  public get pipelines() {
    return this._pipelines;
  }
  public putPipelines(value: CheckPipelines[] | cdktf.IResolvable) {
    this._pipelines.internalValue = value;
  }
  public resetPipelines() {
    this._pipelines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelinesInput() {
    return this._pipelines.internalValue;
  }

  // proxy_requests - computed: false, optional: true, required: false
  private _proxyRequests = new CheckProxyRequestsOutputReference(this, "proxy_requests");
  public get proxyRequests() {
    return this._proxyRequests;
  }
  public putProxyRequests(value: CheckProxyRequests) {
    this._proxyRequests.internalValue = value;
  }
  public resetProxyRequests() {
    this._proxyRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyRequestsInput() {
    return this._proxyRequests.internalValue;
  }

  // subdue - computed: false, optional: true, required: false
  private _subdue = new CheckSubdueList(this, "subdue", true);
  public get subdue() {
    return this._subdue;
  }
  public putSubdue(value: CheckSubdue[] | cdktf.IResolvable) {
    this._subdue.internalValue = value;
  }
  public resetSubdue() {
    this._subdue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdueInput() {
    return this._subdue.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      command: cdktf.stringToTerraform(this._command),
      cron: cdktf.stringToTerraform(this._cron),
      env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._envVars),
      handlers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._handlers),
      high_flap_threshold: cdktf.numberToTerraform(this._highFlapThreshold),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      low_flap_threshold: cdktf.numberToTerraform(this._lowFlapThreshold),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      output_metric_format: cdktf.stringToTerraform(this._outputMetricFormat),
      output_metric_handlers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outputMetricHandlers),
      proxy_entity_name: cdktf.stringToTerraform(this._proxyEntityName),
      publish: cdktf.booleanToTerraform(this._publish),
      round_robin: cdktf.booleanToTerraform(this._roundRobin),
      runtime_assets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runtimeAssets),
      secrets: cdktf.hashMapper(cdktf.stringToTerraform)(this._secrets),
      stdin: cdktf.booleanToTerraform(this._stdin),
      subscriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptions),
      timeout: cdktf.numberToTerraform(this._timeout),
      ttl: cdktf.numberToTerraform(this._ttl),
      check_hook: cdktf.listMapper(checkCheckHookToTerraform, true)(this._checkHook.internalValue),
      pipelines: cdktf.listMapper(checkPipelinesToTerraform, true)(this._pipelines.internalValue),
      proxy_requests: checkProxyRequestsToTerraform(this._proxyRequests.internalValue),
      subdue: cdktf.listMapper(checkSubdueToTerraform, true)(this._subdue.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._envVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      handlers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._handlers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      high_flap_threshold: {
        value: cdktf.numberToHclTerraform(this._highFlapThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      low_flap_threshold: {
        value: cdktf.numberToHclTerraform(this._lowFlapThreshold),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_metric_format: {
        value: cdktf.stringToHclTerraform(this._outputMetricFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_metric_handlers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outputMetricHandlers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      proxy_entity_name: {
        value: cdktf.stringToHclTerraform(this._proxyEntityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish: {
        value: cdktf.booleanToHclTerraform(this._publish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      round_robin: {
        value: cdktf.booleanToHclTerraform(this._roundRobin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      runtime_assets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runtimeAssets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secrets: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._secrets),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      stdin: {
        value: cdktf.booleanToHclTerraform(this._stdin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscriptions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_hook: {
        value: cdktf.listMapperHcl(checkCheckHookToHclTerraform, true)(this._checkHook.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckCheckHookList",
      },
      pipelines: {
        value: cdktf.listMapperHcl(checkPipelinesToHclTerraform, true)(this._pipelines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckPipelinesList",
      },
      proxy_requests: {
        value: checkProxyRequestsToHclTerraform(this._proxyRequests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckProxyRequestsList",
      },
      subdue: {
        value: cdktf.listMapperHcl(checkSubdueToHclTerraform, true)(this._subdue.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckSubdueList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
