// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessEventrouterRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the bus that the rule belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#bus_id ServerlessEventrouterRule#bus_id}
  */
  readonly busId: string;
  /**
  * Description of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#description ServerlessEventrouterRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#id ServerlessEventrouterRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * JQ filter for matching events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#jq_filter ServerlessEventrouterRule#jq_filter}
  */
  readonly jqFilter?: string;
  /**
  * Rule labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#labels ServerlessEventrouterRule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#name ServerlessEventrouterRule#name}
  */
  readonly name: string;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#container ServerlessEventrouterRule#container}
  */
  readonly container?: ServerlessEventrouterRuleContainer[] | cdktf.IResolvable;
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#function ServerlessEventrouterRule#function}
  */
  readonly function?: ServerlessEventrouterRuleFunction[] | cdktf.IResolvable;
  /**
  * gateway_websocket_broadcast block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#gateway_websocket_broadcast ServerlessEventrouterRule#gateway_websocket_broadcast}
  */
  readonly gatewayWebsocketBroadcast?: ServerlessEventrouterRuleGatewayWebsocketBroadcast[] | cdktf.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#logging ServerlessEventrouterRule#logging}
  */
  readonly logging?: ServerlessEventrouterRuleLogging[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#timeouts ServerlessEventrouterRule#timeouts}
  */
  readonly timeouts?: ServerlessEventrouterRuleTimeouts;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#workflow ServerlessEventrouterRule#workflow}
  */
  readonly workflow?: ServerlessEventrouterRuleWorkflow[] | cdktf.IResolvable;
  /**
  * yds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#yds ServerlessEventrouterRule#yds}
  */
  readonly yds?: ServerlessEventrouterRuleYds[] | cdktf.IResolvable;
  /**
  * ymq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#ymq ServerlessEventrouterRule#ymq}
  */
  readonly ymq?: ServerlessEventrouterRuleYmq[] | cdktf.IResolvable;
}
export interface ServerlessEventrouterRuleContainerBatchSettings {
  /**
  * Maximum batch size: rule will send a batch if its lifetime exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#cutoff ServerlessEventrouterRule#cutoff}
  */
  readonly cutoff: string;
  /**
  * Maximum batch size: rule will send a batch if total size of events exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#max_bytes ServerlessEventrouterRule#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Maximum batch size: rule will send a batch if number of events exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#max_count ServerlessEventrouterRule#max_count}
  */
  readonly maxCount?: number;
}

export function serverlessEventrouterRuleContainerBatchSettingsToTerraform(struct?: ServerlessEventrouterRuleContainerBatchSettingsOutputReference | ServerlessEventrouterRuleContainerBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cutoff: cdktf.stringToTerraform(struct!.cutoff),
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
  }
}


export function serverlessEventrouterRuleContainerBatchSettingsToHclTerraform(struct?: ServerlessEventrouterRuleContainerBatchSettingsOutputReference | ServerlessEventrouterRuleContainerBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cutoff: {
      value: cdktf.stringToHclTerraform(struct!.cutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleContainerBatchSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessEventrouterRuleContainerBatchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.cutoff = this._cutoff;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleContainerBatchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cutoff = undefined;
      this._maxBytes = undefined;
      this._maxCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cutoff = value.cutoff;
      this._maxBytes = value.maxBytes;
      this._maxCount = value.maxCount;
    }
  }

  // cutoff - computed: false, optional: false, required: true
  private _cutoff?: string; 
  public get cutoff() {
    return this.getStringAttribute('cutoff');
  }
  public set cutoff(value: string) {
    this._cutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffInput() {
    return this._cutoff;
  }

  // max_bytes - computed: true, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_count - computed: true, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }
}
export interface ServerlessEventrouterRuleContainer {
  /**
  * Container ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#container_id ServerlessEventrouterRule#container_id}
  */
  readonly containerId: string;
  /**
  * Container revision ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#container_revision_id ServerlessEventrouterRule#container_revision_id}
  */
  readonly containerRevisionId?: string;
  /**
  * Endpoint HTTP path to invoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#path ServerlessEventrouterRule#path}
  */
  readonly path?: string;
  /**
  * Service account which should be used to call a container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#service_account_id ServerlessEventrouterRule#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * batch_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#batch_settings ServerlessEventrouterRule#batch_settings}
  */
  readonly batchSettings?: ServerlessEventrouterRuleContainerBatchSettings;
}

export function serverlessEventrouterRuleContainerToTerraform(struct?: ServerlessEventrouterRuleContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    container_revision_id: cdktf.stringToTerraform(struct!.containerRevisionId),
    path: cdktf.stringToTerraform(struct!.path),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    batch_settings: serverlessEventrouterRuleContainerBatchSettingsToTerraform(struct!.batchSettings),
  }
}


export function serverlessEventrouterRuleContainerToHclTerraform(struct?: ServerlessEventrouterRuleContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_revision_id: {
      value: cdktf.stringToHclTerraform(struct!.containerRevisionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_settings: {
      value: serverlessEventrouterRuleContainerBatchSettingsToHclTerraform(struct!.batchSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ServerlessEventrouterRuleContainerBatchSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessEventrouterRuleContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._containerRevisionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRevisionId = this._containerRevisionId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._batchSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSettings = this._batchSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerId = undefined;
      this._containerRevisionId = undefined;
      this._path = undefined;
      this._serviceAccountId = undefined;
      this._batchSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerId = value.containerId;
      this._containerRevisionId = value.containerRevisionId;
      this._path = value.path;
      this._serviceAccountId = value.serviceAccountId;
      this._batchSettings.internalValue = value.batchSettings;
    }
  }

  // container_id - computed: false, optional: false, required: true
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // container_revision_id - computed: false, optional: true, required: false
  private _containerRevisionId?: string; 
  public get containerRevisionId() {
    return this.getStringAttribute('container_revision_id');
  }
  public set containerRevisionId(value: string) {
    this._containerRevisionId = value;
  }
  public resetContainerRevisionId() {
    this._containerRevisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRevisionIdInput() {
    return this._containerRevisionId;
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

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // batch_settings - computed: false, optional: true, required: false
  private _batchSettings = new ServerlessEventrouterRuleContainerBatchSettingsOutputReference(this, "batch_settings");
  public get batchSettings() {
    return this._batchSettings;
  }
  public putBatchSettings(value: ServerlessEventrouterRuleContainerBatchSettings) {
    this._batchSettings.internalValue = value;
  }
  public resetBatchSettings() {
    this._batchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSettingsInput() {
    return this._batchSettings.internalValue;
  }
}

export class ServerlessEventrouterRuleContainerList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterRuleContainer[] | cdktf.IResolvable

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
  public get(index: number): ServerlessEventrouterRuleContainerOutputReference {
    return new ServerlessEventrouterRuleContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessEventrouterRuleFunctionBatchSettings {
  /**
  * Maximum batch size: rule will send a batch if its lifetime exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#cutoff ServerlessEventrouterRule#cutoff}
  */
  readonly cutoff: string;
  /**
  * Maximum batch size: rule will send a batch if total size of events exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#max_bytes ServerlessEventrouterRule#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Maximum batch size: rule will send a batch if number of events exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#max_count ServerlessEventrouterRule#max_count}
  */
  readonly maxCount?: number;
}

export function serverlessEventrouterRuleFunctionBatchSettingsToTerraform(struct?: ServerlessEventrouterRuleFunctionBatchSettingsOutputReference | ServerlessEventrouterRuleFunctionBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cutoff: cdktf.stringToTerraform(struct!.cutoff),
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
  }
}


export function serverlessEventrouterRuleFunctionBatchSettingsToHclTerraform(struct?: ServerlessEventrouterRuleFunctionBatchSettingsOutputReference | ServerlessEventrouterRuleFunctionBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cutoff: {
      value: cdktf.stringToHclTerraform(struct!.cutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleFunctionBatchSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessEventrouterRuleFunctionBatchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.cutoff = this._cutoff;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleFunctionBatchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cutoff = undefined;
      this._maxBytes = undefined;
      this._maxCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cutoff = value.cutoff;
      this._maxBytes = value.maxBytes;
      this._maxCount = value.maxCount;
    }
  }

  // cutoff - computed: false, optional: false, required: true
  private _cutoff?: string; 
  public get cutoff() {
    return this.getStringAttribute('cutoff');
  }
  public set cutoff(value: string) {
    this._cutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffInput() {
    return this._cutoff;
  }

  // max_bytes - computed: true, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_count - computed: true, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }
}
export interface ServerlessEventrouterRuleFunction {
  /**
  * Function ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#function_id ServerlessEventrouterRule#function_id}
  */
  readonly functionId: string;
  /**
  * Function tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#function_tag ServerlessEventrouterRule#function_tag}
  */
  readonly functionTag?: string;
  /**
  * Service account which has call permission on the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#service_account_id ServerlessEventrouterRule#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * batch_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#batch_settings ServerlessEventrouterRule#batch_settings}
  */
  readonly batchSettings?: ServerlessEventrouterRuleFunctionBatchSettings;
}

export function serverlessEventrouterRuleFunctionToTerraform(struct?: ServerlessEventrouterRuleFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_id: cdktf.stringToTerraform(struct!.functionId),
    function_tag: cdktf.stringToTerraform(struct!.functionTag),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    batch_settings: serverlessEventrouterRuleFunctionBatchSettingsToTerraform(struct!.batchSettings),
  }
}


export function serverlessEventrouterRuleFunctionToHclTerraform(struct?: ServerlessEventrouterRuleFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_tag: {
      value: cdktf.stringToHclTerraform(struct!.functionTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_settings: {
      value: serverlessEventrouterRuleFunctionBatchSettingsToHclTerraform(struct!.batchSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ServerlessEventrouterRuleFunctionBatchSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessEventrouterRuleFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._functionTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionTag = this._functionTag;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._batchSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSettings = this._batchSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionId = undefined;
      this._functionTag = undefined;
      this._serviceAccountId = undefined;
      this._batchSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionId = value.functionId;
      this._functionTag = value.functionTag;
      this._serviceAccountId = value.serviceAccountId;
      this._batchSettings.internalValue = value.batchSettings;
    }
  }

  // function_id - computed: false, optional: false, required: true
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // function_tag - computed: false, optional: true, required: false
  private _functionTag?: string; 
  public get functionTag() {
    return this.getStringAttribute('function_tag');
  }
  public set functionTag(value: string) {
    this._functionTag = value;
  }
  public resetFunctionTag() {
    this._functionTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTagInput() {
    return this._functionTag;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // batch_settings - computed: false, optional: true, required: false
  private _batchSettings = new ServerlessEventrouterRuleFunctionBatchSettingsOutputReference(this, "batch_settings");
  public get batchSettings() {
    return this._batchSettings;
  }
  public putBatchSettings(value: ServerlessEventrouterRuleFunctionBatchSettings) {
    this._batchSettings.internalValue = value;
  }
  public resetBatchSettings() {
    this._batchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSettingsInput() {
    return this._batchSettings.internalValue;
  }
}

export class ServerlessEventrouterRuleFunctionList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterRuleFunction[] | cdktf.IResolvable

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
  public get(index: number): ServerlessEventrouterRuleFunctionOutputReference {
    return new ServerlessEventrouterRuleFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettings {
  /**
  * Maximum batch size: rule will send a batch if its lifetime exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#cutoff ServerlessEventrouterRule#cutoff}
  */
  readonly cutoff: string;
  /**
  * Maximum batch size: rule will send a batch if total size of events exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#max_bytes ServerlessEventrouterRule#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Maximum batch size: rule will send a batch if number of events exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#max_count ServerlessEventrouterRule#max_count}
  */
  readonly maxCount?: number;
}

export function serverlessEventrouterRuleGatewayWebsocketBroadcastBatchSettingsToTerraform(struct?: ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettingsOutputReference | ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cutoff: cdktf.stringToTerraform(struct!.cutoff),
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
  }
}


export function serverlessEventrouterRuleGatewayWebsocketBroadcastBatchSettingsToHclTerraform(struct?: ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettingsOutputReference | ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cutoff: {
      value: cdktf.stringToHclTerraform(struct!.cutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.cutoff = this._cutoff;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cutoff = undefined;
      this._maxBytes = undefined;
      this._maxCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cutoff = value.cutoff;
      this._maxBytes = value.maxBytes;
      this._maxCount = value.maxCount;
    }
  }

  // cutoff - computed: false, optional: false, required: true
  private _cutoff?: string; 
  public get cutoff() {
    return this.getStringAttribute('cutoff');
  }
  public set cutoff(value: string) {
    this._cutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffInput() {
    return this._cutoff;
  }

  // max_bytes - computed: true, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_count - computed: true, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }
}
export interface ServerlessEventrouterRuleGatewayWebsocketBroadcast {
  /**
  * Gateway ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#gateway_id ServerlessEventrouterRule#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#path ServerlessEventrouterRule#path}
  */
  readonly path: string;
  /**
  * Service account which has permission for writing to websockets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#service_account_id ServerlessEventrouterRule#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * batch_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#batch_settings ServerlessEventrouterRule#batch_settings}
  */
  readonly batchSettings?: ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettings;
}

export function serverlessEventrouterRuleGatewayWebsocketBroadcastToTerraform(struct?: ServerlessEventrouterRuleGatewayWebsocketBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    path: cdktf.stringToTerraform(struct!.path),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    batch_settings: serverlessEventrouterRuleGatewayWebsocketBroadcastBatchSettingsToTerraform(struct!.batchSettings),
  }
}


export function serverlessEventrouterRuleGatewayWebsocketBroadcastToHclTerraform(struct?: ServerlessEventrouterRuleGatewayWebsocketBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.gatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_settings: {
      value: serverlessEventrouterRuleGatewayWebsocketBroadcastBatchSettingsToHclTerraform(struct!.batchSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleGatewayWebsocketBroadcastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessEventrouterRuleGatewayWebsocketBroadcast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayId = this._gatewayId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._batchSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSettings = this._batchSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleGatewayWebsocketBroadcast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayId = undefined;
      this._path = undefined;
      this._serviceAccountId = undefined;
      this._batchSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayId = value.gatewayId;
      this._path = value.path;
      this._serviceAccountId = value.serviceAccountId;
      this._batchSettings.internalValue = value.batchSettings;
    }
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // batch_settings - computed: false, optional: true, required: false
  private _batchSettings = new ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettingsOutputReference(this, "batch_settings");
  public get batchSettings() {
    return this._batchSettings;
  }
  public putBatchSettings(value: ServerlessEventrouterRuleGatewayWebsocketBroadcastBatchSettings) {
    this._batchSettings.internalValue = value;
  }
  public resetBatchSettings() {
    this._batchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSettingsInput() {
    return this._batchSettings.internalValue;
  }
}

export class ServerlessEventrouterRuleGatewayWebsocketBroadcastList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterRuleGatewayWebsocketBroadcast[] | cdktf.IResolvable

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
  public get(index: number): ServerlessEventrouterRuleGatewayWebsocketBroadcastOutputReference {
    return new ServerlessEventrouterRuleGatewayWebsocketBroadcastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessEventrouterRuleLogging {
  /**
  * Folder ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#folder_id ServerlessEventrouterRule#folder_id}
  */
  readonly folderId?: string;
  /**
  * Log group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#log_group_id ServerlessEventrouterRule#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Service account which has permission for writing logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#service_account_id ServerlessEventrouterRule#service_account_id}
  */
  readonly serviceAccountId: string;
}

export function serverlessEventrouterRuleLoggingToTerraform(struct?: ServerlessEventrouterRuleLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function serverlessEventrouterRuleLoggingToHclTerraform(struct?: ServerlessEventrouterRuleLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessEventrouterRuleLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folderId = undefined;
      this._logGroupId = undefined;
      this._serviceAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folderId = value.folderId;
      this._logGroupId = value.logGroupId;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}

export class ServerlessEventrouterRuleLoggingList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterRuleLogging[] | cdktf.IResolvable

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
  public get(index: number): ServerlessEventrouterRuleLoggingOutputReference {
    return new ServerlessEventrouterRuleLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessEventrouterRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#create ServerlessEventrouterRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#delete ServerlessEventrouterRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#read ServerlessEventrouterRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#update ServerlessEventrouterRule#update}
  */
  readonly update?: string;
}

export function serverlessEventrouterRuleTimeoutsToTerraform(struct?: ServerlessEventrouterRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serverlessEventrouterRuleTimeoutsToHclTerraform(struct?: ServerlessEventrouterRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerlessEventrouterRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ServerlessEventrouterRuleWorkflowBatchSettings {
  /**
  * Maximum batch size: rule will send a batch if its lifetime exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#cutoff ServerlessEventrouterRule#cutoff}
  */
  readonly cutoff: string;
  /**
  * Maximum batch size: rule will send a batch if total size of events exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#max_bytes ServerlessEventrouterRule#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Maximum batch size: rule will send a batch if number of events exceeds this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#max_count ServerlessEventrouterRule#max_count}
  */
  readonly maxCount?: number;
}

export function serverlessEventrouterRuleWorkflowBatchSettingsToTerraform(struct?: ServerlessEventrouterRuleWorkflowBatchSettingsOutputReference | ServerlessEventrouterRuleWorkflowBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cutoff: cdktf.stringToTerraform(struct!.cutoff),
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
  }
}


export function serverlessEventrouterRuleWorkflowBatchSettingsToHclTerraform(struct?: ServerlessEventrouterRuleWorkflowBatchSettingsOutputReference | ServerlessEventrouterRuleWorkflowBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cutoff: {
      value: cdktf.stringToHclTerraform(struct!.cutoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleWorkflowBatchSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerlessEventrouterRuleWorkflowBatchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cutoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.cutoff = this._cutoff;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleWorkflowBatchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cutoff = undefined;
      this._maxBytes = undefined;
      this._maxCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cutoff = value.cutoff;
      this._maxBytes = value.maxBytes;
      this._maxCount = value.maxCount;
    }
  }

  // cutoff - computed: false, optional: false, required: true
  private _cutoff?: string; 
  public get cutoff() {
    return this.getStringAttribute('cutoff');
  }
  public set cutoff(value: string) {
    this._cutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffInput() {
    return this._cutoff;
  }

  // max_bytes - computed: true, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_count - computed: true, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }
}
export interface ServerlessEventrouterRuleWorkflow {
  /**
  * Service account which should be used to start workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#service_account_id ServerlessEventrouterRule#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Workflow ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#workflow_id ServerlessEventrouterRule#workflow_id}
  */
  readonly workflowId: string;
  /**
  * batch_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#batch_settings ServerlessEventrouterRule#batch_settings}
  */
  readonly batchSettings?: ServerlessEventrouterRuleWorkflowBatchSettings;
}

export function serverlessEventrouterRuleWorkflowToTerraform(struct?: ServerlessEventrouterRuleWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
    batch_settings: serverlessEventrouterRuleWorkflowBatchSettingsToTerraform(struct!.batchSettings),
  }
}


export function serverlessEventrouterRuleWorkflowToHclTerraform(struct?: ServerlessEventrouterRuleWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_id: {
      value: cdktf.stringToHclTerraform(struct!.workflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_settings: {
      value: serverlessEventrouterRuleWorkflowBatchSettingsToHclTerraform(struct!.batchSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ServerlessEventrouterRuleWorkflowBatchSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessEventrouterRuleWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._workflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowId = this._workflowId;
    }
    if (this._batchSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSettings = this._batchSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountId = undefined;
      this._workflowId = undefined;
      this._batchSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountId = value.serviceAccountId;
      this._workflowId = value.workflowId;
      this._batchSettings.internalValue = value.batchSettings;
    }
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // batch_settings - computed: false, optional: true, required: false
  private _batchSettings = new ServerlessEventrouterRuleWorkflowBatchSettingsOutputReference(this, "batch_settings");
  public get batchSettings() {
    return this._batchSettings;
  }
  public putBatchSettings(value: ServerlessEventrouterRuleWorkflowBatchSettings) {
    this._batchSettings.internalValue = value;
  }
  public resetBatchSettings() {
    this._batchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSettingsInput() {
    return this._batchSettings.internalValue;
  }
}

export class ServerlessEventrouterRuleWorkflowList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterRuleWorkflow[] | cdktf.IResolvable

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
  public get(index: number): ServerlessEventrouterRuleWorkflowOutputReference {
    return new ServerlessEventrouterRuleWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessEventrouterRuleYds {
  /**
  * Stream database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#database ServerlessEventrouterRule#database}
  */
  readonly database: string;
  /**
  * Service account, which has write permission on the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#service_account_id ServerlessEventrouterRule#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Full stream name, like /ru-central1/aoegtvhtp8ob******** /cc8004q4lbo6******** /test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#stream_name ServerlessEventrouterRule#stream_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly streamName: string;
}

export function serverlessEventrouterRuleYdsToTerraform(struct?: ServerlessEventrouterRuleYds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function serverlessEventrouterRuleYdsToHclTerraform(struct?: ServerlessEventrouterRuleYds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleYdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessEventrouterRuleYds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleYds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._serviceAccountId = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._serviceAccountId = value.serviceAccountId;
      this._streamName = value.streamName;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class ServerlessEventrouterRuleYdsList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterRuleYds[] | cdktf.IResolvable

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
  public get(index: number): ServerlessEventrouterRuleYdsOutputReference {
    return new ServerlessEventrouterRuleYdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessEventrouterRuleYmq {
  /**
  * Queue ARN. Example: yrn:yc:ymq:ru-central1:aoe***:test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#queue_arn ServerlessEventrouterRule#queue_arn}
  */
  readonly queueArn: string;
  /**
  * Service account which has write access to the queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#service_account_id ServerlessEventrouterRule#service_account_id}
  */
  readonly serviceAccountId: string;
}

export function serverlessEventrouterRuleYmqToTerraform(struct?: ServerlessEventrouterRuleYmq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_arn: cdktf.stringToTerraform(struct!.queueArn),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function serverlessEventrouterRuleYmqToHclTerraform(struct?: ServerlessEventrouterRuleYmq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queue_arn: {
      value: cdktf.stringToHclTerraform(struct!.queueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerlessEventrouterRuleYmqOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessEventrouterRuleYmq | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueArn = this._queueArn;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessEventrouterRuleYmq | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queueArn = undefined;
      this._serviceAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queueArn = value.queueArn;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // queue_arn - computed: false, optional: false, required: true
  private _queueArn?: string; 
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }
  public set queueArn(value: string) {
    this._queueArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueArnInput() {
    return this._queueArn;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}

export class ServerlessEventrouterRuleYmqList extends cdktf.ComplexList {
  public internalValue? : ServerlessEventrouterRuleYmq[] | cdktf.IResolvable

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
  public get(index: number): ServerlessEventrouterRuleYmqOutputReference {
    return new ServerlessEventrouterRuleYmqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule yandex_serverless_eventrouter_rule}
*/
export class ServerlessEventrouterRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_serverless_eventrouter_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerlessEventrouterRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerlessEventrouterRule to import
  * @param importFromId The id of the existing ServerlessEventrouterRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerlessEventrouterRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_serverless_eventrouter_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/serverless_eventrouter_rule yandex_serverless_eventrouter_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessEventrouterRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ServerlessEventrouterRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_serverless_eventrouter_rule',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._busId = config.busId;
    this._description = config.description;
    this._id = config.id;
    this._jqFilter = config.jqFilter;
    this._labels = config.labels;
    this._name = config.name;
    this._container.internalValue = config.container;
    this._function.internalValue = config.function;
    this._gatewayWebsocketBroadcast.internalValue = config.gatewayWebsocketBroadcast;
    this._logging.internalValue = config.logging;
    this._timeouts.internalValue = config.timeouts;
    this._workflow.internalValue = config.workflow;
    this._yds.internalValue = config.yds;
    this._ymq.internalValue = config.ymq;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bus_id - computed: false, optional: false, required: true
  private _busId?: string; 
  public get busId() {
    return this.getStringAttribute('bus_id');
  }
  public set busId(value: string) {
    this._busId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get busIdInput() {
    return this._busId;
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
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

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
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

  // jq_filter - computed: false, optional: true, required: false
  private _jqFilter?: string; 
  public get jqFilter() {
    return this.getStringAttribute('jq_filter');
  }
  public set jqFilter(value: string) {
    this._jqFilter = value;
  }
  public resetJqFilter() {
    this._jqFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqFilterInput() {
    return this._jqFilter;
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

  // container - computed: false, optional: true, required: false
  private _container = new ServerlessEventrouterRuleContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: ServerlessEventrouterRuleContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // function - computed: false, optional: true, required: false
  private _function = new ServerlessEventrouterRuleFunctionList(this, "function", false);
  public get function() {
    return this._function;
  }
  public putFunction(value: ServerlessEventrouterRuleFunction[] | cdktf.IResolvable) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // gateway_websocket_broadcast - computed: false, optional: true, required: false
  private _gatewayWebsocketBroadcast = new ServerlessEventrouterRuleGatewayWebsocketBroadcastList(this, "gateway_websocket_broadcast", false);
  public get gatewayWebsocketBroadcast() {
    return this._gatewayWebsocketBroadcast;
  }
  public putGatewayWebsocketBroadcast(value: ServerlessEventrouterRuleGatewayWebsocketBroadcast[] | cdktf.IResolvable) {
    this._gatewayWebsocketBroadcast.internalValue = value;
  }
  public resetGatewayWebsocketBroadcast() {
    this._gatewayWebsocketBroadcast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayWebsocketBroadcastInput() {
    return this._gatewayWebsocketBroadcast.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new ServerlessEventrouterRuleLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }
  public putLogging(value: ServerlessEventrouterRuleLogging[] | cdktf.IResolvable) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerlessEventrouterRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerlessEventrouterRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new ServerlessEventrouterRuleWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: ServerlessEventrouterRuleWorkflow[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }

  // yds - computed: false, optional: true, required: false
  private _yds = new ServerlessEventrouterRuleYdsList(this, "yds", false);
  public get yds() {
    return this._yds;
  }
  public putYds(value: ServerlessEventrouterRuleYds[] | cdktf.IResolvable) {
    this._yds.internalValue = value;
  }
  public resetYds() {
    this._yds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ydsInput() {
    return this._yds.internalValue;
  }

  // ymq - computed: false, optional: true, required: false
  private _ymq = new ServerlessEventrouterRuleYmqList(this, "ymq", false);
  public get ymq() {
    return this._ymq;
  }
  public putYmq(value: ServerlessEventrouterRuleYmq[] | cdktf.IResolvable) {
    this._ymq.internalValue = value;
  }
  public resetYmq() {
    this._ymq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqInput() {
    return this._ymq.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bus_id: cdktf.stringToTerraform(this._busId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      jq_filter: cdktf.stringToTerraform(this._jqFilter),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      container: cdktf.listMapper(serverlessEventrouterRuleContainerToTerraform, true)(this._container.internalValue),
      function: cdktf.listMapper(serverlessEventrouterRuleFunctionToTerraform, true)(this._function.internalValue),
      gateway_websocket_broadcast: cdktf.listMapper(serverlessEventrouterRuleGatewayWebsocketBroadcastToTerraform, true)(this._gatewayWebsocketBroadcast.internalValue),
      logging: cdktf.listMapper(serverlessEventrouterRuleLoggingToTerraform, true)(this._logging.internalValue),
      timeouts: serverlessEventrouterRuleTimeoutsToTerraform(this._timeouts.internalValue),
      workflow: cdktf.listMapper(serverlessEventrouterRuleWorkflowToTerraform, true)(this._workflow.internalValue),
      yds: cdktf.listMapper(serverlessEventrouterRuleYdsToTerraform, true)(this._yds.internalValue),
      ymq: cdktf.listMapper(serverlessEventrouterRuleYmqToTerraform, true)(this._ymq.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bus_id: {
        value: cdktf.stringToHclTerraform(this._busId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jq_filter: {
        value: cdktf.stringToHclTerraform(this._jqFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container: {
        value: cdktf.listMapperHcl(serverlessEventrouterRuleContainerToHclTerraform, true)(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterRuleContainerList",
      },
      function: {
        value: cdktf.listMapperHcl(serverlessEventrouterRuleFunctionToHclTerraform, true)(this._function.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterRuleFunctionList",
      },
      gateway_websocket_broadcast: {
        value: cdktf.listMapperHcl(serverlessEventrouterRuleGatewayWebsocketBroadcastToHclTerraform, true)(this._gatewayWebsocketBroadcast.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterRuleGatewayWebsocketBroadcastList",
      },
      logging: {
        value: cdktf.listMapperHcl(serverlessEventrouterRuleLoggingToHclTerraform, true)(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterRuleLoggingList",
      },
      timeouts: {
        value: serverlessEventrouterRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerlessEventrouterRuleTimeouts",
      },
      workflow: {
        value: cdktf.listMapperHcl(serverlessEventrouterRuleWorkflowToHclTerraform, true)(this._workflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterRuleWorkflowList",
      },
      yds: {
        value: cdktf.listMapperHcl(serverlessEventrouterRuleYdsToHclTerraform, true)(this._yds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterRuleYdsList",
      },
      ymq: {
        value: cdktf.listMapperHcl(serverlessEventrouterRuleYmqToHclTerraform, true)(this._ymq.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerlessEventrouterRuleYmqList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
