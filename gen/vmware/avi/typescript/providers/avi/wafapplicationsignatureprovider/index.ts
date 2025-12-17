// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafapplicationsignatureproviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#filter_rules_on_import Wafapplicationsignatureprovider#filter_rules_on_import}
  */
  readonly filterRulesOnImport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#id Wafapplicationsignatureprovider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#name Wafapplicationsignatureprovider#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#ruleset_version Wafapplicationsignatureprovider#ruleset_version}
  */
  readonly rulesetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#tenant_ref Wafapplicationsignatureprovider#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#uuid Wafapplicationsignatureprovider#uuid}
  */
  readonly uuid?: string;
  /**
  * available_applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#available_applications Wafapplicationsignatureprovider#available_applications}
  */
  readonly availableApplications?: WafapplicationsignatureproviderAvailableApplications[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#configpb_attributes Wafapplicationsignatureprovider#configpb_attributes}
  */
  readonly configpbAttributes?: WafapplicationsignatureproviderConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * service_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#service_status Wafapplicationsignatureprovider#service_status}
  */
  readonly serviceStatus?: WafapplicationsignatureproviderServiceStatus[] | cdktf.IResolvable;
  /**
  * signatures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#signatures Wafapplicationsignatureprovider#signatures}
  */
  readonly signatures?: WafapplicationsignatureproviderSignatures[] | cdktf.IResolvable;
}
export interface WafapplicationsignatureproviderAvailableApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#application Wafapplicationsignatureprovider#application}
  */
  readonly application?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#last_changed_ruleset_version Wafapplicationsignatureprovider#last_changed_ruleset_version}
  */
  readonly lastChangedRulesetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#number_of_rules Wafapplicationsignatureprovider#number_of_rules}
  */
  readonly numberOfRules?: string;
}

export function wafapplicationsignatureproviderAvailableApplicationsToTerraform(struct?: WafapplicationsignatureproviderAvailableApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    last_changed_ruleset_version: cdktf.stringToTerraform(struct!.lastChangedRulesetVersion),
    number_of_rules: cdktf.stringToTerraform(struct!.numberOfRules),
  }
}


export function wafapplicationsignatureproviderAvailableApplicationsToHclTerraform(struct?: WafapplicationsignatureproviderAvailableApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_ruleset_version: {
      value: cdktf.stringToHclTerraform(struct!.lastChangedRulesetVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_rules: {
      value: cdktf.stringToHclTerraform(struct!.numberOfRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderAvailableApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderAvailableApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._lastChangedRulesetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedRulesetVersion = this._lastChangedRulesetVersion;
    }
    if (this._numberOfRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfRules = this._numberOfRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderAvailableApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._lastChangedRulesetVersion = undefined;
      this._numberOfRules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._lastChangedRulesetVersion = value.lastChangedRulesetVersion;
      this._numberOfRules = value.numberOfRules;
    }
  }

  // application - computed: true, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // last_changed_ruleset_version - computed: true, optional: true, required: false
  private _lastChangedRulesetVersion?: string; 
  public get lastChangedRulesetVersion() {
    return this.getStringAttribute('last_changed_ruleset_version');
  }
  public set lastChangedRulesetVersion(value: string) {
    this._lastChangedRulesetVersion = value;
  }
  public resetLastChangedRulesetVersion() {
    this._lastChangedRulesetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedRulesetVersionInput() {
    return this._lastChangedRulesetVersion;
  }

  // number_of_rules - computed: true, optional: true, required: false
  private _numberOfRules?: string; 
  public get numberOfRules() {
    return this.getStringAttribute('number_of_rules');
  }
  public set numberOfRules(value: string) {
    this._numberOfRules = value;
  }
  public resetNumberOfRules() {
    this._numberOfRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfRulesInput() {
    return this._numberOfRules;
  }
}

export class WafapplicationsignatureproviderAvailableApplicationsList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderAvailableApplications[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderAvailableApplicationsOutputReference {
    return new WafapplicationsignatureproviderAvailableApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#version Wafapplicationsignatureprovider#version}
  */
  readonly version?: string;
}

export function wafapplicationsignatureproviderConfigpbAttributesToTerraform(struct?: WafapplicationsignatureproviderConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function wafapplicationsignatureproviderConfigpbAttributesToHclTerraform(struct?: WafapplicationsignatureproviderConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class WafapplicationsignatureproviderConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderConfigpbAttributesOutputReference {
    return new WafapplicationsignatureproviderConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#secs Wafapplicationsignatureprovider#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#usecs Wafapplicationsignatureprovider#usecs}
  */
  readonly usecs: string;
}

export function wafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckToTerraform(struct?: WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function wafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckToHclTerraform(struct?: WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckOutputReference {
    return new WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#secs Wafapplicationsignatureprovider#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#usecs Wafapplicationsignatureprovider#usecs}
  */
  readonly usecs: string;
}

export function wafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampToTerraform(struct?: WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function wafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampToHclTerraform(struct?: WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampOutputReference {
    return new WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderServiceStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#error Wafapplicationsignatureprovider#error}
  */
  readonly error?: string;
  /**
  * last_successful_update_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#last_successful_update_check Wafapplicationsignatureprovider#last_successful_update_check}
  */
  readonly lastSuccessfulUpdateCheck?: WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck[] | cdktf.IResolvable;
  /**
  * upstream_sync_timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#upstream_sync_timestamp Wafapplicationsignatureprovider#upstream_sync_timestamp}
  */
  readonly upstreamSyncTimestamp?: WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp[] | cdktf.IResolvable;
}

export function wafapplicationsignatureproviderServiceStatusToTerraform(struct?: WafapplicationsignatureproviderServiceStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error: cdktf.stringToTerraform(struct!.error),
    last_successful_update_check: cdktf.listMapper(wafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckToTerraform, true)(struct!.lastSuccessfulUpdateCheck),
    upstream_sync_timestamp: cdktf.listMapper(wafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampToTerraform, true)(struct!.upstreamSyncTimestamp),
  }
}


export function wafapplicationsignatureproviderServiceStatusToHclTerraform(struct?: WafapplicationsignatureproviderServiceStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_successful_update_check: {
      value: cdktf.listMapperHcl(wafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckToHclTerraform, true)(struct!.lastSuccessfulUpdateCheck),
      isBlock: true,
      type: "set",
      storageClassType: "WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckList",
    },
    upstream_sync_timestamp: {
      value: cdktf.listMapperHcl(wafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampToHclTerraform, true)(struct!.upstreamSyncTimestamp),
      isBlock: true,
      type: "set",
      storageClassType: "WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderServiceStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderServiceStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._lastSuccessfulUpdateCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSuccessfulUpdateCheck = this._lastSuccessfulUpdateCheck?.internalValue;
    }
    if (this._upstreamSyncTimestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamSyncTimestamp = this._upstreamSyncTimestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderServiceStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._error = undefined;
      this._lastSuccessfulUpdateCheck.internalValue = undefined;
      this._upstreamSyncTimestamp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._error = value.error;
      this._lastSuccessfulUpdateCheck.internalValue = value.lastSuccessfulUpdateCheck;
      this._upstreamSyncTimestamp.internalValue = value.upstreamSyncTimestamp;
    }
  }

  // error - computed: true, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // last_successful_update_check - computed: false, optional: true, required: false
  private _lastSuccessfulUpdateCheck = new WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckList(this, "last_successful_update_check", true);
  public get lastSuccessfulUpdateCheck() {
    return this._lastSuccessfulUpdateCheck;
  }
  public putLastSuccessfulUpdateCheck(value: WafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck[] | cdktf.IResolvable) {
    this._lastSuccessfulUpdateCheck.internalValue = value;
  }
  public resetLastSuccessfulUpdateCheck() {
    this._lastSuccessfulUpdateCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSuccessfulUpdateCheckInput() {
    return this._lastSuccessfulUpdateCheck.internalValue;
  }

  // upstream_sync_timestamp - computed: false, optional: true, required: false
  private _upstreamSyncTimestamp = new WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampList(this, "upstream_sync_timestamp", true);
  public get upstreamSyncTimestamp() {
    return this._upstreamSyncTimestamp;
  }
  public putUpstreamSyncTimestamp(value: WafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp[] | cdktf.IResolvable) {
    this._upstreamSyncTimestamp.internalValue = value;
  }
  public resetUpstreamSyncTimestamp() {
    this._upstreamSyncTimestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamSyncTimestampInput() {
    return this._upstreamSyncTimestamp.internalValue;
  }
}

export class WafapplicationsignatureproviderServiceStatusList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderServiceStatus[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderServiceStatusOutputReference {
    return new WafapplicationsignatureproviderServiceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#addr Wafapplicationsignatureprovider#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#type Wafapplicationsignatureprovider#type}
  */
  readonly type: string;
}

export function wafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrToTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrToHclTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrOutputReference {
    return new WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderSignaturesExcludeListClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#mask Wafapplicationsignatureprovider#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#ip_addr Wafapplicationsignatureprovider#ip_addr}
  */
  readonly ipAddr: WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable;
}

export function wafapplicationsignatureproviderSignaturesExcludeListClientSubnetToTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafapplicationsignatureproviderSignaturesExcludeListClientSubnetToHclTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderSignaturesExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderSignaturesExcludeListClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderSignaturesExcludeListClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafapplicationsignatureproviderSignaturesExcludeListClientSubnetList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderSignaturesExcludeListClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderSignaturesExcludeListClientSubnetOutputReference {
    return new WafapplicationsignatureproviderSignaturesExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#match_case Wafapplicationsignatureprovider#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#match_op Wafapplicationsignatureprovider#match_op}
  */
  readonly matchOp?: string;
}

export function wafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaToTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaToHclTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaOutputReference {
    return new WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#match_case Wafapplicationsignatureprovider#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#match_op Wafapplicationsignatureprovider#match_op}
  */
  readonly matchOp?: string;
}

export function wafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaToTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaToHclTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaOutputReference {
    return new WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderSignaturesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#description Wafapplicationsignatureprovider#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#match_element Wafapplicationsignatureprovider#match_element}
  */
  readonly matchElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#uri_path Wafapplicationsignatureprovider#uri_path}
  */
  readonly uriPath?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#client_subnet Wafapplicationsignatureprovider#client_subnet}
  */
  readonly clientSubnet?: WafapplicationsignatureproviderSignaturesExcludeListClientSubnet[] | cdktf.IResolvable;
  /**
  * match_element_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#match_element_criteria Wafapplicationsignatureprovider#match_element_criteria}
  */
  readonly matchElementCriteria?: WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria[] | cdktf.IResolvable;
  /**
  * uri_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#uri_match_criteria Wafapplicationsignatureprovider#uri_match_criteria}
  */
  readonly uriMatchCriteria?: WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria[] | cdktf.IResolvable;
}

export function wafapplicationsignatureproviderSignaturesExcludeListStructToTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match_element: cdktf.stringToTerraform(struct!.matchElement),
    uri_path: cdktf.stringToTerraform(struct!.uriPath),
    client_subnet: cdktf.listMapper(wafapplicationsignatureproviderSignaturesExcludeListClientSubnetToTerraform, true)(struct!.clientSubnet),
    match_element_criteria: cdktf.listMapper(wafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaToTerraform, true)(struct!.matchElementCriteria),
    uri_match_criteria: cdktf.listMapper(wafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaToTerraform, true)(struct!.uriMatchCriteria),
  }
}


export function wafapplicationsignatureproviderSignaturesExcludeListStructToHclTerraform(struct?: WafapplicationsignatureproviderSignaturesExcludeListStruct | cdktf.IResolvable): any {
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
    match_element: {
      value: cdktf.stringToHclTerraform(struct!.matchElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktf.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(wafapplicationsignatureproviderSignaturesExcludeListClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "WafapplicationsignatureproviderSignaturesExcludeListClientSubnetList",
    },
    match_element_criteria: {
      value: cdktf.listMapperHcl(wafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaToHclTerraform, true)(struct!.matchElementCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaList",
    },
    uri_match_criteria: {
      value: cdktf.listMapperHcl(wafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaToHclTerraform, true)(struct!.uriMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderSignaturesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderSignaturesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElement = this._matchElement;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._matchElementCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElementCriteria = this._matchElementCriteria?.internalValue;
    }
    if (this._uriMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriMatchCriteria = this._uriMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderSignaturesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._matchElement = undefined;
      this._uriPath = undefined;
      this._clientSubnet.internalValue = undefined;
      this._matchElementCriteria.internalValue = undefined;
      this._uriMatchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._matchElement = value.matchElement;
      this._uriPath = value.uriPath;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._matchElementCriteria.internalValue = value.matchElementCriteria;
      this._uriMatchCriteria.internalValue = value.uriMatchCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // match_element - computed: true, optional: true, required: false
  private _matchElement?: string; 
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }
  public set matchElement(value: string) {
    this._matchElement = value;
  }
  public resetMatchElement() {
    this._matchElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementInput() {
    return this._matchElement;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new WafapplicationsignatureproviderSignaturesExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: WafapplicationsignatureproviderSignaturesExcludeListClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // match_element_criteria - computed: false, optional: true, required: false
  private _matchElementCriteria = new WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }
  public putMatchElementCriteria(value: WafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria[] | cdktf.IResolvable) {
    this._matchElementCriteria.internalValue = value;
  }
  public resetMatchElementCriteria() {
    this._matchElementCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementCriteriaInput() {
    return this._matchElementCriteria.internalValue;
  }

  // uri_match_criteria - computed: false, optional: true, required: false
  private _uriMatchCriteria = new WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }
  public putUriMatchCriteria(value: WafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria[] | cdktf.IResolvable) {
    this._uriMatchCriteria.internalValue = value;
  }
  public resetUriMatchCriteria() {
    this._uriMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchCriteriaInput() {
    return this._uriMatchCriteria.internalValue;
  }
}

export class WafapplicationsignatureproviderSignaturesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderSignaturesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderSignaturesExcludeListStructOutputReference {
    return new WafapplicationsignatureproviderSignaturesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafapplicationsignatureproviderSignatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#enable Wafapplicationsignatureprovider#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#index Wafapplicationsignatureprovider#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#is_sensitive Wafapplicationsignatureprovider#is_sensitive}
  */
  readonly isSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#mode Wafapplicationsignatureprovider#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#name Wafapplicationsignatureprovider#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#paranoia_level Wafapplicationsignatureprovider#paranoia_level}
  */
  readonly paranoiaLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#phase Wafapplicationsignatureprovider#phase}
  */
  readonly phase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#rule Wafapplicationsignatureprovider#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#rule_id Wafapplicationsignatureprovider#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#tags Wafapplicationsignatureprovider#tags}
  */
  readonly tags?: string[];
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#exclude_list Wafapplicationsignatureprovider#exclude_list}
  */
  readonly excludeList?: WafapplicationsignatureproviderSignaturesExcludeListStruct[] | cdktf.IResolvable;
}

export function wafapplicationsignatureproviderSignaturesToTerraform(struct?: WafapplicationsignatureproviderSignatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    is_sensitive: cdktf.stringToTerraform(struct!.isSensitive),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    paranoia_level: cdktf.stringToTerraform(struct!.paranoiaLevel),
    phase: cdktf.stringToTerraform(struct!.phase),
    rule: cdktf.stringToTerraform(struct!.rule),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    exclude_list: cdktf.listMapper(wafapplicationsignatureproviderSignaturesExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function wafapplicationsignatureproviderSignaturesToHclTerraform(struct?: WafapplicationsignatureproviderSignatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.isSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    paranoia_level: {
      value: cdktf.stringToHclTerraform(struct!.paranoiaLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(wafapplicationsignatureproviderSignaturesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "WafapplicationsignatureproviderSignaturesExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafapplicationsignatureproviderSignaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafapplicationsignatureproviderSignatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paranoiaLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.paranoiaLevel = this._paranoiaLevel;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafapplicationsignatureproviderSignatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._isSensitive = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._paranoiaLevel = undefined;
      this._phase = undefined;
      this._rule = undefined;
      this._ruleId = undefined;
      this._tags = undefined;
      this._excludeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._isSensitive = value.isSensitive;
      this._mode = value.mode;
      this._name = value.name;
      this._paranoiaLevel = value.paranoiaLevel;
      this._phase = value.phase;
      this._rule = value.rule;
      this._ruleId = value.ruleId;
      this._tags = value.tags;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: string; 
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }
  public set isSensitive(value: string) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
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

  // paranoia_level - computed: true, optional: true, required: false
  private _paranoiaLevel?: string; 
  public get paranoiaLevel() {
    return this.getStringAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: string) {
    this._paranoiaLevel = value;
  }
  public resetParanoiaLevel() {
    this._paranoiaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // phase - computed: true, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
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

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new WafapplicationsignatureproviderSignaturesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: WafapplicationsignatureproviderSignaturesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}

export class WafapplicationsignatureproviderSignaturesList extends cdktf.ComplexList {
  public internalValue? : WafapplicationsignatureproviderSignatures[] | cdktf.IResolvable

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
  public get(index: number): WafapplicationsignatureproviderSignaturesOutputReference {
    return new WafapplicationsignatureproviderSignaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider avi_wafapplicationsignatureprovider}
*/
export class Wafapplicationsignatureprovider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_wafapplicationsignatureprovider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafapplicationsignatureprovider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafapplicationsignatureprovider to import
  * @param importFromId The id of the existing Wafapplicationsignatureprovider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafapplicationsignatureprovider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_wafapplicationsignatureprovider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/wafapplicationsignatureprovider avi_wafapplicationsignatureprovider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafapplicationsignatureproviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WafapplicationsignatureproviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_wafapplicationsignatureprovider',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterRulesOnImport = config.filterRulesOnImport;
    this._id = config.id;
    this._name = config.name;
    this._rulesetVersion = config.rulesetVersion;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._availableApplications.internalValue = config.availableApplications;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._serviceStatus.internalValue = config.serviceStatus;
    this._signatures.internalValue = config.signatures;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_rules_on_import - computed: false, optional: true, required: false
  private _filterRulesOnImport?: string; 
  public get filterRulesOnImport() {
    return this.getStringAttribute('filter_rules_on_import');
  }
  public set filterRulesOnImport(value: string) {
    this._filterRulesOnImport = value;
  }
  public resetFilterRulesOnImport() {
    this._filterRulesOnImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRulesOnImportInput() {
    return this._filterRulesOnImport;
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

  // name - computed: true, optional: true, required: false
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

  // ruleset_version - computed: true, optional: true, required: false
  private _rulesetVersion?: string; 
  public get rulesetVersion() {
    return this.getStringAttribute('ruleset_version');
  }
  public set rulesetVersion(value: string) {
    this._rulesetVersion = value;
  }
  public resetRulesetVersion() {
    this._rulesetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetVersionInput() {
    return this._rulesetVersion;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // available_applications - computed: false, optional: true, required: false
  private _availableApplications = new WafapplicationsignatureproviderAvailableApplicationsList(this, "available_applications", false);
  public get availableApplications() {
    return this._availableApplications;
  }
  public putAvailableApplications(value: WafapplicationsignatureproviderAvailableApplications[] | cdktf.IResolvable) {
    this._availableApplications.internalValue = value;
  }
  public resetAvailableApplications() {
    this._availableApplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableApplicationsInput() {
    return this._availableApplications.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new WafapplicationsignatureproviderConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: WafapplicationsignatureproviderConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // service_status - computed: false, optional: true, required: false
  private _serviceStatus = new WafapplicationsignatureproviderServiceStatusList(this, "service_status", true);
  public get serviceStatus() {
    return this._serviceStatus;
  }
  public putServiceStatus(value: WafapplicationsignatureproviderServiceStatus[] | cdktf.IResolvable) {
    this._serviceStatus.internalValue = value;
  }
  public resetServiceStatus() {
    this._serviceStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceStatusInput() {
    return this._serviceStatus.internalValue;
  }

  // signatures - computed: false, optional: true, required: false
  private _signatures = new WafapplicationsignatureproviderSignaturesList(this, "signatures", false);
  public get signatures() {
    return this._signatures;
  }
  public putSignatures(value: WafapplicationsignatureproviderSignatures[] | cdktf.IResolvable) {
    this._signatures.internalValue = value;
  }
  public resetSignatures() {
    this._signatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesInput() {
    return this._signatures.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_rules_on_import: cdktf.stringToTerraform(this._filterRulesOnImport),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ruleset_version: cdktf.stringToTerraform(this._rulesetVersion),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      available_applications: cdktf.listMapper(wafapplicationsignatureproviderAvailableApplicationsToTerraform, true)(this._availableApplications.internalValue),
      configpb_attributes: cdktf.listMapper(wafapplicationsignatureproviderConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      service_status: cdktf.listMapper(wafapplicationsignatureproviderServiceStatusToTerraform, true)(this._serviceStatus.internalValue),
      signatures: cdktf.listMapper(wafapplicationsignatureproviderSignaturesToTerraform, true)(this._signatures.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_rules_on_import: {
        value: cdktf.stringToHclTerraform(this._filterRulesOnImport),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ruleset_version: {
        value: cdktf.stringToHclTerraform(this._rulesetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_applications: {
        value: cdktf.listMapperHcl(wafapplicationsignatureproviderAvailableApplicationsToHclTerraform, true)(this._availableApplications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafapplicationsignatureproviderAvailableApplicationsList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(wafapplicationsignatureproviderConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafapplicationsignatureproviderConfigpbAttributesList",
      },
      service_status: {
        value: cdktf.listMapperHcl(wafapplicationsignatureproviderServiceStatusToHclTerraform, true)(this._serviceStatus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafapplicationsignatureproviderServiceStatusList",
      },
      signatures: {
        value: cdktf.listMapperHcl(wafapplicationsignatureproviderSignaturesToHclTerraform, true)(this._signatures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafapplicationsignatureproviderSignaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
