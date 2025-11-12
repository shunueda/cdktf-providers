// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecureDriftPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#description SecureDriftPolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#enabled SecureDriftPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#id SecureDriftPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#name SecureDriftPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#notification_channels SecureDriftPolicy#notification_channels}
  */
  readonly notificationChannels?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#runbook SecureDriftPolicy#runbook}
  */
  readonly runbook?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#scope SecureDriftPolicy#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#severity SecureDriftPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#type SecureDriftPolicy#type}
  */
  readonly type?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#actions SecureDriftPolicy#actions}
  */
  readonly actions?: SecureDriftPolicyActions[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#rule SecureDriftPolicy#rule}
  */
  readonly rule: SecureDriftPolicyRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#timeouts SecureDriftPolicy#timeouts}
  */
  readonly timeouts?: SecureDriftPolicyTimeouts;
}
export interface SecureDriftPolicyActionsCapture {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#bucket_name SecureDriftPolicy#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#filter SecureDriftPolicy#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#folder SecureDriftPolicy#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#name SecureDriftPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#seconds_after_event SecureDriftPolicy#seconds_after_event}
  */
  readonly secondsAfterEvent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#seconds_before_event SecureDriftPolicy#seconds_before_event}
  */
  readonly secondsBeforeEvent: number;
}

export function secureDriftPolicyActionsCaptureToTerraform(struct?: SecureDriftPolicyActionsCapture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    filter: cdktf.stringToTerraform(struct!.filter),
    folder: cdktf.stringToTerraform(struct!.folder),
    name: cdktf.stringToTerraform(struct!.name),
    seconds_after_event: cdktf.numberToTerraform(struct!.secondsAfterEvent),
    seconds_before_event: cdktf.numberToTerraform(struct!.secondsBeforeEvent),
  }
}


export function secureDriftPolicyActionsCaptureToHclTerraform(struct?: SecureDriftPolicyActionsCapture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
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
    seconds_after_event: {
      value: cdktf.numberToHclTerraform(struct!.secondsAfterEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds_before_event: {
      value: cdktf.numberToHclTerraform(struct!.secondsBeforeEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureDriftPolicyActionsCaptureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureDriftPolicyActionsCapture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secondsAfterEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondsAfterEvent = this._secondsAfterEvent;
    }
    if (this._secondsBeforeEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondsBeforeEvent = this._secondsBeforeEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureDriftPolicyActionsCapture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._filter = undefined;
      this._folder = undefined;
      this._name = undefined;
      this._secondsAfterEvent = undefined;
      this._secondsBeforeEvent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._filter = value.filter;
      this._folder = value.folder;
      this._name = value.name;
      this._secondsAfterEvent = value.secondsAfterEvent;
      this._secondsBeforeEvent = value.secondsBeforeEvent;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // seconds_after_event - computed: false, optional: false, required: true
  private _secondsAfterEvent?: number; 
  public get secondsAfterEvent() {
    return this.getNumberAttribute('seconds_after_event');
  }
  public set secondsAfterEvent(value: number) {
    this._secondsAfterEvent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsAfterEventInput() {
    return this._secondsAfterEvent;
  }

  // seconds_before_event - computed: false, optional: false, required: true
  private _secondsBeforeEvent?: number; 
  public get secondsBeforeEvent() {
    return this.getNumberAttribute('seconds_before_event');
  }
  public set secondsBeforeEvent(value: number) {
    this._secondsBeforeEvent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsBeforeEventInput() {
    return this._secondsBeforeEvent;
  }
}

export class SecureDriftPolicyActionsCaptureList extends cdktf.ComplexList {
  public internalValue? : SecureDriftPolicyActionsCapture[] | cdktf.IResolvable

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
  public get(index: number): SecureDriftPolicyActionsCaptureOutputReference {
    return new SecureDriftPolicyActionsCaptureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureDriftPolicyActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#container SecureDriftPolicy#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#prevent_drift SecureDriftPolicy#prevent_drift}
  */
  readonly preventDrift?: boolean | cdktf.IResolvable;
  /**
  * capture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#capture SecureDriftPolicy#capture}
  */
  readonly capture?: SecureDriftPolicyActionsCapture[] | cdktf.IResolvable;
}

export function secureDriftPolicyActionsToTerraform(struct?: SecureDriftPolicyActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    prevent_drift: cdktf.booleanToTerraform(struct!.preventDrift),
    capture: cdktf.listMapper(secureDriftPolicyActionsCaptureToTerraform, true)(struct!.capture),
  }
}


export function secureDriftPolicyActionsToHclTerraform(struct?: SecureDriftPolicyActions | cdktf.IResolvable): any {
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
    prevent_drift: {
      value: cdktf.booleanToHclTerraform(struct!.preventDrift),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capture: {
      value: cdktf.listMapperHcl(secureDriftPolicyActionsCaptureToHclTerraform, true)(struct!.capture),
      isBlock: true,
      type: "list",
      storageClassType: "SecureDriftPolicyActionsCaptureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureDriftPolicyActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureDriftPolicyActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._preventDrift !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventDrift = this._preventDrift;
    }
    if (this._capture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capture = this._capture?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureDriftPolicyActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._preventDrift = undefined;
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
      this._preventDrift = value.preventDrift;
      this._capture.internalValue = value.capture;
    }
  }

  // container - computed: false, optional: true, required: false
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

  // prevent_drift - computed: false, optional: true, required: false
  private _preventDrift?: boolean | cdktf.IResolvable; 
  public get preventDrift() {
    return this.getBooleanAttribute('prevent_drift');
  }
  public set preventDrift(value: boolean | cdktf.IResolvable) {
    this._preventDrift = value;
  }
  public resetPreventDrift() {
    this._preventDrift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDriftInput() {
    return this._preventDrift;
  }

  // capture - computed: false, optional: true, required: false
  private _capture = new SecureDriftPolicyActionsCaptureList(this, "capture", false);
  public get capture() {
    return this._capture;
  }
  public putCapture(value: SecureDriftPolicyActionsCapture[] | cdktf.IResolvable) {
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

export class SecureDriftPolicyActionsList extends cdktf.ComplexList {
  public internalValue? : SecureDriftPolicyActions[] | cdktf.IResolvable

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
  public get(index: number): SecureDriftPolicyActionsOutputReference {
    return new SecureDriftPolicyActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureDriftPolicyRuleExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#items SecureDriftPolicy#items}
  */
  readonly items: string[];
}

export function secureDriftPolicyRuleExceptionsToTerraform(struct?: SecureDriftPolicyRuleExceptionsOutputReference | SecureDriftPolicyRuleExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function secureDriftPolicyRuleExceptionsToHclTerraform(struct?: SecureDriftPolicyRuleExceptionsOutputReference | SecureDriftPolicyRuleExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureDriftPolicyRuleExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecureDriftPolicyRuleExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureDriftPolicyRuleExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // match_items - computed: true, optional: false, required: false
  public get matchItems() {
    return this.getBooleanAttribute('match_items');
  }
}
export interface SecureDriftPolicyRuleProcessBasedExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#items SecureDriftPolicy#items}
  */
  readonly items: string[];
}

export function secureDriftPolicyRuleProcessBasedExceptionsToTerraform(struct?: SecureDriftPolicyRuleProcessBasedExceptionsOutputReference | SecureDriftPolicyRuleProcessBasedExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function secureDriftPolicyRuleProcessBasedExceptionsToHclTerraform(struct?: SecureDriftPolicyRuleProcessBasedExceptionsOutputReference | SecureDriftPolicyRuleProcessBasedExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureDriftPolicyRuleProcessBasedExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecureDriftPolicyRuleProcessBasedExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureDriftPolicyRuleProcessBasedExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // match_items - computed: true, optional: false, required: false
  public get matchItems() {
    return this.getBooleanAttribute('match_items');
  }
}
export interface SecureDriftPolicyRuleProcessBasedProhibitedBinaries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#items SecureDriftPolicy#items}
  */
  readonly items: string[];
}

export function secureDriftPolicyRuleProcessBasedProhibitedBinariesToTerraform(struct?: SecureDriftPolicyRuleProcessBasedProhibitedBinariesOutputReference | SecureDriftPolicyRuleProcessBasedProhibitedBinaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function secureDriftPolicyRuleProcessBasedProhibitedBinariesToHclTerraform(struct?: SecureDriftPolicyRuleProcessBasedProhibitedBinariesOutputReference | SecureDriftPolicyRuleProcessBasedProhibitedBinaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureDriftPolicyRuleProcessBasedProhibitedBinariesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecureDriftPolicyRuleProcessBasedProhibitedBinaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureDriftPolicyRuleProcessBasedProhibitedBinaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // match_items - computed: true, optional: false, required: false
  public get matchItems() {
    return this.getBooleanAttribute('match_items');
  }
}
export interface SecureDriftPolicyRuleProhibitedBinaries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#items SecureDriftPolicy#items}
  */
  readonly items: string[];
}

export function secureDriftPolicyRuleProhibitedBinariesToTerraform(struct?: SecureDriftPolicyRuleProhibitedBinariesOutputReference | SecureDriftPolicyRuleProhibitedBinaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function secureDriftPolicyRuleProhibitedBinariesToHclTerraform(struct?: SecureDriftPolicyRuleProhibitedBinariesOutputReference | SecureDriftPolicyRuleProhibitedBinaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureDriftPolicyRuleProhibitedBinariesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecureDriftPolicyRuleProhibitedBinaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureDriftPolicyRuleProhibitedBinaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // match_items - computed: true, optional: false, required: false
  public get matchItems() {
    return this.getBooleanAttribute('match_items');
  }
}
export interface SecureDriftPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#description SecureDriftPolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#enabled SecureDriftPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#mounted_volume_drift_enabled SecureDriftPolicy#mounted_volume_drift_enabled}
  */
  readonly mountedVolumeDriftEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#use_regex SecureDriftPolicy#use_regex}
  */
  readonly useRegex?: boolean | cdktf.IResolvable;
  /**
  * exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#exceptions SecureDriftPolicy#exceptions}
  */
  readonly exceptions?: SecureDriftPolicyRuleExceptions;
  /**
  * process_based_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#process_based_exceptions SecureDriftPolicy#process_based_exceptions}
  */
  readonly processBasedExceptions?: SecureDriftPolicyRuleProcessBasedExceptions;
  /**
  * process_based_prohibited_binaries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#process_based_prohibited_binaries SecureDriftPolicy#process_based_prohibited_binaries}
  */
  readonly processBasedProhibitedBinaries?: SecureDriftPolicyRuleProcessBasedProhibitedBinaries;
  /**
  * prohibited_binaries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#prohibited_binaries SecureDriftPolicy#prohibited_binaries}
  */
  readonly prohibitedBinaries?: SecureDriftPolicyRuleProhibitedBinaries;
}

export function secureDriftPolicyRuleToTerraform(struct?: SecureDriftPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mounted_volume_drift_enabled: cdktf.booleanToTerraform(struct!.mountedVolumeDriftEnabled),
    use_regex: cdktf.booleanToTerraform(struct!.useRegex),
    exceptions: secureDriftPolicyRuleExceptionsToTerraform(struct!.exceptions),
    process_based_exceptions: secureDriftPolicyRuleProcessBasedExceptionsToTerraform(struct!.processBasedExceptions),
    process_based_prohibited_binaries: secureDriftPolicyRuleProcessBasedProhibitedBinariesToTerraform(struct!.processBasedProhibitedBinaries),
    prohibited_binaries: secureDriftPolicyRuleProhibitedBinariesToTerraform(struct!.prohibitedBinaries),
  }
}


export function secureDriftPolicyRuleToHclTerraform(struct?: SecureDriftPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mounted_volume_drift_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mountedVolumeDriftEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_regex: {
      value: cdktf.booleanToHclTerraform(struct!.useRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceptions: {
      value: secureDriftPolicyRuleExceptionsToHclTerraform(struct!.exceptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecureDriftPolicyRuleExceptionsList",
    },
    process_based_exceptions: {
      value: secureDriftPolicyRuleProcessBasedExceptionsToHclTerraform(struct!.processBasedExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecureDriftPolicyRuleProcessBasedExceptionsList",
    },
    process_based_prohibited_binaries: {
      value: secureDriftPolicyRuleProcessBasedProhibitedBinariesToHclTerraform(struct!.processBasedProhibitedBinaries),
      isBlock: true,
      type: "list",
      storageClassType: "SecureDriftPolicyRuleProcessBasedProhibitedBinariesList",
    },
    prohibited_binaries: {
      value: secureDriftPolicyRuleProhibitedBinariesToHclTerraform(struct!.prohibitedBinaries),
      isBlock: true,
      type: "list",
      storageClassType: "SecureDriftPolicyRuleProhibitedBinariesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureDriftPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureDriftPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mountedVolumeDriftEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountedVolumeDriftEnabled = this._mountedVolumeDriftEnabled;
    }
    if (this._useRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRegex = this._useRegex;
    }
    if (this._exceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptions = this._exceptions?.internalValue;
    }
    if (this._processBasedExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processBasedExceptions = this._processBasedExceptions?.internalValue;
    }
    if (this._processBasedProhibitedBinaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processBasedProhibitedBinaries = this._processBasedProhibitedBinaries?.internalValue;
    }
    if (this._prohibitedBinaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prohibitedBinaries = this._prohibitedBinaries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureDriftPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._mountedVolumeDriftEnabled = undefined;
      this._useRegex = undefined;
      this._exceptions.internalValue = undefined;
      this._processBasedExceptions.internalValue = undefined;
      this._processBasedProhibitedBinaries.internalValue = undefined;
      this._prohibitedBinaries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabled = value.enabled;
      this._mountedVolumeDriftEnabled = value.mountedVolumeDriftEnabled;
      this._useRegex = value.useRegex;
      this._exceptions.internalValue = value.exceptions;
      this._processBasedExceptions.internalValue = value.processBasedExceptions;
      this._processBasedProhibitedBinaries.internalValue = value.processBasedProhibitedBinaries;
      this._prohibitedBinaries.internalValue = value.prohibitedBinaries;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // mounted_volume_drift_enabled - computed: false, optional: true, required: false
  private _mountedVolumeDriftEnabled?: boolean | cdktf.IResolvable; 
  public get mountedVolumeDriftEnabled() {
    return this.getBooleanAttribute('mounted_volume_drift_enabled');
  }
  public set mountedVolumeDriftEnabled(value: boolean | cdktf.IResolvable) {
    this._mountedVolumeDriftEnabled = value;
  }
  public resetMountedVolumeDriftEnabled() {
    this._mountedVolumeDriftEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountedVolumeDriftEnabledInput() {
    return this._mountedVolumeDriftEnabled;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // use_regex - computed: false, optional: true, required: false
  private _useRegex?: boolean | cdktf.IResolvable; 
  public get useRegex() {
    return this.getBooleanAttribute('use_regex');
  }
  public set useRegex(value: boolean | cdktf.IResolvable) {
    this._useRegex = value;
  }
  public resetUseRegex() {
    this._useRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRegexInput() {
    return this._useRegex;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // exceptions - computed: false, optional: true, required: false
  private _exceptions = new SecureDriftPolicyRuleExceptionsOutputReference(this, "exceptions");
  public get exceptions() {
    return this._exceptions;
  }
  public putExceptions(value: SecureDriftPolicyRuleExceptions) {
    this._exceptions.internalValue = value;
  }
  public resetExceptions() {
    this._exceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsInput() {
    return this._exceptions.internalValue;
  }

  // process_based_exceptions - computed: false, optional: true, required: false
  private _processBasedExceptions = new SecureDriftPolicyRuleProcessBasedExceptionsOutputReference(this, "process_based_exceptions");
  public get processBasedExceptions() {
    return this._processBasedExceptions;
  }
  public putProcessBasedExceptions(value: SecureDriftPolicyRuleProcessBasedExceptions) {
    this._processBasedExceptions.internalValue = value;
  }
  public resetProcessBasedExceptions() {
    this._processBasedExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processBasedExceptionsInput() {
    return this._processBasedExceptions.internalValue;
  }

  // process_based_prohibited_binaries - computed: false, optional: true, required: false
  private _processBasedProhibitedBinaries = new SecureDriftPolicyRuleProcessBasedProhibitedBinariesOutputReference(this, "process_based_prohibited_binaries");
  public get processBasedProhibitedBinaries() {
    return this._processBasedProhibitedBinaries;
  }
  public putProcessBasedProhibitedBinaries(value: SecureDriftPolicyRuleProcessBasedProhibitedBinaries) {
    this._processBasedProhibitedBinaries.internalValue = value;
  }
  public resetProcessBasedProhibitedBinaries() {
    this._processBasedProhibitedBinaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processBasedProhibitedBinariesInput() {
    return this._processBasedProhibitedBinaries.internalValue;
  }

  // prohibited_binaries - computed: false, optional: true, required: false
  private _prohibitedBinaries = new SecureDriftPolicyRuleProhibitedBinariesOutputReference(this, "prohibited_binaries");
  public get prohibitedBinaries() {
    return this._prohibitedBinaries;
  }
  public putProhibitedBinaries(value: SecureDriftPolicyRuleProhibitedBinaries) {
    this._prohibitedBinaries.internalValue = value;
  }
  public resetProhibitedBinaries() {
    this._prohibitedBinaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prohibitedBinariesInput() {
    return this._prohibitedBinaries.internalValue;
  }
}

export class SecureDriftPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : SecureDriftPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): SecureDriftPolicyRuleOutputReference {
    return new SecureDriftPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureDriftPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#create SecureDriftPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#delete SecureDriftPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#read SecureDriftPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#update SecureDriftPolicy#update}
  */
  readonly update?: string;
}

export function secureDriftPolicyTimeoutsToTerraform(struct?: SecureDriftPolicyTimeouts | cdktf.IResolvable): any {
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


export function secureDriftPolicyTimeoutsToHclTerraform(struct?: SecureDriftPolicyTimeouts | cdktf.IResolvable): any {
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

export class SecureDriftPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureDriftPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecureDriftPolicyTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy sysdig_secure_drift_policy}
*/
export class SecureDriftPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_drift_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecureDriftPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureDriftPolicy to import
  * @param importFromId The id of the existing SecureDriftPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureDriftPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_drift_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_drift_policy sysdig_secure_drift_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureDriftPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecureDriftPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_drift_policy',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._notificationChannels = config.notificationChannels;
    this._runbook = config.runbook;
    this._scope = config.scope;
    this._severity = config.severity;
    this._type = config.type;
    this._actions.internalValue = config.actions;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // notification_channels - computed: false, optional: true, required: false
  private _notificationChannels?: number[]; 
  public get notificationChannels() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('notification_channels')));
  }
  public set notificationChannels(value: number[]) {
    this._notificationChannels = value;
  }
  public resetNotificationChannels() {
    this._notificationChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelsInput() {
    return this._notificationChannels;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new SecureDriftPolicyActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: SecureDriftPolicyActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new SecureDriftPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecureDriftPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureDriftPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureDriftPolicyTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_channels: cdktf.listMapper(cdktf.numberToTerraform, false)(this._notificationChannels),
      runbook: cdktf.stringToTerraform(this._runbook),
      scope: cdktf.stringToTerraform(this._scope),
      severity: cdktf.numberToTerraform(this._severity),
      type: cdktf.stringToTerraform(this._type),
      actions: cdktf.listMapper(secureDriftPolicyActionsToTerraform, true)(this._actions.internalValue),
      rule: cdktf.listMapper(secureDriftPolicyRuleToTerraform, true)(this._rule.internalValue),
      timeouts: secureDriftPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_channels: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._notificationChannels),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      runbook: {
        value: cdktf.stringToHclTerraform(this._runbook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.numberToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.listMapperHcl(secureDriftPolicyActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecureDriftPolicyActionsList",
      },
      rule: {
        value: cdktf.listMapperHcl(secureDriftPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecureDriftPolicyRuleList",
      },
      timeouts: {
        value: secureDriftPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureDriftPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
