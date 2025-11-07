// https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSensuCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check#id DataSensuCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check#name DataSensuCheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check#namespace DataSensuCheck#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check#secrets DataSensuCheck#secrets}
  */
  readonly secrets?: { [key: string]: string };
  /**
  * proxy_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check#proxy_requests DataSensuCheck#proxy_requests}
  */
  readonly proxyRequests?: DataSensuCheckProxyRequests;
}
export interface DataSensuCheckCheckHook {
}

export function dataSensuCheckCheckHookToTerraform(struct?: DataSensuCheckCheckHook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSensuCheckCheckHookToHclTerraform(struct?: DataSensuCheckCheckHook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSensuCheckCheckHookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSensuCheckCheckHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSensuCheckCheckHook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hooks - computed: true, optional: false, required: false
  public get hooks() {
    return this.getStringAttribute('hooks');
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
}

export class DataSensuCheckCheckHookList extends cdktf.ComplexList {

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
  public get(index: number): DataSensuCheckCheckHookOutputReference {
    return new DataSensuCheckCheckHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSensuCheckSubdue {
}

export function dataSensuCheckSubdueToTerraform(struct?: DataSensuCheckSubdue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSensuCheckSubdueToHclTerraform(struct?: DataSensuCheckSubdue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSensuCheckSubdueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSensuCheckSubdue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSensuCheckSubdue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  public get begin() {
    return this.getStringAttribute('begin');
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }
}

export class DataSensuCheckSubdueList extends cdktf.ComplexList {

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
  public get(index: number): DataSensuCheckSubdueOutputReference {
    return new DataSensuCheckSubdueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSensuCheckProxyRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check#entity_attributes DataSensuCheck#entity_attributes}
  */
  readonly entityAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check#splay DataSensuCheck#splay}
  */
  readonly splay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check#splay_coverage DataSensuCheck#splay_coverage}
  */
  readonly splayCoverage?: number;
}

export function dataSensuCheckProxyRequestsToTerraform(struct?: DataSensuCheckProxyRequestsOutputReference | DataSensuCheckProxyRequests): any {
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


export function dataSensuCheckProxyRequestsToHclTerraform(struct?: DataSensuCheckProxyRequestsOutputReference | DataSensuCheckProxyRequests): any {
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

export class DataSensuCheckProxyRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSensuCheckProxyRequests | undefined {
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

  public set internalValue(value: DataSensuCheckProxyRequests | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check sensu_check}
*/
export class DataSensuCheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sensu_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSensuCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSensuCheck to import
  * @param importFromId The id of the existing DataSensuCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSensuCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sensu_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/data-sources/check sensu_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSensuCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataSensuCheckConfig) {
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
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._secrets = config.secrets;
    this._proxyRequests.internalValue = config.proxyRequests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // check_hook - computed: true, optional: false, required: false
  private _checkHook = new DataSensuCheckCheckHookList(this, "check_hook", false);
  public get checkHook() {
    return this._checkHook;
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // cron - computed: true, optional: false, required: false
  public get cron() {
    return this.getStringAttribute('cron');
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new cdktf.StringMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // handlers - computed: true, optional: false, required: false
  public get handlers() {
    return this.getListAttribute('handlers');
  }

  // high_flap_threshold - computed: true, optional: false, required: false
  public get highFlapThreshold() {
    return this.getNumberAttribute('high_flap_threshold');
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

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // low_flap_threshold - computed: true, optional: false, required: false
  public get lowFlapThreshold() {
    return this.getNumberAttribute('low_flap_threshold');
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

  // output_metric_format - computed: true, optional: false, required: false
  public get outputMetricFormat() {
    return this.getStringAttribute('output_metric_format');
  }

  // output_metric_handlers - computed: true, optional: false, required: false
  public get outputMetricHandlers() {
    return this.getListAttribute('output_metric_handlers');
  }

  // proxy_entity_name - computed: true, optional: false, required: false
  public get proxyEntityName() {
    return this.getStringAttribute('proxy_entity_name');
  }

  // publish - computed: true, optional: false, required: false
  public get publish() {
    return this.getBooleanAttribute('publish');
  }

  // round_robin - computed: true, optional: false, required: false
  public get roundRobin() {
    return this.getBooleanAttribute('round_robin');
  }

  // runtime_assets - computed: true, optional: false, required: false
  public get runtimeAssets() {
    return this.getListAttribute('runtime_assets');
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

  // stdin - computed: true, optional: false, required: false
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // subdue - computed: true, optional: false, required: false
  private _subdue = new DataSensuCheckSubdueList(this, "subdue", false);
  public get subdue() {
    return this._subdue;
  }

  // subscriptions - computed: true, optional: false, required: false
  public get subscriptions() {
    return this.getListAttribute('subscriptions');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // proxy_requests - computed: false, optional: true, required: false
  private _proxyRequests = new DataSensuCheckProxyRequestsOutputReference(this, "proxy_requests");
  public get proxyRequests() {
    return this._proxyRequests;
  }
  public putProxyRequests(value: DataSensuCheckProxyRequests) {
    this._proxyRequests.internalValue = value;
  }
  public resetProxyRequests() {
    this._proxyRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyRequestsInput() {
    return this._proxyRequests.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      secrets: cdktf.hashMapper(cdktf.stringToTerraform)(this._secrets),
      proxy_requests: dataSensuCheckProxyRequestsToTerraform(this._proxyRequests.internalValue),
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
      secrets: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._secrets),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      proxy_requests: {
        value: dataSensuCheckProxyRequestsToHclTerraform(this._proxyRequests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSensuCheckProxyRequestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
