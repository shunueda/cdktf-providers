// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSysdigSecureManagedRulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#name DataSysdigSecureManagedRuleset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#runbook DataSysdigSecureManagedRuleset#runbook}
  */
  readonly runbook?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#type DataSysdigSecureManagedRuleset#type}
  */
  readonly type?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#actions DataSysdigSecureManagedRuleset#actions}
  */
  readonly actions?: DataSysdigSecureManagedRulesetActions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#timeouts DataSysdigSecureManagedRuleset#timeouts}
  */
  readonly timeouts?: DataSysdigSecureManagedRulesetTimeouts;
}
export interface DataSysdigSecureManagedRulesetRules {
}

export function dataSysdigSecureManagedRulesetRulesToTerraform(struct?: DataSysdigSecureManagedRulesetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSysdigSecureManagedRulesetRulesToHclTerraform(struct?: DataSysdigSecureManagedRulesetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSysdigSecureManagedRulesetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSysdigSecureManagedRulesetRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSysdigSecureManagedRulesetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSysdigSecureManagedRulesetRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSysdigSecureManagedRulesetRulesOutputReference {
    return new DataSysdigSecureManagedRulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSysdigSecureManagedRulesetActionsCapture {
}

export function dataSysdigSecureManagedRulesetActionsCaptureToTerraform(struct?: DataSysdigSecureManagedRulesetActionsCapture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSysdigSecureManagedRulesetActionsCaptureToHclTerraform(struct?: DataSysdigSecureManagedRulesetActionsCapture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSysdigSecureManagedRulesetActionsCaptureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSysdigSecureManagedRulesetActionsCapture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSysdigSecureManagedRulesetActionsCapture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // seconds_after_event - computed: true, optional: false, required: false
  public get secondsAfterEvent() {
    return this.getNumberAttribute('seconds_after_event');
  }

  // seconds_before_event - computed: true, optional: false, required: false
  public get secondsBeforeEvent() {
    return this.getNumberAttribute('seconds_before_event');
  }
}

export class DataSysdigSecureManagedRulesetActionsCaptureList extends cdktf.ComplexList {
  public internalValue? : DataSysdigSecureManagedRulesetActionsCapture[] | cdktf.IResolvable

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
  public get(index: number): DataSysdigSecureManagedRulesetActionsCaptureOutputReference {
    return new DataSysdigSecureManagedRulesetActionsCaptureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSysdigSecureManagedRulesetActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#container DataSysdigSecureManagedRuleset#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#kill_process DataSysdigSecureManagedRuleset#kill_process}
  */
  readonly killProcess?: string;
  /**
  * capture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#capture DataSysdigSecureManagedRuleset#capture}
  */
  readonly capture?: DataSysdigSecureManagedRulesetActionsCapture[] | cdktf.IResolvable;
}

export function dataSysdigSecureManagedRulesetActionsToTerraform(struct?: DataSysdigSecureManagedRulesetActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    kill_process: cdktf.stringToTerraform(struct!.killProcess),
    capture: cdktf.listMapper(dataSysdigSecureManagedRulesetActionsCaptureToTerraform, true)(struct!.capture),
  }
}


export function dataSysdigSecureManagedRulesetActionsToHclTerraform(struct?: DataSysdigSecureManagedRulesetActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kill_process: {
      value: cdktf.stringToHclTerraform(struct!.killProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture: {
      value: cdktf.listMapperHcl(dataSysdigSecureManagedRulesetActionsCaptureToHclTerraform, true)(struct!.capture),
      isBlock: true,
      type: "list",
      storageClassType: "DataSysdigSecureManagedRulesetActionsCaptureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSysdigSecureManagedRulesetActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSysdigSecureManagedRulesetActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._killProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.killProcess = this._killProcess;
    }
    if (this._capture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capture = this._capture?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSysdigSecureManagedRulesetActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._killProcess = undefined;
      this._capture.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._killProcess = value.killProcess;
      this._capture.internalValue = value.capture;
    }
  }

  // container - computed: true, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // kill_process - computed: true, optional: true, required: false
  private _killProcess?: string; 
  public get killProcess() {
    return this.getStringAttribute('kill_process');
  }
  public set killProcess(value: string) {
    this._killProcess = value;
  }
  public resetKillProcess() {
    this._killProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killProcessInput() {
    return this._killProcess;
  }

  // capture - computed: false, optional: true, required: false
  private _capture = new DataSysdigSecureManagedRulesetActionsCaptureList(this, "capture", false);
  public get capture() {
    return this._capture;
  }
  public putCapture(value: DataSysdigSecureManagedRulesetActionsCapture[] | cdktf.IResolvable) {
    this._capture.internalValue = value;
  }
  public resetCapture() {
    this._capture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureInput() {
    return this._capture.internalValue;
  }
}

export class DataSysdigSecureManagedRulesetActionsList extends cdktf.ComplexList {
  public internalValue? : DataSysdigSecureManagedRulesetActions[] | cdktf.IResolvable

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
  public get(index: number): DataSysdigSecureManagedRulesetActionsOutputReference {
    return new DataSysdigSecureManagedRulesetActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSysdigSecureManagedRulesetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#read DataSysdigSecureManagedRuleset#read}
  */
  readonly read?: string;
}

export function dataSysdigSecureManagedRulesetTimeoutsToTerraform(struct?: DataSysdigSecureManagedRulesetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataSysdigSecureManagedRulesetTimeoutsToHclTerraform(struct?: DataSysdigSecureManagedRulesetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSysdigSecureManagedRulesetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSysdigSecureManagedRulesetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSysdigSecureManagedRulesetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset sysdig_secure_managed_ruleset}
*/
export class DataSysdigSecureManagedRuleset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_managed_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSysdigSecureManagedRuleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSysdigSecureManagedRuleset to import
  * @param importFromId The id of the existing DataSysdigSecureManagedRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSysdigSecureManagedRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_managed_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_managed_ruleset sysdig_secure_managed_ruleset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSysdigSecureManagedRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: DataSysdigSecureManagedRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_managed_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.3.1',
        providerVersionConstraint: '3.3.1'
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
    this._runbook = config.runbook;
    this._type = config.type;
    this._actions.internalValue = config.actions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // notification_channels - computed: true, optional: false, required: false
  public get notificationChannels() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('notification_channels')));
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataSysdigSecureManagedRulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // runbook - computed: false, optional: true, required: false
  private _runbook?: string; 
  public get runbook() {
    return this.getStringAttribute('runbook');
  }
  public set runbook(value: string) {
    this._runbook = value;
  }
  public resetRunbook() {
    this._runbook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookInput() {
    return this._runbook;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
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

  // actions - computed: false, optional: true, required: false
  private _actions = new DataSysdigSecureManagedRulesetActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataSysdigSecureManagedRulesetActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSysdigSecureManagedRulesetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSysdigSecureManagedRulesetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      runbook: cdktf.stringToTerraform(this._runbook),
      type: cdktf.stringToTerraform(this._type),
      actions: cdktf.listMapper(dataSysdigSecureManagedRulesetActionsToTerraform, true)(this._actions.internalValue),
      timeouts: dataSysdigSecureManagedRulesetTimeoutsToTerraform(this._timeouts.internalValue),
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
      runbook: {
        value: cdktf.stringToHclTerraform(this._runbook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.listMapperHcl(dataSysdigSecureManagedRulesetActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSysdigSecureManagedRulesetActionsList",
      },
      timeouts: {
        value: dataSysdigSecureManagedRulesetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSysdigSecureManagedRulesetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
