// https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LibraryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#description Library#description}
  */
  readonly description: string;
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#id Library#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#read_only Library#read_only}
  */
  readonly readOnly: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#source_control Library#source_control}
  */
  readonly sourceControl?: LibrarySourceControl;
}
export interface LibraryResultDatasourcesStatus {
}

export function libraryResultDatasourcesStatusToTerraform(struct?: LibraryResultDatasourcesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultDatasourcesStatusToHclTerraform(struct?: LibraryResultDatasourcesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultDatasourcesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibraryResultDatasourcesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultDatasourcesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface LibraryResultDatasources {
}

export function libraryResultDatasourcesToTerraform(struct?: LibraryResultDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultDatasourcesToHclTerraform(struct?: LibraryResultDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultDatasourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LibraryResultDatasources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultDatasources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // status - computed: true, optional: false, required: false
  private _status = new LibraryResultDatasourcesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}

export class LibraryResultDatasourcesList extends cdktf.ComplexList {

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
  public get(index: number): LibraryResultDatasourcesOutputReference {
    return new LibraryResultDatasourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LibraryResultMetadata {
}

export function libraryResultMetadataToTerraform(struct?: LibraryResultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultMetadataToHclTerraform(struct?: LibraryResultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibraryResultMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_through - computed: true, optional: false, required: false
  public get createdThrough() {
    return this.getStringAttribute('created_through');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_through - computed: true, optional: false, required: false
  public get lastModifiedThrough() {
    return this.getStringAttribute('last_modified_through');
  }
}
export interface LibraryResultPoliciesEnforcement {
}

export function libraryResultPoliciesEnforcementToTerraform(struct?: LibraryResultPoliciesEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultPoliciesEnforcementToHclTerraform(struct?: LibraryResultPoliciesEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultPoliciesEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibraryResultPoliciesEnforcement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultPoliciesEnforcement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface LibraryResultPoliciesModulesRules {
}

export function libraryResultPoliciesModulesRulesToTerraform(struct?: LibraryResultPoliciesModulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultPoliciesModulesRulesToHclTerraform(struct?: LibraryResultPoliciesModulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultPoliciesModulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibraryResultPoliciesModulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultPoliciesModulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getNumberAttribute('allow');
  }

  // deny - computed: true, optional: false, required: false
  public get deny() {
    return this.getNumberAttribute('deny');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getNumberAttribute('enforce');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getNumberAttribute('ignore');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getNumberAttribute('notify');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getNumberAttribute('other');
  }

  // test - computed: true, optional: false, required: false
  public get test() {
    return this.getNumberAttribute('test');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface LibraryResultPoliciesModules {
}

export function libraryResultPoliciesModulesToTerraform(struct?: LibraryResultPoliciesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultPoliciesModulesToHclTerraform(struct?: LibraryResultPoliciesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultPoliciesModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LibraryResultPoliciesModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultPoliciesModules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // placeholder - computed: true, optional: false, required: false
  public get placeholder() {
    return this.getBooleanAttribute('placeholder');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new LibraryResultPoliciesModulesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
}

export class LibraryResultPoliciesModulesList extends cdktf.ComplexList {

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
  public get(index: number): LibraryResultPoliciesModulesOutputReference {
    return new LibraryResultPoliciesModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LibraryResultPoliciesRules {
}

export function libraryResultPoliciesRulesToTerraform(struct?: LibraryResultPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultPoliciesRulesToHclTerraform(struct?: LibraryResultPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultPoliciesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibraryResultPoliciesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultPoliciesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getNumberAttribute('allow');
  }

  // deny - computed: true, optional: false, required: false
  public get deny() {
    return this.getNumberAttribute('deny');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getNumberAttribute('enforce');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getNumberAttribute('ignore');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getNumberAttribute('notify');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getNumberAttribute('other');
  }

  // test - computed: true, optional: false, required: false
  public get test() {
    return this.getNumberAttribute('test');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface LibraryResultPolicies {
}

export function libraryResultPoliciesToTerraform(struct?: LibraryResultPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultPoliciesToHclTerraform(struct?: LibraryResultPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LibraryResultPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enforcement - computed: true, optional: false, required: false
  private _enforcement = new LibraryResultPoliciesEnforcementOutputReference(this, "enforcement");
  public get enforcement() {
    return this._enforcement;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new LibraryResultPoliciesModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new LibraryResultPoliciesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class LibraryResultPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): LibraryResultPoliciesOutputReference {
    return new LibraryResultPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LibraryResultSourceControlLibraryOriginSshCredentials {
}

export function libraryResultSourceControlLibraryOriginSshCredentialsToTerraform(struct?: LibraryResultSourceControlLibraryOriginSshCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultSourceControlLibraryOriginSshCredentialsToHclTerraform(struct?: LibraryResultSourceControlLibraryOriginSshCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultSourceControlLibraryOriginSshCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibraryResultSourceControlLibraryOriginSshCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultSourceControlLibraryOriginSshCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
}
export interface LibraryResultSourceControlLibraryOrigin {
}

export function libraryResultSourceControlLibraryOriginToTerraform(struct?: LibraryResultSourceControlLibraryOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultSourceControlLibraryOriginToHclTerraform(struct?: LibraryResultSourceControlLibraryOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultSourceControlLibraryOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibraryResultSourceControlLibraryOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultSourceControlLibraryOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commit - computed: true, optional: false, required: false
  public get commit() {
    return this.getStringAttribute('commit');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }

  // ssh_credentials - computed: true, optional: false, required: false
  private _sshCredentials = new LibraryResultSourceControlLibraryOriginSshCredentialsOutputReference(this, "ssh_credentials");
  public get sshCredentials() {
    return this._sshCredentials;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface LibraryResultSourceControl {
}

export function libraryResultSourceControlToTerraform(struct?: LibraryResultSourceControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultSourceControlToHclTerraform(struct?: LibraryResultSourceControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultSourceControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibraryResultSourceControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultSourceControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // library_origin - computed: true, optional: false, required: false
  private _libraryOrigin = new LibraryResultSourceControlLibraryOriginOutputReference(this, "library_origin");
  public get libraryOrigin() {
    return this._libraryOrigin;
  }

  // use_workspace_settings - computed: true, optional: false, required: false
  public get useWorkspaceSettings() {
    return this.getBooleanAttribute('use_workspace_settings');
  }
}
export interface LibraryResultUsedByBundles {
}

export function libraryResultUsedByBundlesToTerraform(struct?: LibraryResultUsedByBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultUsedByBundlesToHclTerraform(struct?: LibraryResultUsedByBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultUsedByBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LibraryResultUsedByBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultUsedByBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class LibraryResultUsedByBundlesList extends cdktf.ComplexList {

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
  public get(index: number): LibraryResultUsedByBundlesOutputReference {
    return new LibraryResultUsedByBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LibraryResultUsedBy {
}

export function libraryResultUsedByToTerraform(struct?: LibraryResultUsedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultUsedByToHclTerraform(struct?: LibraryResultUsedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultUsedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LibraryResultUsedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResultUsedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundles - computed: true, optional: false, required: false
  private _bundles = new LibraryResultUsedByBundlesList(this, "bundles", false);
  public get bundles() {
    return this._bundles;
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
}

export class LibraryResultUsedByList extends cdktf.ComplexList {

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
  public get(index: number): LibraryResultUsedByOutputReference {
    return new LibraryResultUsedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LibraryResult {
}

export function libraryResultToTerraform(struct?: LibraryResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function libraryResultToHclTerraform(struct?: LibraryResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LibraryResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibraryResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datasources - computed: true, optional: false, required: false
  private _datasources = new LibraryResultDatasourcesList(this, "datasources", false);
  public get datasources() {
    return this._datasources;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new LibraryResultMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new LibraryResultPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_control - computed: true, optional: false, required: false
  private _sourceControl = new LibraryResultSourceControlOutputReference(this, "source_control");
  public get sourceControl() {
    return this._sourceControl;
  }

  // used_by - computed: true, optional: false, required: false
  private _usedBy = new LibraryResultUsedByList(this, "used_by", false);
  public get usedBy() {
    return this._usedBy;
  }
}
export interface LibrarySourceControlLibraryOriginSshCredentials {
  /**
  * Passphrase is looked under the key passphrase/<pass>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#passphrase Library#passphrase}
  */
  readonly passphrase: string;
  /**
  * PrivateKey is looked under the key private-key/<key>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#private_key Library#private_key}
  */
  readonly privateKey: string;
}

export function librarySourceControlLibraryOriginSshCredentialsToTerraform(struct?: LibrarySourceControlLibraryOriginSshCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function librarySourceControlLibraryOriginSshCredentialsToHclTerraform(struct?: LibrarySourceControlLibraryOriginSshCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LibrarySourceControlLibraryOriginSshCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibrarySourceControlLibraryOriginSshCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibrarySourceControlLibraryOriginSshCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passphrase = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passphrase = value.passphrase;
      this._privateKey = value.privateKey;
    }
  }

  // passphrase - computed: false, optional: false, required: true
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface LibrarySourceControlLibraryOrigin {
  /**
  * Commit SHA. Only one of reference or commit can be set at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#commit Library#commit}
  */
  readonly commit: string;
  /**
  * Credentials are looked under the key <name>/<creds>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#credentials Library#credentials}
  */
  readonly credentials: string;
  /**
  * Path to limit the import to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#path Library#path}
  */
  readonly path: string;
  /**
  * Remote reference. Only one of reference or commit can be set at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#reference Library#reference}
  */
  readonly reference: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#ssh_credentials Library#ssh_credentials}
  */
  readonly sshCredentials?: LibrarySourceControlLibraryOriginSshCredentials;
  /**
  * Repository URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#url Library#url}
  */
  readonly url: string;
}

export function librarySourceControlLibraryOriginToTerraform(struct?: LibrarySourceControlLibraryOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit: cdktf.stringToTerraform(struct!.commit),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    path: cdktf.stringToTerraform(struct!.path),
    reference: cdktf.stringToTerraform(struct!.reference),
    ssh_credentials: librarySourceControlLibraryOriginSshCredentialsToTerraform(struct!.sshCredentials),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function librarySourceControlLibraryOriginToHclTerraform(struct?: LibrarySourceControlLibraryOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
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
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_credentials: {
      value: librarySourceControlLibraryOriginSshCredentialsToHclTerraform(struct!.sshCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "LibrarySourceControlLibraryOriginSshCredentials",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LibrarySourceControlLibraryOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibrarySourceControlLibraryOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    if (this._sshCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshCredentials = this._sshCredentials?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibrarySourceControlLibraryOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commit = undefined;
      this._credentials = undefined;
      this._path = undefined;
      this._reference = undefined;
      this._sshCredentials.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commit = value.commit;
      this._credentials = value.credentials;
      this._path = value.path;
      this._reference = value.reference;
      this._sshCredentials.internalValue = value.sshCredentials;
      this._url = value.url;
    }
  }

  // commit - computed: false, optional: false, required: true
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }

  // ssh_credentials - computed: false, optional: true, required: false
  private _sshCredentials = new LibrarySourceControlLibraryOriginSshCredentialsOutputReference(this, "ssh_credentials");
  public get sshCredentials() {
    return this._sshCredentials;
  }
  public putSshCredentials(value: LibrarySourceControlLibraryOriginSshCredentials) {
    this._sshCredentials.internalValue = value;
  }
  public resetSshCredentials() {
    this._sshCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCredentialsInput() {
    return this._sshCredentials.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface LibrarySourceControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#library_origin Library#library_origin}
  */
  readonly libraryOrigin?: LibrarySourceControlLibraryOrigin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#use_workspace_settings Library#use_workspace_settings}
  */
  readonly useWorkspaceSettings: boolean | cdktf.IResolvable;
}

export function librarySourceControlToTerraform(struct?: LibrarySourceControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    library_origin: librarySourceControlLibraryOriginToTerraform(struct!.libraryOrigin),
    use_workspace_settings: cdktf.booleanToTerraform(struct!.useWorkspaceSettings),
  }
}


export function librarySourceControlToHclTerraform(struct?: LibrarySourceControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    library_origin: {
      value: librarySourceControlLibraryOriginToHclTerraform(struct!.libraryOrigin),
      isBlock: true,
      type: "struct",
      storageClassType: "LibrarySourceControlLibraryOrigin",
    },
    use_workspace_settings: {
      value: cdktf.booleanToHclTerraform(struct!.useWorkspaceSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LibrarySourceControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LibrarySourceControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libraryOrigin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryOrigin = this._libraryOrigin?.internalValue;
    }
    if (this._useWorkspaceSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWorkspaceSettings = this._useWorkspaceSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibrarySourceControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._libraryOrigin.internalValue = undefined;
      this._useWorkspaceSettings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._libraryOrigin.internalValue = value.libraryOrigin;
      this._useWorkspaceSettings = value.useWorkspaceSettings;
    }
  }

  // library_origin - computed: false, optional: true, required: false
  private _libraryOrigin = new LibrarySourceControlLibraryOriginOutputReference(this, "library_origin");
  public get libraryOrigin() {
    return this._libraryOrigin;
  }
  public putLibraryOrigin(value: LibrarySourceControlLibraryOrigin) {
    this._libraryOrigin.internalValue = value;
  }
  public resetLibraryOrigin() {
    this._libraryOrigin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryOriginInput() {
    return this._libraryOrigin.internalValue;
  }

  // use_workspace_settings - computed: false, optional: false, required: true
  private _useWorkspaceSettings?: boolean | cdktf.IResolvable; 
  public get useWorkspaceSettings() {
    return this.getBooleanAttribute('use_workspace_settings');
  }
  public set useWorkspaceSettings(value: boolean | cdktf.IResolvable) {
    this._useWorkspaceSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useWorkspaceSettingsInput() {
    return this._useWorkspaceSettings;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library styra_library}
*/
export class Library extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "styra_library";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Library resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Library to import
  * @param importFromId The id of the existing Library that should be imported. Refer to the {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Library to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "styra_library", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/resources/library styra_library} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LibraryConfig
  */
  public constructor(scope: Construct, id: string, config: LibraryConfig) {
    super(scope, id, {
      terraformResourceType: 'styra_library',
      terraformGeneratorMetadata: {
        providerName: 'styra',
        providerVersion: '0.2.3'
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
    this._id = config.id;
    this._readOnly = config.readOnly;
    this._sourceControl.internalValue = config.sourceControl;
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

  // read_only - computed: false, optional: false, required: true
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // result - computed: true, optional: false, required: false
  private _result = new LibraryResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }

  // source_control - computed: false, optional: true, required: false
  private _sourceControl = new LibrarySourceControlOutputReference(this, "source_control");
  public get sourceControl() {
    return this._sourceControl;
  }
  public putSourceControl(value: LibrarySourceControl) {
    this._sourceControl.internalValue = value;
  }
  public resetSourceControl() {
    this._sourceControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlInput() {
    return this._sourceControl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      source_control: librarySourceControlToTerraform(this._sourceControl.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_control: {
        value: librarySourceControlToHclTerraform(this._sourceControl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LibrarySourceControl",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
