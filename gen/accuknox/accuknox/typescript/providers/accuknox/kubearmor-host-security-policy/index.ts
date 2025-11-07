// https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubearmorHostSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#id KubearmorHostSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#last_updated KubearmorHostSecurityPolicy#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#name KubearmorHostSecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#policy KubearmorHostSecurityPolicy#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#capabilities KubearmorHostSecurityPolicy#capabilities}
  */
  readonly capabilities?: KubearmorHostSecurityPolicyCapabilities[] | cdktf.IResolvable;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#file KubearmorHostSecurityPolicy#file}
  */
  readonly file?: KubearmorHostSecurityPolicyFile;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#network KubearmorHostSecurityPolicy#network}
  */
  readonly network?: KubearmorHostSecurityPolicyNetwork[] | cdktf.IResolvable;
  /**
  * node_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#node_selector KubearmorHostSecurityPolicy#node_selector}
  */
  readonly nodeSelector?: KubearmorHostSecurityPolicyNodeSelector;
  /**
  * process block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#process KubearmorHostSecurityPolicy#process}
  */
  readonly process?: KubearmorHostSecurityPolicyProcess[] | cdktf.IResolvable;
  /**
  * syscalls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#syscalls KubearmorHostSecurityPolicy#syscalls}
  */
  readonly syscalls?: KubearmorHostSecurityPolicySyscalls[] | cdktf.IResolvable;
}
export interface KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceToTerraform(struct?: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceToHclTerraform(struct?: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSource | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSource | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference {
    return new KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyCapabilitiesMatchCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#capabilities KubearmorHostSecurityPolicy#capabilities}
  */
  readonly capabilities: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#from_source KubearmorHostSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSource[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesToTerraform(struct?: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilities | cdktf.IResolvable): any {
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
    from_source: cdktf.listMapper(kubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesToHclTerraform(struct?: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilities | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyCapabilitiesMatchCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilities | cdktf.IResolvable | undefined) {
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
  private _fromSource = new KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesFromSource[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyCapabilitiesMatchCapabilities[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesOutputReference {
    return new KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_capabilities KubearmorHostSecurityPolicy#match_capabilities}
  */
  readonly matchCapabilities?: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilities[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyCapabilitiesToTerraform(struct?: KubearmorHostSecurityPolicyCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_capabilities: cdktf.listMapper(kubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesToTerraform, true)(struct!.matchCapabilities),
  }
}


export function kubearmorHostSecurityPolicyCapabilitiesToHclTerraform(struct?: KubearmorHostSecurityPolicyCapabilities | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesToHclTerraform, true)(struct!.matchCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyCapabilities | cdktf.IResolvable | undefined) {
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
  private _matchCapabilities = new KubearmorHostSecurityPolicyCapabilitiesMatchCapabilitiesList(this, "match_capabilities", false);
  public get matchCapabilities() {
    return this._matchCapabilities;
  }
  public putMatchCapabilities(value: KubearmorHostSecurityPolicyCapabilitiesMatchCapabilities[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicyCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyCapabilities[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyCapabilitiesOutputReference {
    return new KubearmorHostSecurityPolicyCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyFileMatchDirectoriesFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceToTerraform(struct?: KubearmorHostSecurityPolicyFileMatchDirectoriesFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceToHclTerraform(struct?: KubearmorHostSecurityPolicyFileMatchDirectoriesFromSource | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyFileMatchDirectoriesFromSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyFileMatchDirectoriesFromSource | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyFileMatchDirectoriesFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceOutputReference {
    return new KubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyFileMatchDirectories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#dir KubearmorHostSecurityPolicy#dir}
  */
  readonly dir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#owner_only KubearmorHostSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#read_only KubearmorHostSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#recursive KubearmorHostSecurityPolicy#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#from_source KubearmorHostSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorHostSecurityPolicyFileMatchDirectoriesFromSource[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyFileMatchDirectoriesToTerraform(struct?: KubearmorHostSecurityPolicyFileMatchDirectories | cdktf.IResolvable): any {
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
    from_source: cdktf.listMapper(kubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorHostSecurityPolicyFileMatchDirectoriesToHclTerraform(struct?: KubearmorHostSecurityPolicyFileMatchDirectories | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyFileMatchDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyFileMatchDirectories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyFileMatchDirectories | cdktf.IResolvable | undefined) {
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
  private _fromSource = new KubearmorHostSecurityPolicyFileMatchDirectoriesFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorHostSecurityPolicyFileMatchDirectoriesFromSource[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicyFileMatchDirectoriesList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyFileMatchDirectories[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyFileMatchDirectoriesOutputReference {
    return new KubearmorHostSecurityPolicyFileMatchDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyFileMatchPathsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorHostSecurityPolicyFileMatchPathsFromSourceToTerraform(struct?: KubearmorHostSecurityPolicyFileMatchPathsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorHostSecurityPolicyFileMatchPathsFromSourceToHclTerraform(struct?: KubearmorHostSecurityPolicyFileMatchPathsFromSource | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicyFileMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyFileMatchPathsFromSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyFileMatchPathsFromSource | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicyFileMatchPathsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyFileMatchPathsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyFileMatchPathsFromSourceOutputReference {
    return new KubearmorHostSecurityPolicyFileMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyFileMatchPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#owner_only KubearmorHostSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#read_only KubearmorHostSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#from_source KubearmorHostSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorHostSecurityPolicyFileMatchPathsFromSource[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyFileMatchPathsToTerraform(struct?: KubearmorHostSecurityPolicyFileMatchPaths | cdktf.IResolvable): any {
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
    from_source: cdktf.listMapper(kubearmorHostSecurityPolicyFileMatchPathsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorHostSecurityPolicyFileMatchPathsToHclTerraform(struct?: KubearmorHostSecurityPolicyFileMatchPaths | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyFileMatchPathsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyFileMatchPathsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyFileMatchPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyFileMatchPaths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyFileMatchPaths | cdktf.IResolvable | undefined) {
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
  private _fromSource = new KubearmorHostSecurityPolicyFileMatchPathsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorHostSecurityPolicyFileMatchPathsFromSource[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicyFileMatchPathsList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyFileMatchPaths[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyFileMatchPathsOutputReference {
    return new KubearmorHostSecurityPolicyFileMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyFileMatchPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#owner_only KubearmorHostSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#pattern KubearmorHostSecurityPolicy#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#read_only KubearmorHostSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
}

export function kubearmorHostSecurityPolicyFileMatchPatternsToTerraform(struct?: KubearmorHostSecurityPolicyFileMatchPatterns | cdktf.IResolvable): any {
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


export function kubearmorHostSecurityPolicyFileMatchPatternsToHclTerraform(struct?: KubearmorHostSecurityPolicyFileMatchPatterns | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicyFileMatchPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyFileMatchPatterns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyFileMatchPatterns | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicyFileMatchPatternsList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyFileMatchPatterns[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyFileMatchPatternsOutputReference {
    return new KubearmorHostSecurityPolicyFileMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_directories KubearmorHostSecurityPolicy#match_directories}
  */
  readonly matchDirectories?: KubearmorHostSecurityPolicyFileMatchDirectories[] | cdktf.IResolvable;
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_paths KubearmorHostSecurityPolicy#match_paths}
  */
  readonly matchPaths?: KubearmorHostSecurityPolicyFileMatchPaths[] | cdktf.IResolvable;
  /**
  * match_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_patterns KubearmorHostSecurityPolicy#match_patterns}
  */
  readonly matchPatterns?: KubearmorHostSecurityPolicyFileMatchPatterns[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyFileToTerraform(struct?: KubearmorHostSecurityPolicyFileOutputReference | KubearmorHostSecurityPolicyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_directories: cdktf.listMapper(kubearmorHostSecurityPolicyFileMatchDirectoriesToTerraform, true)(struct!.matchDirectories),
    match_paths: cdktf.listMapper(kubearmorHostSecurityPolicyFileMatchPathsToTerraform, true)(struct!.matchPaths),
    match_patterns: cdktf.listMapper(kubearmorHostSecurityPolicyFileMatchPatternsToTerraform, true)(struct!.matchPatterns),
  }
}


export function kubearmorHostSecurityPolicyFileToHclTerraform(struct?: KubearmorHostSecurityPolicyFileOutputReference | KubearmorHostSecurityPolicyFile): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyFileMatchDirectoriesToHclTerraform, true)(struct!.matchDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyFileMatchDirectoriesList",
    },
    match_paths: {
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyFileMatchPathsToHclTerraform, true)(struct!.matchPaths),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyFileMatchPathsList",
    },
    match_patterns: {
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyFileMatchPatternsToHclTerraform, true)(struct!.matchPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyFileMatchPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubearmorHostSecurityPolicyFile | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyFile | undefined) {
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
  private _matchDirectories = new KubearmorHostSecurityPolicyFileMatchDirectoriesList(this, "match_directories", false);
  public get matchDirectories() {
    return this._matchDirectories;
  }
  public putMatchDirectories(value: KubearmorHostSecurityPolicyFileMatchDirectories[] | cdktf.IResolvable) {
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
  private _matchPaths = new KubearmorHostSecurityPolicyFileMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: KubearmorHostSecurityPolicyFileMatchPaths[] | cdktf.IResolvable) {
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
  private _matchPatterns = new KubearmorHostSecurityPolicyFileMatchPatternsList(this, "match_patterns", false);
  public get matchPatterns() {
    return this._matchPatterns;
  }
  public putMatchPatterns(value: KubearmorHostSecurityPolicyFileMatchPatterns[] | cdktf.IResolvable) {
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
export interface KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceToTerraform(struct?: KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceToHclTerraform(struct?: KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSource | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSource | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceOutputReference {
    return new KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyNetworkMatchProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#protocol KubearmorHostSecurityPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#from_source KubearmorHostSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSource[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyNetworkMatchProtocolsToTerraform(struct?: KubearmorHostSecurityPolicyNetworkMatchProtocols | cdktf.IResolvable): any {
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
    from_source: cdktf.listMapper(kubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorHostSecurityPolicyNetworkMatchProtocolsToHclTerraform(struct?: KubearmorHostSecurityPolicyNetworkMatchProtocols | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyNetworkMatchProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyNetworkMatchProtocols | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyNetworkMatchProtocols | cdktf.IResolvable | undefined) {
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
  private _fromSource = new KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorHostSecurityPolicyNetworkMatchProtocolsFromSource[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicyNetworkMatchProtocolsList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyNetworkMatchProtocols[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyNetworkMatchProtocolsOutputReference {
    return new KubearmorHostSecurityPolicyNetworkMatchProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_protocols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_protocols KubearmorHostSecurityPolicy#match_protocols}
  */
  readonly matchProtocols?: KubearmorHostSecurityPolicyNetworkMatchProtocols[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyNetworkToTerraform(struct?: KubearmorHostSecurityPolicyNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_protocols: cdktf.listMapper(kubearmorHostSecurityPolicyNetworkMatchProtocolsToTerraform, true)(struct!.matchProtocols),
  }
}


export function kubearmorHostSecurityPolicyNetworkToHclTerraform(struct?: KubearmorHostSecurityPolicyNetwork | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyNetworkMatchProtocolsToHclTerraform, true)(struct!.matchProtocols),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyNetworkMatchProtocolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyNetwork | cdktf.IResolvable | undefined) {
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
  private _matchProtocols = new KubearmorHostSecurityPolicyNetworkMatchProtocolsList(this, "match_protocols", false);
  public get matchProtocols() {
    return this._matchProtocols;
  }
  public putMatchProtocols(value: KubearmorHostSecurityPolicyNetworkMatchProtocols[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicyNetworkList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyNetwork[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyNetworkOutputReference {
    return new KubearmorHostSecurityPolicyNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyNodeSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_labels KubearmorHostSecurityPolicy#match_labels}
  */
  readonly matchLabels: { [key: string]: string };
}

export function kubearmorHostSecurityPolicyNodeSelectorToTerraform(struct?: KubearmorHostSecurityPolicyNodeSelectorOutputReference | KubearmorHostSecurityPolicyNodeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function kubearmorHostSecurityPolicyNodeSelectorToHclTerraform(struct?: KubearmorHostSecurityPolicyNodeSelectorOutputReference | KubearmorHostSecurityPolicyNodeSelector): any {
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

export class KubearmorHostSecurityPolicyNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubearmorHostSecurityPolicyNodeSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubearmorHostSecurityPolicyNodeSelector | undefined) {
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
export interface KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceToTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceToHclTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSource | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSource | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceOutputReference {
    return new KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyProcessMatchDirectories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#dir KubearmorHostSecurityPolicy#dir}
  */
  readonly dir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#owner_only KubearmorHostSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#recursive KubearmorHostSecurityPolicy#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#from_source KubearmorHostSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSource[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyProcessMatchDirectoriesToTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchDirectories | cdktf.IResolvable): any {
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
    from_source: cdktf.listMapper(kubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorHostSecurityPolicyProcessMatchDirectoriesToHclTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchDirectories | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyProcessMatchDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyProcessMatchDirectories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyProcessMatchDirectories | cdktf.IResolvable | undefined) {
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
  private _fromSource = new KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorHostSecurityPolicyProcessMatchDirectoriesFromSource[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicyProcessMatchDirectoriesList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyProcessMatchDirectories[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyProcessMatchDirectoriesOutputReference {
    return new KubearmorHostSecurityPolicyProcessMatchDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyProcessMatchPathsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path: string;
}

export function kubearmorHostSecurityPolicyProcessMatchPathsFromSourceToTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchPathsFromSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function kubearmorHostSecurityPolicyProcessMatchPathsFromSourceToHclTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchPathsFromSource | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicyProcessMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyProcessMatchPathsFromSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyProcessMatchPathsFromSource | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicyProcessMatchPathsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyProcessMatchPathsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyProcessMatchPathsFromSourceOutputReference {
    return new KubearmorHostSecurityPolicyProcessMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyProcessMatchPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#owner_only KubearmorHostSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#from_source KubearmorHostSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorHostSecurityPolicyProcessMatchPathsFromSource[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyProcessMatchPathsToTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchPaths | cdktf.IResolvable): any {
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
    from_source: cdktf.listMapper(kubearmorHostSecurityPolicyProcessMatchPathsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorHostSecurityPolicyProcessMatchPathsToHclTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchPaths | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyProcessMatchPathsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyProcessMatchPathsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyProcessMatchPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyProcessMatchPaths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyProcessMatchPaths | cdktf.IResolvable | undefined) {
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
  private _fromSource = new KubearmorHostSecurityPolicyProcessMatchPathsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorHostSecurityPolicyProcessMatchPathsFromSource[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicyProcessMatchPathsList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyProcessMatchPaths[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyProcessMatchPathsOutputReference {
    return new KubearmorHostSecurityPolicyProcessMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyProcessMatchPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#owner_only KubearmorHostSecurityPolicy#owner_only}
  */
  readonly ownerOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#pattern KubearmorHostSecurityPolicy#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
}

export function kubearmorHostSecurityPolicyProcessMatchPatternsToTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchPatterns | cdktf.IResolvable): any {
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


export function kubearmorHostSecurityPolicyProcessMatchPatternsToHclTerraform(struct?: KubearmorHostSecurityPolicyProcessMatchPatterns | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicyProcessMatchPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyProcessMatchPatterns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyProcessMatchPatterns | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicyProcessMatchPatternsList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyProcessMatchPatterns[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyProcessMatchPatternsOutputReference {
    return new KubearmorHostSecurityPolicyProcessMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicyProcess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#action KubearmorHostSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_directories KubearmorHostSecurityPolicy#match_directories}
  */
  readonly matchDirectories?: KubearmorHostSecurityPolicyProcessMatchDirectories[] | cdktf.IResolvable;
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_paths KubearmorHostSecurityPolicy#match_paths}
  */
  readonly matchPaths?: KubearmorHostSecurityPolicyProcessMatchPaths[] | cdktf.IResolvable;
  /**
  * match_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_patterns KubearmorHostSecurityPolicy#match_patterns}
  */
  readonly matchPatterns?: KubearmorHostSecurityPolicyProcessMatchPatterns[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicyProcessToTerraform(struct?: KubearmorHostSecurityPolicyProcess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_directories: cdktf.listMapper(kubearmorHostSecurityPolicyProcessMatchDirectoriesToTerraform, true)(struct!.matchDirectories),
    match_paths: cdktf.listMapper(kubearmorHostSecurityPolicyProcessMatchPathsToTerraform, true)(struct!.matchPaths),
    match_patterns: cdktf.listMapper(kubearmorHostSecurityPolicyProcessMatchPatternsToTerraform, true)(struct!.matchPatterns),
  }
}


export function kubearmorHostSecurityPolicyProcessToHclTerraform(struct?: KubearmorHostSecurityPolicyProcess | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyProcessMatchDirectoriesToHclTerraform, true)(struct!.matchDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyProcessMatchDirectoriesList",
    },
    match_paths: {
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyProcessMatchPathsToHclTerraform, true)(struct!.matchPaths),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyProcessMatchPathsList",
    },
    match_patterns: {
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyProcessMatchPatternsToHclTerraform, true)(struct!.matchPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicyProcessMatchPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicyProcessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicyProcess | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicyProcess | cdktf.IResolvable | undefined) {
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
  private _matchDirectories = new KubearmorHostSecurityPolicyProcessMatchDirectoriesList(this, "match_directories", false);
  public get matchDirectories() {
    return this._matchDirectories;
  }
  public putMatchDirectories(value: KubearmorHostSecurityPolicyProcessMatchDirectories[] | cdktf.IResolvable) {
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
  private _matchPaths = new KubearmorHostSecurityPolicyProcessMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: KubearmorHostSecurityPolicyProcessMatchPaths[] | cdktf.IResolvable) {
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
  private _matchPatterns = new KubearmorHostSecurityPolicyProcessMatchPatternsList(this, "match_patterns", false);
  public get matchPatterns() {
    return this._matchPatterns;
  }
  public putMatchPatterns(value: KubearmorHostSecurityPolicyProcessMatchPatterns[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicyProcessList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicyProcess[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicyProcessOutputReference {
    return new KubearmorHostSecurityPolicyProcessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicySyscallsMatchPathsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#dir KubearmorHostSecurityPolicy#dir}
  */
  readonly dir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#recursive KubearmorHostSecurityPolicy#recursive}
  */
  readonly recursive?: string;
}

export function kubearmorHostSecurityPolicySyscallsMatchPathsFromSourceToTerraform(struct?: KubearmorHostSecurityPolicySyscallsMatchPathsFromSource | cdktf.IResolvable): any {
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


export function kubearmorHostSecurityPolicySyscallsMatchPathsFromSourceToHclTerraform(struct?: KubearmorHostSecurityPolicySyscallsMatchPathsFromSource | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicySyscallsMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicySyscallsMatchPathsFromSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicySyscallsMatchPathsFromSource | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicySyscallsMatchPathsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicySyscallsMatchPathsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicySyscallsMatchPathsFromSourceOutputReference {
    return new KubearmorHostSecurityPolicySyscallsMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicySyscallsMatchPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#recursive KubearmorHostSecurityPolicy#recursive}
  */
  readonly recursive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#syscall KubearmorHostSecurityPolicy#syscall}
  */
  readonly syscall?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#from_source KubearmorHostSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorHostSecurityPolicySyscallsMatchPathsFromSource[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicySyscallsMatchPathsToTerraform(struct?: KubearmorHostSecurityPolicySyscallsMatchPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    recursive: cdktf.stringToTerraform(struct!.recursive),
    syscall: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syscall),
    from_source: cdktf.listMapper(kubearmorHostSecurityPolicySyscallsMatchPathsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorHostSecurityPolicySyscallsMatchPathsToHclTerraform(struct?: KubearmorHostSecurityPolicySyscallsMatchPaths | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicySyscallsMatchPathsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicySyscallsMatchPathsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicySyscallsMatchPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicySyscallsMatchPaths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicySyscallsMatchPaths | cdktf.IResolvable | undefined) {
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
  private _fromSource = new KubearmorHostSecurityPolicySyscallsMatchPathsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorHostSecurityPolicySyscallsMatchPathsFromSource[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicySyscallsMatchPathsList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicySyscallsMatchPaths[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicySyscallsMatchPathsOutputReference {
    return new KubearmorHostSecurityPolicySyscallsMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#dir KubearmorHostSecurityPolicy#dir}
  */
  readonly dir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#path KubearmorHostSecurityPolicy#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#recursive KubearmorHostSecurityPolicy#recursive}
  */
  readonly recursive?: string;
}

export function kubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceToTerraform(struct?: KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSource | cdktf.IResolvable): any {
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


export function kubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceToHclTerraform(struct?: KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSource | cdktf.IResolvable): any {
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

export class KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSource | cdktf.IResolvable | undefined) {
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

export class KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSource[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceOutputReference {
    return new KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicySyscallsMatchSyscalls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#syscall KubearmorHostSecurityPolicy#syscall}
  */
  readonly syscall?: string[];
  /**
  * from_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#from_source KubearmorHostSecurityPolicy#from_source}
  */
  readonly fromSource?: KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSource[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicySyscallsMatchSyscallsToTerraform(struct?: KubearmorHostSecurityPolicySyscallsMatchSyscalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syscall: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syscall),
    from_source: cdktf.listMapper(kubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceToTerraform, true)(struct!.fromSource),
  }
}


export function kubearmorHostSecurityPolicySyscallsMatchSyscallsToHclTerraform(struct?: KubearmorHostSecurityPolicySyscallsMatchSyscalls | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceToHclTerraform, true)(struct!.fromSource),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicySyscallsMatchSyscallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicySyscallsMatchSyscalls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicySyscallsMatchSyscalls | cdktf.IResolvable | undefined) {
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
  private _fromSource = new KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }
  public putFromSource(value: KubearmorHostSecurityPolicySyscallsMatchSyscallsFromSource[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicySyscallsMatchSyscallsList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicySyscallsMatchSyscalls[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicySyscallsMatchSyscallsOutputReference {
    return new KubearmorHostSecurityPolicySyscallsMatchSyscallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubearmorHostSecurityPolicySyscalls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#message KubearmorHostSecurityPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#severity KubearmorHostSecurityPolicy#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#tags KubearmorHostSecurityPolicy#tags}
  */
  readonly tags?: string[];
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_paths KubearmorHostSecurityPolicy#match_paths}
  */
  readonly matchPaths?: KubearmorHostSecurityPolicySyscallsMatchPaths[] | cdktf.IResolvable;
  /**
  * match_syscalls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#match_syscalls KubearmorHostSecurityPolicy#match_syscalls}
  */
  readonly matchSyscalls?: KubearmorHostSecurityPolicySyscallsMatchSyscalls[] | cdktf.IResolvable;
}

export function kubearmorHostSecurityPolicySyscallsToTerraform(struct?: KubearmorHostSecurityPolicySyscalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    severity: cdktf.numberToTerraform(struct!.severity),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    match_paths: cdktf.listMapper(kubearmorHostSecurityPolicySyscallsMatchPathsToTerraform, true)(struct!.matchPaths),
    match_syscalls: cdktf.listMapper(kubearmorHostSecurityPolicySyscallsMatchSyscallsToTerraform, true)(struct!.matchSyscalls),
  }
}


export function kubearmorHostSecurityPolicySyscallsToHclTerraform(struct?: KubearmorHostSecurityPolicySyscalls | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicySyscallsMatchPathsToHclTerraform, true)(struct!.matchPaths),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicySyscallsMatchPathsList",
    },
    match_syscalls: {
      value: cdktf.listMapperHcl(kubearmorHostSecurityPolicySyscallsMatchSyscallsToHclTerraform, true)(struct!.matchSyscalls),
      isBlock: true,
      type: "list",
      storageClassType: "KubearmorHostSecurityPolicySyscallsMatchSyscallsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubearmorHostSecurityPolicySyscallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubearmorHostSecurityPolicySyscalls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubearmorHostSecurityPolicySyscalls | cdktf.IResolvable | undefined) {
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
  private _matchPaths = new KubearmorHostSecurityPolicySyscallsMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: KubearmorHostSecurityPolicySyscallsMatchPaths[] | cdktf.IResolvable) {
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
  private _matchSyscalls = new KubearmorHostSecurityPolicySyscallsMatchSyscallsList(this, "match_syscalls", false);
  public get matchSyscalls() {
    return this._matchSyscalls;
  }
  public putMatchSyscalls(value: KubearmorHostSecurityPolicySyscallsMatchSyscalls[] | cdktf.IResolvable) {
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

export class KubearmorHostSecurityPolicySyscallsList extends cdktf.ComplexList {
  public internalValue? : KubearmorHostSecurityPolicySyscalls[] | cdktf.IResolvable

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
  public get(index: number): KubearmorHostSecurityPolicySyscallsOutputReference {
    return new KubearmorHostSecurityPolicySyscallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy accuknox_kubearmor_host_security_policy}
*/
export class KubearmorHostSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "accuknox_kubearmor_host_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubearmorHostSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubearmorHostSecurityPolicy to import
  * @param importFromId The id of the existing KubearmorHostSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubearmorHostSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "accuknox_kubearmor_host_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/resources/kubearmor_host_security_policy accuknox_kubearmor_host_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubearmorHostSecurityPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KubearmorHostSecurityPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'accuknox_kubearmor_host_security_policy',
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
    this._policy = config.policy;
    this._severity = config.severity;
    this._tags = config.tags;
    this._capabilities.internalValue = config.capabilities;
    this._file.internalValue = config.file;
    this._network.internalValue = config.network;
    this._nodeSelector.internalValue = config.nodeSelector;
    this._process.internalValue = config.process;
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
  private _capabilities = new KubearmorHostSecurityPolicyCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: KubearmorHostSecurityPolicyCapabilities[] | cdktf.IResolvable) {
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
  private _file = new KubearmorHostSecurityPolicyFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: KubearmorHostSecurityPolicyFile) {
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
  private _network = new KubearmorHostSecurityPolicyNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: KubearmorHostSecurityPolicyNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new KubearmorHostSecurityPolicyNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: KubearmorHostSecurityPolicyNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // process - computed: false, optional: true, required: false
  private _process = new KubearmorHostSecurityPolicyProcessList(this, "process", false);
  public get process() {
    return this._process;
  }
  public putProcess(value: KubearmorHostSecurityPolicyProcess[] | cdktf.IResolvable) {
    this._process.internalValue = value;
  }
  public resetProcess() {
    this._process.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInput() {
    return this._process.internalValue;
  }

  // syscalls - computed: false, optional: true, required: false
  private _syscalls = new KubearmorHostSecurityPolicySyscallsList(this, "syscalls", false);
  public get syscalls() {
    return this._syscalls;
  }
  public putSyscalls(value: KubearmorHostSecurityPolicySyscalls[] | cdktf.IResolvable) {
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
      policy: cdktf.stringToTerraform(this._policy),
      severity: cdktf.numberToTerraform(this._severity),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      capabilities: cdktf.listMapper(kubearmorHostSecurityPolicyCapabilitiesToTerraform, true)(this._capabilities.internalValue),
      file: kubearmorHostSecurityPolicyFileToTerraform(this._file.internalValue),
      network: cdktf.listMapper(kubearmorHostSecurityPolicyNetworkToTerraform, true)(this._network.internalValue),
      node_selector: kubearmorHostSecurityPolicyNodeSelectorToTerraform(this._nodeSelector.internalValue),
      process: cdktf.listMapper(kubearmorHostSecurityPolicyProcessToTerraform, true)(this._process.internalValue),
      syscalls: cdktf.listMapper(kubearmorHostSecurityPolicySyscallsToTerraform, true)(this._syscalls.internalValue),
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
        value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyCapabilitiesToHclTerraform, true)(this._capabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorHostSecurityPolicyCapabilitiesList",
      },
      file: {
        value: kubearmorHostSecurityPolicyFileToHclTerraform(this._file.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorHostSecurityPolicyFileList",
      },
      network: {
        value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorHostSecurityPolicyNetworkList",
      },
      node_selector: {
        value: kubearmorHostSecurityPolicyNodeSelectorToHclTerraform(this._nodeSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorHostSecurityPolicyNodeSelectorList",
      },
      process: {
        value: cdktf.listMapperHcl(kubearmorHostSecurityPolicyProcessToHclTerraform, true)(this._process.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorHostSecurityPolicyProcessList",
      },
      syscalls: {
        value: cdktf.listMapperHcl(kubearmorHostSecurityPolicySyscallsToHclTerraform, true)(this._syscalls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubearmorHostSecurityPolicySyscallsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
