// https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubearmorSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#id KubearmorSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#last_updated KubearmorSecurityPolicy#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#name KubearmorSecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#namespace KubearmorSecurityPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#policy KubearmorSecurityPolicy#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#capabilities KubearmorSecurityPolicy#capabilities}
  */
  readonly capabilities?: KubearmorSecurityPolicyCapabilities[] | cdktf.IResolvable;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#file KubearmorSecurityPolicy#file}
  */
  readonly file?: KubearmorSecurityPolicyFile;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#network KubearmorSecurityPolicy#network}
  */
  readonly network?: KubearmorSecurityPolicyNetwork[] | cdktf.IResolvable;
  /**
  * process block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#process KubearmorSecurityPolicy#process}
  */
  readonly process?: KubearmorSecurityPolicyProcess[] | cdktf.IResolvable;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#selector KubearmorSecurityPolicy#selector}
  */
  readonly selector?: KubearmorSecurityPolicySelector;
  /**
  * syscalls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#syscalls KubearmorSecurityPolicy#syscalls}
  */
  readonly syscalls?: KubearmorSecurityPolicySyscalls[] | cdktf.IResolvable;
}
export interface KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceToTerraform(struct?: KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceToHclTerraform(struct?: KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSource | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}

export class KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference {
    return new KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyCapabilitiesMatchCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#capabilities KubearmorSecurityPolicy#capabilities}
  */
  readonly capabilities: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#from_source KubearmorSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSource[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyCapabilitiesMatchCapabilitiesToTerraform(struct?: KubearmorSecurityPolicyCapabilitiesMatchCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    capabilities: cdktf.stringToTerraform(struct!.capabilities),
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    from_source: cdktf.listMapper(kubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorSecurityPolicyCapabilitiesMatchCapabilitiesToHclTerraform(struct?: KubearmorSecurityPolicyCapabilitiesMatchCapabilities | cdktf.IResolvable): any {
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
    capabilities: {
      value: cdktf.stringToHclTerraform(struct!.capabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_source: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyCapabilitiesMatchCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fromSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSource = this._fromSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyCapabilitiesMatchCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._capabilities = undefined;
      this._message = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._fromSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._capabilities = value.capabilities;
      this._message = value.message;
      this._severity = value.severity;
      this._tags = value.tags;
      this._fromSource.internalValue = value.fromSource;
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

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string; 
  public get capabilities() {
    return this.getStringAttribute('capabilities');
  }
  public set capabilities(value: string) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // from_source - computed: false, optional: true, required: false
  private _fromSource = new KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesFromSource[] | cdktf.IResolvable) {
    this._fromSource.internalValue = value;
  }
  public resetFromSource() {
    this._fromSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSourceInput() {
    return this._fromSource.internalValue;
  }
}

export class KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyCapabilitiesMatchCapabilities[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesOutputReference {
    return new KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_capabilities KubearmorSecurityPolicy#match_capabilities}
  */
  readonly matchCapabilities?: KubearmorSecurityPolicyCapabilitiesMatchCapabilities[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyCapabilitiesToTerraform(struct?: KubearmorSecurityPolicyCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_capabilities: cdktf.listMapper(kubearmorSecurityPolicyCapabilitiesMatchCapabilitiesToTerraform, true)(struct!.matchCapabilities),
  }
}


export function kubearmorSecurityPolicyCapabilitiesToHclTerraform(struct?: KubearmorSecurityPolicyCapabilities | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_capabilities: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyCapabilitiesMatchCapabilitiesToHclTerraform, true)(struct!.matchCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._matchCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCapabilities = this._matchCapabilities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._message = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._matchCapabilities.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._message = value.message;
      this._severity = value.severity;
      this._tags = value.tags;
      this._matchCapabilities.internalValue = value.matchCapabilities;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // match_capabilities - computed: false, optional: true, required: false
  private _matchCapabilities = new KubearmorSecurityPolicyCapabilitiesMatchCapabilitiesList(this, "match_capabilities", false);
  public get matchCapabilities() {
    return this._matchCapabilities;
  }
  public putMatchCapabilities(value: KubearmorSecurityPolicyCapabilitiesMatchCapabilities[] | cdktf.IResolvable) {
    this._matchCapabilities.internalValue = value;
  }
  public resetMatchCapabilities() {
    this._matchCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCapabilitiesInput() {
    return this._matchCapabilities.internalValue;
  }
}

export class KubearmorSecurityPolicyCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyCapabilities[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyCapabilitiesOutputReference {
    return new KubearmorSecurityPolicyCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyFileMatchDirectoriesFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorSecurityPolicyFileMatchDirectoriesFromSourceToTerraform(struct?: KubearmorSecurityPolicyFileMatchDirectoriesFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorSecurityPolicyFileMatchDirectoriesFromSourceToHclTerraform(struct?: KubearmorSecurityPolicyFileMatchDirectoriesFromSource | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyFileMatchDirectoriesFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyFileMatchDirectoriesFromSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyFileMatchDirectoriesFromSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}

export class KubearmorSecurityPolicyFileMatchDirectoriesFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyFileMatchDirectoriesFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyFileMatchDirectoriesFromSourceOutputReference {
    return new KubearmorSecurityPolicyFileMatchDirectoriesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyFileMatchDirectories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#dir KubearmorSecurityPolicy#dir}
  */
  readonly dir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#owner_only KubearmorSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#read_only KubearmorSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#recursive KubearmorSecurityPolicy#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#from_source KubearmorSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorSecurityPolicyFileMatchDirectoriesFromSource[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyFileMatchDirectoriesToTerraform(struct?: KubearmorSecurityPolicyFileMatchDirectories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dir: cdktf.stringToTerraform(struct!.dir),
    message: cdktf.stringToTerraform(struct!.message),
    owner_only: cdktf.booleanToTerraform(struct!.ownerOnly),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive: cdktf.booleanToTerraform(struct!.recursive),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    from_source: cdktf.listMapper(kubearmorSecurityPolicyFileMatchDirectoriesFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorSecurityPolicyFileMatchDirectoriesToHclTerraform(struct?: KubearmorSecurityPolicyFileMatchDirectories | cdktf.IResolvable): any {
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
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_only: {
      value: cdktf.booleanToHclTerraform(struct!.ownerOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive: {
      value: cdktf.booleanToHclTerraform(struct!.recursive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_source: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyFileMatchDirectoriesFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyFileMatchDirectoriesFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyFileMatchDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyFileMatchDirectories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._ownerOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerOnly = this._ownerOnly;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursive = this._recursive;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fromSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSource = this._fromSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyFileMatchDirectories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dir = undefined;
      this._message = undefined;
      this._ownerOnly = undefined;
      this._readOnly = undefined;
      this._recursive = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._fromSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dir = value.dir;
      this._message = value.message;
      this._ownerOnly = value.ownerOnly;
      this._readOnly = value.readOnly;
      this._recursive = value.recursive;
      this._severity = value.severity;
      this._tags = value.tags;
      this._fromSource.internalValue = value.fromSource;
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

  // dir - computed: false, optional: false, required: true
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // owner_only - computed: false, optional: true, required: false
  private _ownerOnly?: boolean | cdktf.IResolvable; 
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }
  public set ownerOnly(value: boolean | cdktf.IResolvable) {
    this._ownerOnly = value;
  }
  public resetOwnerOnly() {
    this._ownerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerOnlyInput() {
    return this._ownerOnly;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // recursive - computed: false, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // from_source - computed: false, optional: true, required: false
  private _fromSource = new KubearmorSecurityPolicyFileMatchDirectoriesFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorSecurityPolicyFileMatchDirectoriesFromSource[] | cdktf.IResolvable) {
    this._fromSource.internalValue = value;
  }
  public resetFromSource() {
    this._fromSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSourceInput() {
    return this._fromSource.internalValue;
  }
}

export class KubearmorSecurityPolicyFileMatchDirectoriesList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyFileMatchDirectories[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyFileMatchDirectoriesOutputReference {
    return new KubearmorSecurityPolicyFileMatchDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyFileMatchPathsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorSecurityPolicyFileMatchPathsFromSourceToTerraform(struct?: KubearmorSecurityPolicyFileMatchPathsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorSecurityPolicyFileMatchPathsFromSourceToHclTerraform(struct?: KubearmorSecurityPolicyFileMatchPathsFromSource | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyFileMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyFileMatchPathsFromSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyFileMatchPathsFromSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}

export class KubearmorSecurityPolicyFileMatchPathsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyFileMatchPathsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyFileMatchPathsFromSourceOutputReference {
    return new KubearmorSecurityPolicyFileMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyFileMatchPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#owner_only KubearmorSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#read_only KubearmorSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#from_source KubearmorSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorSecurityPolicyFileMatchPathsFromSource[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyFileMatchPathsToTerraform(struct?: KubearmorSecurityPolicyFileMatchPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    owner_only: cdktf.booleanToTerraform(struct!.ownerOnly),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    from_source: cdktf.listMapper(kubearmorSecurityPolicyFileMatchPathsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorSecurityPolicyFileMatchPathsToHclTerraform(struct?: KubearmorSecurityPolicyFileMatchPaths | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_only: {
      value: cdktf.booleanToHclTerraform(struct!.ownerOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_source: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyFileMatchPathsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyFileMatchPathsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyFileMatchPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyFileMatchPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._ownerOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerOnly = this._ownerOnly;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fromSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSource = this._fromSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyFileMatchPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._message = undefined;
      this._ownerOnly = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._fromSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._message = value.message;
      this._ownerOnly = value.ownerOnly;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._severity = value.severity;
      this._tags = value.tags;
      this._fromSource.internalValue = value.fromSource;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // owner_only - computed: false, optional: true, required: false
  private _ownerOnly?: boolean | cdktf.IResolvable; 
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }
  public set ownerOnly(value: boolean | cdktf.IResolvable) {
    this._ownerOnly = value;
  }
  public resetOwnerOnly() {
    this._ownerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerOnlyInput() {
    return this._ownerOnly;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // from_source - computed: false, optional: true, required: false
  private _fromSource = new KubearmorSecurityPolicyFileMatchPathsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorSecurityPolicyFileMatchPathsFromSource[] | cdktf.IResolvable) {
    this._fromSource.internalValue = value;
  }
  public resetFromSource() {
    this._fromSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSourceInput() {
    return this._fromSource.internalValue;
  }
}

export class KubearmorSecurityPolicyFileMatchPathsList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyFileMatchPaths[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyFileMatchPathsOutputReference {
    return new KubearmorSecurityPolicyFileMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyFileMatchPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#owner_only KubearmorSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#pattern KubearmorSecurityPolicy#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#read_only KubearmorSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
}

export function kubearmorSecurityPolicyFileMatchPatternsToTerraform(struct?: KubearmorSecurityPolicyFileMatchPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    owner_only: cdktf.booleanToTerraform(struct!.ownerOnly),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function kubearmorSecurityPolicyFileMatchPatternsToHclTerraform(struct?: KubearmorSecurityPolicyFileMatchPatterns | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_only: {
      value: cdktf.booleanToHclTerraform(struct!.ownerOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyFileMatchPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyFileMatchPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._ownerOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerOnly = this._ownerOnly;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyFileMatchPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._message = undefined;
      this._ownerOnly = undefined;
      this._pattern = undefined;
      this._readOnly = undefined;
      this._severity = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._message = value.message;
      this._ownerOnly = value.ownerOnly;
      this._pattern = value.pattern;
      this._readOnly = value.readOnly;
      this._severity = value.severity;
      this._tags = value.tags;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // owner_only - computed: false, optional: true, required: false
  private _ownerOnly?: boolean | cdktf.IResolvable; 
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }
  public set ownerOnly(value: boolean | cdktf.IResolvable) {
    this._ownerOnly = value;
  }
  public resetOwnerOnly() {
    this._ownerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerOnlyInput() {
    return this._ownerOnly;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class KubearmorSecurityPolicyFileMatchPatternsList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyFileMatchPatterns[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyFileMatchPatternsOutputReference {
    return new KubearmorSecurityPolicyFileMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_directories KubearmorSecurityPolicy#match_directories}
  */
  readonly matchDirectories?: KubearmorSecurityPolicyFileMatchDirectories[] | cdktf.IResolvable;
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_paths KubearmorSecurityPolicy#match_paths}
  */
  readonly matchPaths?: KubearmorSecurityPolicyFileMatchPaths[] | cdktf.IResolvable;
  /**
  * match_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_patterns KubearmorSecurityPolicy#match_patterns}
  */
  readonly matchPatterns?: KubearmorSecurityPolicyFileMatchPatterns[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyFileToTerraform(struct?: KubearmorSecurityPolicyFileOutputReference | KubearmorSecurityPolicyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_directories: cdktf.listMapper(kubearmorSecurityPolicyFileMatchDirectoriesToTerraform, true)(struct!.matchDirectories),
    match_paths: cdktf.listMapper(kubearmorSecurityPolicyFileMatchPathsToTerraform, true)(struct!.matchPaths),
    match_patterns: cdktf.listMapper(kubearmorSecurityPolicyFileMatchPatternsToTerraform, true)(struct!.matchPatterns),
  }
}


export function kubearmorSecurityPolicyFileToHclTerraform(struct?: KubearmorSecurityPolicyFileOutputReference | KubearmorSecurityPolicyFile): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_directories: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyFileMatchDirectoriesToHclTerraform, true)(struct!.matchDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyFileMatchDirectoriesList",
    },
    match_paths: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyFileMatchPathsToHclTerraform, true)(struct!.matchPaths),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyFileMatchPathsList",
    },
    match_patterns: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyFileMatchPatternsToHclTerraform, true)(struct!.matchPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyFileMatchPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubearmorSecurityPolicyFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._matchDirectories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDirectories = this._matchDirectories?.internalValue;
    }
    if (this._matchPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPaths = this._matchPaths?.internalValue;
    }
    if (this._matchPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPatterns = this._matchPatterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._message = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._matchDirectories.internalValue = undefined;
      this._matchPaths.internalValue = undefined;
      this._matchPatterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._message = value.message;
      this._severity = value.severity;
      this._tags = value.tags;
      this._matchDirectories.internalValue = value.matchDirectories;
      this._matchPaths.internalValue = value.matchPaths;
      this._matchPatterns.internalValue = value.matchPatterns;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // match_directories - computed: false, optional: true, required: false
  private _matchDirectories = new KubearmorSecurityPolicyFileMatchDirectoriesList(this, "match_directories", false);
  public get matchDirectories() {
    return this._matchDirectories;
  }
  public putMatchDirectories(value: KubearmorSecurityPolicyFileMatchDirectories[] | cdktf.IResolvable) {
    this._matchDirectories.internalValue = value;
  }
  public resetMatchDirectories() {
    this._matchDirectories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDirectoriesInput() {
    return this._matchDirectories.internalValue;
  }

  // match_paths - computed: false, optional: true, required: false
  private _matchPaths = new KubearmorSecurityPolicyFileMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: KubearmorSecurityPolicyFileMatchPaths[] | cdktf.IResolvable) {
    this._matchPaths.internalValue = value;
  }
  public resetMatchPaths() {
    this._matchPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPathsInput() {
    return this._matchPaths.internalValue;
  }

  // match_patterns - computed: false, optional: true, required: false
  private _matchPatterns = new KubearmorSecurityPolicyFileMatchPatternsList(this, "match_patterns", false);
  public get matchPatterns() {
    return this._matchPatterns;
  }
  public putMatchPatterns(value: KubearmorSecurityPolicyFileMatchPatterns[] | cdktf.IResolvable) {
    this._matchPatterns.internalValue = value;
  }
  public resetMatchPatterns() {
    this._matchPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternsInput() {
    return this._matchPatterns.internalValue;
  }
}
export interface KubearmorSecurityPolicyNetworkMatchProtocolsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorSecurityPolicyNetworkMatchProtocolsFromSourceToTerraform(struct?: KubearmorSecurityPolicyNetworkMatchProtocolsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorSecurityPolicyNetworkMatchProtocolsFromSourceToHclTerraform(struct?: KubearmorSecurityPolicyNetworkMatchProtocolsFromSource | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyNetworkMatchProtocolsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyNetworkMatchProtocolsFromSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyNetworkMatchProtocolsFromSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}

export class KubearmorSecurityPolicyNetworkMatchProtocolsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyNetworkMatchProtocolsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyNetworkMatchProtocolsFromSourceOutputReference {
    return new KubearmorSecurityPolicyNetworkMatchProtocolsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyNetworkMatchProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#protocol KubearmorSecurityPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#from_source KubearmorSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorSecurityPolicyNetworkMatchProtocolsFromSource[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyNetworkMatchProtocolsToTerraform(struct?: KubearmorSecurityPolicyNetworkMatchProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    from_source: cdktf.listMapper(kubearmorSecurityPolicyNetworkMatchProtocolsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorSecurityPolicyNetworkMatchProtocolsToHclTerraform(struct?: KubearmorSecurityPolicyNetworkMatchProtocols | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_source: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyNetworkMatchProtocolsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyNetworkMatchProtocolsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyNetworkMatchProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyNetworkMatchProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fromSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSource = this._fromSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyNetworkMatchProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._message = undefined;
      this._protocol = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._fromSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._message = value.message;
      this._protocol = value.protocol;
      this._severity = value.severity;
      this._tags = value.tags;
      this._fromSource.internalValue = value.fromSource;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // from_source - computed: false, optional: true, required: false
  private _fromSource = new KubearmorSecurityPolicyNetworkMatchProtocolsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorSecurityPolicyNetworkMatchProtocolsFromSource[] | cdktf.IResolvable) {
    this._fromSource.internalValue = value;
  }
  public resetFromSource() {
    this._fromSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSourceInput() {
    return this._fromSource.internalValue;
  }
}

export class KubearmorSecurityPolicyNetworkMatchProtocolsList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyNetworkMatchProtocols[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyNetworkMatchProtocolsOutputReference {
    return new KubearmorSecurityPolicyNetworkMatchProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_protocols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_protocols KubearmorSecurityPolicy#match_protocols}
  */
  readonly matchProtocols?: KubearmorSecurityPolicyNetworkMatchProtocols[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyNetworkToTerraform(struct?: KubearmorSecurityPolicyNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_protocols: cdktf.listMapper(kubearmorSecurityPolicyNetworkMatchProtocolsToTerraform, true)(struct!.matchProtocols),
  }
}


export function kubearmorSecurityPolicyNetworkToHclTerraform(struct?: KubearmorSecurityPolicyNetwork | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_protocols: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyNetworkMatchProtocolsToHclTerraform, true)(struct!.matchProtocols),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyNetworkMatchProtocolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._matchProtocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchProtocols = this._matchProtocols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._message = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._matchProtocols.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._message = value.message;
      this._severity = value.severity;
      this._tags = value.tags;
      this._matchProtocols.internalValue = value.matchProtocols;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // match_protocols - computed: false, optional: true, required: false
  private _matchProtocols = new KubearmorSecurityPolicyNetworkMatchProtocolsList(this, "match_protocols", false);
  public get matchProtocols() {
    return this._matchProtocols;
  }
  public putMatchProtocols(value: KubearmorSecurityPolicyNetworkMatchProtocols[] | cdktf.IResolvable) {
    this._matchProtocols.internalValue = value;
  }
  public resetMatchProtocols() {
    this._matchProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchProtocolsInput() {
    return this._matchProtocols.internalValue;
  }
}

export class KubearmorSecurityPolicyNetworkList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyNetwork[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyNetworkOutputReference {
    return new KubearmorSecurityPolicyNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyProcessMatchDirectoriesFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorSecurityPolicyProcessMatchDirectoriesFromSourceToTerraform(struct?: KubearmorSecurityPolicyProcessMatchDirectoriesFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorSecurityPolicyProcessMatchDirectoriesFromSourceToHclTerraform(struct?: KubearmorSecurityPolicyProcessMatchDirectoriesFromSource | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyProcessMatchDirectoriesFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyProcessMatchDirectoriesFromSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyProcessMatchDirectoriesFromSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}

export class KubearmorSecurityPolicyProcessMatchDirectoriesFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyProcessMatchDirectoriesFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyProcessMatchDirectoriesFromSourceOutputReference {
    return new KubearmorSecurityPolicyProcessMatchDirectoriesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyProcessMatchDirectories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#dir KubearmorSecurityPolicy#dir}
  */
  readonly dir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#owner_only KubearmorSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#recursive KubearmorSecurityPolicy#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#from_source KubearmorSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorSecurityPolicyProcessMatchDirectoriesFromSource[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyProcessMatchDirectoriesToTerraform(struct?: KubearmorSecurityPolicyProcessMatchDirectories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dir: cdktf.stringToTerraform(struct!.dir),
    message: cdktf.stringToTerraform(struct!.message),
    owner_only: cdktf.booleanToTerraform(struct!.ownerOnly),
    recursive: cdktf.booleanToTerraform(struct!.recursive),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    from_source: cdktf.listMapper(kubearmorSecurityPolicyProcessMatchDirectoriesFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorSecurityPolicyProcessMatchDirectoriesToHclTerraform(struct?: KubearmorSecurityPolicyProcessMatchDirectories | cdktf.IResolvable): any {
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
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_only: {
      value: cdktf.booleanToHclTerraform(struct!.ownerOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive: {
      value: cdktf.booleanToHclTerraform(struct!.recursive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_source: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyProcessMatchDirectoriesFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyProcessMatchDirectoriesFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyProcessMatchDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyProcessMatchDirectories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._ownerOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerOnly = this._ownerOnly;
    }
    if (this._recursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursive = this._recursive;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fromSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSource = this._fromSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyProcessMatchDirectories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dir = undefined;
      this._message = undefined;
      this._ownerOnly = undefined;
      this._recursive = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._fromSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dir = value.dir;
      this._message = value.message;
      this._ownerOnly = value.ownerOnly;
      this._recursive = value.recursive;
      this._severity = value.severity;
      this._tags = value.tags;
      this._fromSource.internalValue = value.fromSource;
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

  // dir - computed: false, optional: false, required: true
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // owner_only - computed: false, optional: true, required: false
  private _ownerOnly?: boolean | cdktf.IResolvable; 
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }
  public set ownerOnly(value: boolean | cdktf.IResolvable) {
    this._ownerOnly = value;
  }
  public resetOwnerOnly() {
    this._ownerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerOnlyInput() {
    return this._ownerOnly;
  }

  // recursive - computed: false, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // from_source - computed: false, optional: true, required: false
  private _fromSource = new KubearmorSecurityPolicyProcessMatchDirectoriesFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorSecurityPolicyProcessMatchDirectoriesFromSource[] | cdktf.IResolvable) {
    this._fromSource.internalValue = value;
  }
  public resetFromSource() {
    this._fromSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSourceInput() {
    return this._fromSource.internalValue;
  }
}

export class KubearmorSecurityPolicyProcessMatchDirectoriesList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyProcessMatchDirectories[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyProcessMatchDirectoriesOutputReference {
    return new KubearmorSecurityPolicyProcessMatchDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyProcessMatchPathsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorSecurityPolicyProcessMatchPathsFromSourceToTerraform(struct?: KubearmorSecurityPolicyProcessMatchPathsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorSecurityPolicyProcessMatchPathsFromSourceToHclTerraform(struct?: KubearmorSecurityPolicyProcessMatchPathsFromSource | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyProcessMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyProcessMatchPathsFromSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyProcessMatchPathsFromSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}

export class KubearmorSecurityPolicyProcessMatchPathsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyProcessMatchPathsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyProcessMatchPathsFromSourceOutputReference {
    return new KubearmorSecurityPolicyProcessMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyProcessMatchPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#owner_only KubearmorSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#from_source KubearmorSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorSecurityPolicyProcessMatchPathsFromSource[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyProcessMatchPathsToTerraform(struct?: KubearmorSecurityPolicyProcessMatchPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    owner_only: cdktf.booleanToTerraform(struct!.ownerOnly),
    path: cdktf.stringToTerraform(struct!.path),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    from_source: cdktf.listMapper(kubearmorSecurityPolicyProcessMatchPathsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorSecurityPolicyProcessMatchPathsToHclTerraform(struct?: KubearmorSecurityPolicyProcessMatchPaths | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_only: {
      value: cdktf.booleanToHclTerraform(struct!.ownerOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_source: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyProcessMatchPathsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyProcessMatchPathsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyProcessMatchPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyProcessMatchPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._ownerOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerOnly = this._ownerOnly;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fromSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSource = this._fromSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyProcessMatchPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._message = undefined;
      this._ownerOnly = undefined;
      this._path = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._fromSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._message = value.message;
      this._ownerOnly = value.ownerOnly;
      this._path = value.path;
      this._severity = value.severity;
      this._tags = value.tags;
      this._fromSource.internalValue = value.fromSource;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // owner_only - computed: false, optional: true, required: false
  private _ownerOnly?: boolean | cdktf.IResolvable; 
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }
  public set ownerOnly(value: boolean | cdktf.IResolvable) {
    this._ownerOnly = value;
  }
  public resetOwnerOnly() {
    this._ownerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerOnlyInput() {
    return this._ownerOnly;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // from_source - computed: false, optional: true, required: false
  private _fromSource = new KubearmorSecurityPolicyProcessMatchPathsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorSecurityPolicyProcessMatchPathsFromSource[] | cdktf.IResolvable) {
    this._fromSource.internalValue = value;
  }
  public resetFromSource() {
    this._fromSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSourceInput() {
    return this._fromSource.internalValue;
  }
}

export class KubearmorSecurityPolicyProcessMatchPathsList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyProcessMatchPaths[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyProcessMatchPathsOutputReference {
    return new KubearmorSecurityPolicyProcessMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyProcessMatchPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#owner_only KubearmorSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#pattern KubearmorSecurityPolicy#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
}

export function kubearmorSecurityPolicyProcessMatchPatternsToTerraform(struct?: KubearmorSecurityPolicyProcessMatchPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    owner_only: cdktf.booleanToTerraform(struct!.ownerOnly),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function kubearmorSecurityPolicyProcessMatchPatternsToHclTerraform(struct?: KubearmorSecurityPolicyProcessMatchPatterns | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_only: {
      value: cdktf.booleanToHclTerraform(struct!.ownerOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyProcessMatchPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyProcessMatchPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._ownerOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerOnly = this._ownerOnly;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyProcessMatchPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._message = undefined;
      this._ownerOnly = undefined;
      this._pattern = undefined;
      this._severity = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._message = value.message;
      this._ownerOnly = value.ownerOnly;
      this._pattern = value.pattern;
      this._severity = value.severity;
      this._tags = value.tags;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // owner_only - computed: false, optional: true, required: false
  private _ownerOnly?: boolean | cdktf.IResolvable; 
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }
  public set ownerOnly(value: boolean | cdktf.IResolvable) {
    this._ownerOnly = value;
  }
  public resetOwnerOnly() {
    this._ownerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerOnlyInput() {
    return this._ownerOnly;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class KubearmorSecurityPolicyProcessMatchPatternsList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyProcessMatchPatterns[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyProcessMatchPatternsOutputReference {
    return new KubearmorSecurityPolicyProcessMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicyProcess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#action KubearmorSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_directories KubearmorSecurityPolicy#match_directories}
  */
  readonly matchDirectories?: KubearmorSecurityPolicyProcessMatchDirectories[] | cdktf.IResolvable;
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_paths KubearmorSecurityPolicy#match_paths}
  */
  readonly matchPaths?: KubearmorSecurityPolicyProcessMatchPaths[] | cdktf.IResolvable;
  /**
  * match_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_patterns KubearmorSecurityPolicy#match_patterns}
  */
  readonly matchPatterns?: KubearmorSecurityPolicyProcessMatchPatterns[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicyProcessToTerraform(struct?: KubearmorSecurityPolicyProcess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_directories: cdktf.listMapper(kubearmorSecurityPolicyProcessMatchDirectoriesToTerraform, true)(struct!.matchDirectories),
    match_paths: cdktf.listMapper(kubearmorSecurityPolicyProcessMatchPathsToTerraform, true)(struct!.matchPaths),
    match_patterns: cdktf.listMapper(kubearmorSecurityPolicyProcessMatchPatternsToTerraform, true)(struct!.matchPatterns),
  }
}


export function kubearmorSecurityPolicyProcessToHclTerraform(struct?: KubearmorSecurityPolicyProcess | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_directories: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyProcessMatchDirectoriesToHclTerraform, true)(struct!.matchDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyProcessMatchDirectoriesList",
    },
    match_paths: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyProcessMatchPathsToHclTerraform, true)(struct!.matchPaths),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyProcessMatchPathsList",
    },
    match_patterns: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicyProcessMatchPatternsToHclTerraform, true)(struct!.matchPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicyProcessMatchPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicyProcessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicyProcess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._matchDirectories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDirectories = this._matchDirectories?.internalValue;
    }
    if (this._matchPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPaths = this._matchPaths?.internalValue;
    }
    if (this._matchPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPatterns = this._matchPatterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicyProcess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._message = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._matchDirectories.internalValue = undefined;
      this._matchPaths.internalValue = undefined;
      this._matchPatterns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._message = value.message;
      this._severity = value.severity;
      this._tags = value.tags;
      this._matchDirectories.internalValue = value.matchDirectories;
      this._matchPaths.internalValue = value.matchPaths;
      this._matchPatterns.internalValue = value.matchPatterns;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // match_directories - computed: false, optional: true, required: false
  private _matchDirectories = new KubearmorSecurityPolicyProcessMatchDirectoriesList(this, "match_directories", false);
  public get matchDirectories() {
    return this._matchDirectories;
  }
  public putMatchDirectories(value: KubearmorSecurityPolicyProcessMatchDirectories[] | cdktf.IResolvable) {
    this._matchDirectories.internalValue = value;
  }
  public resetMatchDirectories() {
    this._matchDirectories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDirectoriesInput() {
    return this._matchDirectories.internalValue;
  }

  // match_paths - computed: false, optional: true, required: false
  private _matchPaths = new KubearmorSecurityPolicyProcessMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: KubearmorSecurityPolicyProcessMatchPaths[] | cdktf.IResolvable) {
    this._matchPaths.internalValue = value;
  }
  public resetMatchPaths() {
    this._matchPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPathsInput() {
    return this._matchPaths.internalValue;
  }

  // match_patterns - computed: false, optional: true, required: false
  private _matchPatterns = new KubearmorSecurityPolicyProcessMatchPatternsList(this, "match_patterns", false);
  public get matchPatterns() {
    return this._matchPatterns;
  }
  public putMatchPatterns(value: KubearmorSecurityPolicyProcessMatchPatterns[] | cdktf.IResolvable) {
    this._matchPatterns.internalValue = value;
  }
  public resetMatchPatterns() {
    this._matchPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternsInput() {
    return this._matchPatterns.internalValue;
  }
}

export class KubearmorSecurityPolicyProcessList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicyProcess[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicyProcessOutputReference {
    return new KubearmorSecurityPolicyProcessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicySelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_labels KubearmorSecurityPolicy#match_labels}
  */
  readonly matchLabels: { [key: string]: string };
}

export function kubearmorSecurityPolicySelectorToTerraform(struct?: KubearmorSecurityPolicySelectorOutputReference | KubearmorSecurityPolicySelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function kubearmorSecurityPolicySelectorToHclTerraform(struct?: KubearmorSecurityPolicySelectorOutputReference | KubearmorSecurityPolicySelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicySelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubearmorSecurityPolicySelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicySelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_labels - computed: false, optional: false, required: true
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface KubearmorSecurityPolicySyscallsMatchPathsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#dir KubearmorSecurityPolicy#dir}
  */
  readonly dir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#recursive KubearmorSecurityPolicy#recursive}
  */
  readonly recursive?: string;
}

export function kubearmorSecurityPolicySyscallsMatchPathsFromSourceToTerraform(struct?: KubearmorSecurityPolicySyscallsMatchPathsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    path: cdktf.stringToTerraform(struct!.path),
    recursive: cdktf.stringToTerraform(struct!.recursive),
  }
}


export function kubearmorSecurityPolicySyscallsMatchPathsFromSourceToHclTerraform(struct?: KubearmorSecurityPolicySyscallsMatchPathsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
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
    recursive: {
      value: cdktf.stringToHclTerraform(struct!.recursive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicySyscallsMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicySyscallsMatchPathsFromSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._recursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursive = this._recursive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicySyscallsMatchPathsFromSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dir = undefined;
      this._path = undefined;
      this._recursive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dir = value.dir;
      this._path = value.path;
      this._recursive = value.recursive;
    }
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
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

  // recursive - computed: false, optional: true, required: false
  private _recursive?: string; 
  public get recursive() {
    return this.getStringAttribute('recursive');
  }
  public set recursive(value: string) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }
}

export class KubearmorSecurityPolicySyscallsMatchPathsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicySyscallsMatchPathsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicySyscallsMatchPathsFromSourceOutputReference {
    return new KubearmorSecurityPolicySyscallsMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicySyscallsMatchPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#recursive KubearmorSecurityPolicy#recursive}
  */
  readonly recursive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#syscall KubearmorSecurityPolicy#syscall}
  */
  readonly syscall?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#from_source KubearmorSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorSecurityPolicySyscallsMatchPathsFromSource[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicySyscallsMatchPathsToTerraform(struct?: KubearmorSecurityPolicySyscallsMatchPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    recursive: cdktf.stringToTerraform(struct!.recursive),
    syscall: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syscall),
    from_source: cdktf.listMapper(kubearmorSecurityPolicySyscallsMatchPathsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorSecurityPolicySyscallsMatchPathsToHclTerraform(struct?: KubearmorSecurityPolicySyscallsMatchPaths | cdktf.IResolvable): any {
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
    recursive: {
      value: cdktf.stringToHclTerraform(struct!.recursive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syscall: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syscall),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_source: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicySyscallsMatchPathsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicySyscallsMatchPathsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicySyscallsMatchPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicySyscallsMatchPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._recursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursive = this._recursive;
    }
    if (this._syscall !== undefined) {
      hasAnyValues = true;
      internalValueResult.syscall = this._syscall;
    }
    if (this._fromSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSource = this._fromSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicySyscallsMatchPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._recursive = undefined;
      this._syscall = undefined;
      this._fromSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._recursive = value.recursive;
      this._syscall = value.syscall;
      this._fromSource.internalValue = value.fromSource;
    }
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

  // recursive - computed: false, optional: true, required: false
  private _recursive?: string; 
  public get recursive() {
    return this.getStringAttribute('recursive');
  }
  public set recursive(value: string) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // syscall - computed: false, optional: true, required: false
  private _syscall?: string[]; 
  public get syscall() {
    return this.getListAttribute('syscall');
  }
  public set syscall(value: string[]) {
    this._syscall = value;
  }
  public resetSyscall() {
    this._syscall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syscallInput() {
    return this._syscall;
  }

  // from_source - computed: false, optional: true, required: false
  private _fromSource = new KubearmorSecurityPolicySyscallsMatchPathsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorSecurityPolicySyscallsMatchPathsFromSource[] | cdktf.IResolvable) {
    this._fromSource.internalValue = value;
  }
  public resetFromSource() {
    this._fromSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSourceInput() {
    return this._fromSource.internalValue;
  }
}

export class KubearmorSecurityPolicySyscallsMatchPathsList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicySyscallsMatchPaths[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicySyscallsMatchPathsOutputReference {
    return new KubearmorSecurityPolicySyscallsMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicySyscallsMatchSyscallsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#dir KubearmorSecurityPolicy#dir}
  */
  readonly dir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#path KubearmorSecurityPolicy#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#recursive KubearmorSecurityPolicy#recursive}
  */
  readonly recursive?: string;
}

export function kubearmorSecurityPolicySyscallsMatchSyscallsFromSourceToTerraform(struct?: KubearmorSecurityPolicySyscallsMatchSyscallsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    path: cdktf.stringToTerraform(struct!.path),
    recursive: cdktf.stringToTerraform(struct!.recursive),
  }
}


export function kubearmorSecurityPolicySyscallsMatchSyscallsFromSourceToHclTerraform(struct?: KubearmorSecurityPolicySyscallsMatchSyscallsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
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
    recursive: {
      value: cdktf.stringToHclTerraform(struct!.recursive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicySyscallsMatchSyscallsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicySyscallsMatchSyscallsFromSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._recursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursive = this._recursive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicySyscallsMatchSyscallsFromSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dir = undefined;
      this._path = undefined;
      this._recursive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dir = value.dir;
      this._path = value.path;
      this._recursive = value.recursive;
    }
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
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

  // recursive - computed: false, optional: true, required: false
  private _recursive?: string; 
  public get recursive() {
    return this.getStringAttribute('recursive');
  }
  public set recursive(value: string) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }
}

export class KubearmorSecurityPolicySyscallsMatchSyscallsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicySyscallsMatchSyscallsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicySyscallsMatchSyscallsFromSourceOutputReference {
    return new KubearmorSecurityPolicySyscallsMatchSyscallsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicySyscallsMatchSyscalls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#syscall KubearmorSecurityPolicy#syscall}
  */
  readonly syscall?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#from_source KubearmorSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorSecurityPolicySyscallsMatchSyscallsFromSource[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicySyscallsMatchSyscallsToTerraform(struct?: KubearmorSecurityPolicySyscallsMatchSyscalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syscall: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syscall),
    from_source: cdktf.listMapper(kubearmorSecurityPolicySyscallsMatchSyscallsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorSecurityPolicySyscallsMatchSyscallsToHclTerraform(struct?: KubearmorSecurityPolicySyscallsMatchSyscalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    syscall: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syscall),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_source: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicySyscallsMatchSyscallsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicySyscallsMatchSyscallsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicySyscallsMatchSyscallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicySyscallsMatchSyscalls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syscall !== undefined) {
      hasAnyValues = true;
      internalValueResult.syscall = this._syscall;
    }
    if (this._fromSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSource = this._fromSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicySyscallsMatchSyscalls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._syscall = undefined;
      this._fromSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._syscall = value.syscall;
      this._fromSource.internalValue = value.fromSource;
    }
  }

  // syscall - computed: false, optional: true, required: false
  private _syscall?: string[]; 
  public get syscall() {
    return this.getListAttribute('syscall');
  }
  public set syscall(value: string[]) {
    this._syscall = value;
  }
  public resetSyscall() {
    this._syscall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syscallInput() {
    return this._syscall;
  }

  // from_source - computed: false, optional: true, required: false
  private _fromSource = new KubearmorSecurityPolicySyscallsMatchSyscallsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorSecurityPolicySyscallsMatchSyscallsFromSource[] | cdktf.IResolvable) {
    this._fromSource.internalValue = value;
  }
  public resetFromSource() {
    this._fromSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSourceInput() {
    return this._fromSource.internalValue;
  }
}

export class KubearmorSecurityPolicySyscallsMatchSyscallsList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicySyscallsMatchSyscalls[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicySyscallsMatchSyscallsOutputReference {
    return new KubearmorSecurityPolicySyscallsMatchSyscallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorSecurityPolicySyscalls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#message KubearmorSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#severity KubearmorSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#tags KubearmorSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_paths KubearmorSecurityPolicy#match_paths}
  */
  readonly matchPaths?: KubearmorSecurityPolicySyscallsMatchPaths[] | cdktf.IResolvable;
  /**
  * match_syscalls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#match_syscalls KubearmorSecurityPolicy#match_syscalls}
  */
  readonly matchSyscalls?: KubearmorSecurityPolicySyscallsMatchSyscalls[] | cdktf.IResolvable;
}

export function kubearmorSecurityPolicySyscallsToTerraform(struct?: KubearmorSecurityPolicySyscalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_paths: cdktf.listMapper(kubearmorSecurityPolicySyscallsMatchPathsToTerraform, true)(struct!.matchPaths),
    match_syscalls: cdktf.listMapper(kubearmorSecurityPolicySyscallsMatchSyscallsToTerraform, true)(struct!.matchSyscalls),
  }
}


export function kubearmorSecurityPolicySyscallsToHclTerraform(struct?: KubearmorSecurityPolicySyscalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_paths: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicySyscallsMatchPathsToHclTerraform, true)(struct!.matchPaths),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicySyscallsMatchPathsList",
    },
    match_syscalls: {
      value: cdktf.listMapperHcl(kubearmorSecurityPolicySyscallsMatchSyscallsToHclTerraform, true)(struct!.matchSyscalls),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorSecurityPolicySyscallsMatchSyscallsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorSecurityPolicySyscallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorSecurityPolicySyscalls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._matchPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPaths = this._matchPaths?.internalValue;
    }
    if (this._matchSyscalls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSyscalls = this._matchSyscalls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorSecurityPolicySyscalls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._severity = undefined;
      this._tags = undefined;
      this._matchPaths.internalValue = undefined;
      this._matchSyscalls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._severity = value.severity;
      this._tags = value.tags;
      this._matchPaths.internalValue = value.matchPaths;
      this._matchSyscalls.internalValue = value.matchSyscalls;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // match_paths - computed: false, optional: true, required: false
  private _matchPaths = new KubearmorSecurityPolicySyscallsMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: KubearmorSecurityPolicySyscallsMatchPaths[] | cdktf.IResolvable) {
    this._matchPaths.internalValue = value;
  }
  public resetMatchPaths() {
    this._matchPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPathsInput() {
    return this._matchPaths.internalValue;
  }

  // match_syscalls - computed: false, optional: true, required: false
  private _matchSyscalls = new KubearmorSecurityPolicySyscallsMatchSyscallsList(this, "match_syscalls", false);
  public get matchSyscalls() {
    return this._matchSyscalls;
  }
  public putMatchSyscalls(value: KubearmorSecurityPolicySyscallsMatchSyscalls[] | cdktf.IResolvable) {
    this._matchSyscalls.internalValue = value;
  }
  public resetMatchSyscalls() {
    this._matchSyscalls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSyscallsInput() {
    return this._matchSyscalls.internalValue;
  }
}

export class KubearmorSecurityPolicySyscallsList extends cdktf.ComplexList {
  public internalValue? : KubearmorSecurityPolicySyscalls[] | cdktf.IResolvable

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
  public get(index: number): KubearmorSecurityPolicySyscallsOutputReference {
    return new KubearmorSecurityPolicySyscallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy accuknox_kubearmor_security_policy}
*/
export class KubearmorSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "accuknox_kubearmor_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubearmorSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubearmorSecurityPolicy to import
  * @param importFromId The id of the existing KubearmorSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubearmorSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "accuknox_kubearmor_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_security_policy accuknox_kubearmor_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubearmorSecurityPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KubearmorSecurityPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'accuknox_kubearmor_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'accuknox',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._message = config.message;
    this._name = config.name;
    this._namespace = config.namespace;
    this._policy = config.policy;
    this._severity = config.severity;
    this._tags = config.tags;
    this._capabilities.internalValue = config.capabilities;
    this._file.internalValue = config.file;
    this._network.internalValue = config.network;
    this._process.internalValue = config.process;
    this._selector.internalValue = config.selector;
    this._syscalls.internalValue = config.syscalls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // namespace - computed: false, optional: true, required: false
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

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new KubearmorSecurityPolicyCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: KubearmorSecurityPolicyCapabilities[] | cdktf.IResolvable) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new KubearmorSecurityPolicyFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: KubearmorSecurityPolicyFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new KubearmorSecurityPolicyNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: KubearmorSecurityPolicyNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // process - computed: false, optional: true, required: false
  private _process = new KubearmorSecurityPolicyProcessList(this, "process", false);
  public get process() {
    return this._process;
  }
  public putProcess(value: KubearmorSecurityPolicyProcess[] | cdktf.IResolvable) {
    this._process.internalValue = value;
  }
  public resetProcess() {
    this._process.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInput() {
    return this._process.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new KubearmorSecurityPolicySelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: KubearmorSecurityPolicySelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // syscalls - computed: false, optional: true, required: false
  private _syscalls = new KubearmorSecurityPolicySyscallsList(this, "syscalls", false);
  public get syscalls() {
    return this._syscalls;
  }
  public putSyscalls(value: KubearmorSecurityPolicySyscalls[] | cdktf.IResolvable) {
    this._syscalls.internalValue = value;
  }
  public resetSyscalls() {
    this._syscalls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syscallsInput() {
    return this._syscalls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      policy: cdktf.stringToTerraform(this._policy),
      severity: cdktf.numberToTerraform(this._severity),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      capabilities: cdktf.listMapper(kubearmorSecurityPolicyCapabilitiesToTerraform, true)(this._capabilities.internalValue),
      file: kubearmorSecurityPolicyFileToTerraform(this._file.internalValue),
      network: cdktf.listMapper(kubearmorSecurityPolicyNetworkToTerraform, true)(this._network.internalValue),
      process: cdktf.listMapper(kubearmorSecurityPolicyProcessToTerraform, true)(this._process.internalValue),
      selector: kubearmorSecurityPolicySelectorToTerraform(this._selector.internalValue),
      syscalls: cdktf.listMapper(kubearmorSecurityPolicySyscallsToTerraform, true)(this._syscalls.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      capabilities: {
        value: cdktf.listMapperHcl(kubearmorSecurityPolicyCapabilitiesToHclTerraform, true)(this._capabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorSecurityPolicyCapabilitiesList",
      },
      file: {
        value: kubearmorSecurityPolicyFileToHclTerraform(this._file.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorSecurityPolicyFileList",
      },
      network: {
        value: cdktf.listMapperHcl(kubearmorSecurityPolicyNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorSecurityPolicyNetworkList",
      },
      process: {
        value: cdktf.listMapperHcl(kubearmorSecurityPolicyProcessToHclTerraform, true)(this._process.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorSecurityPolicyProcessList",
      },
      selector: {
        value: kubearmorSecurityPolicySelectorToHclTerraform(this._selector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorSecurityPolicySelectorList",
      },
      syscalls: {
        value: cdktf.listMapperHcl(kubearmorSecurityPolicySyscallsToHclTerraform, true)(this._syscalls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorSecurityPolicySyscallsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
