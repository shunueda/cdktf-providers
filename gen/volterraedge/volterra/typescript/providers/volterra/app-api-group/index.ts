// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppApiGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#annotations AppApiGroup#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#description AppApiGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#disable AppApiGroup#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#generic AppApiGroup#generic}
  */
  readonly generic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#id AppApiGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#labels AppApiGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#name AppApiGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#namespace AppApiGroup#namespace}
  */
  readonly namespace: string;
  /**
  * api_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#api_definition AppApiGroup#api_definition}
  */
  readonly apiDefinition?: AppApiGroupApiDefinition;
  /**
  * api_group_builder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#api_group_builder AppApiGroup#api_group_builder}
  */
  readonly apiGroupBuilder?: AppApiGroupApiGroupBuilder;
  /**
  * bigip_virtual_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#bigip_virtual_server AppApiGroup#bigip_virtual_server}
  */
  readonly bigipVirtualServer?: AppApiGroupBigipVirtualServer;
  /**
  * cdn_loadbalancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#cdn_loadbalancer AppApiGroup#cdn_loadbalancer}
  */
  readonly cdnLoadbalancer?: AppApiGroupCdnLoadbalancer;
  /**
  * elements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#elements AppApiGroup#elements}
  */
  readonly elements: AppApiGroupElements[] | cdktf.IResolvable;
  /**
  * http_loadbalancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#http_loadbalancer AppApiGroup#http_loadbalancer}
  */
  readonly httpLoadbalancer?: AppApiGroupHttpLoadbalancer;
}
export interface AppApiGroupApiDefinitionApiDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#name AppApiGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#namespace AppApiGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#tenant AppApiGroup#tenant}
  */
  readonly tenant?: string;
}

export function appApiGroupApiDefinitionApiDefinitionToTerraform(struct?: AppApiGroupApiDefinitionApiDefinitionOutputReference | AppApiGroupApiDefinitionApiDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function appApiGroupApiDefinitionApiDefinitionToHclTerraform(struct?: AppApiGroupApiDefinitionApiDefinitionOutputReference | AppApiGroupApiDefinitionApiDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupApiDefinitionApiDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupApiDefinitionApiDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupApiDefinitionApiDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AppApiGroupApiDefinition {
  /**
  * api_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#api_definition AppApiGroup#api_definition}
  */
  readonly apiDefinition: AppApiGroupApiDefinitionApiDefinition;
}

export function appApiGroupApiDefinitionToTerraform(struct?: AppApiGroupApiDefinitionOutputReference | AppApiGroupApiDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_definition: appApiGroupApiDefinitionApiDefinitionToTerraform(struct!.apiDefinition),
  }
}


export function appApiGroupApiDefinitionToHclTerraform(struct?: AppApiGroupApiDefinitionOutputReference | AppApiGroupApiDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_definition: {
      value: appApiGroupApiDefinitionApiDefinitionToHclTerraform(struct!.apiDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "AppApiGroupApiDefinitionApiDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupApiDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupApiDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDefinition = this._apiDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupApiDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDefinition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDefinition.internalValue = value.apiDefinition;
    }
  }

  // api_definition - computed: false, optional: false, required: true
  private _apiDefinition = new AppApiGroupApiDefinitionApiDefinitionOutputReference(this, "api_definition");
  public get apiDefinition() {
    return this._apiDefinition;
  }
  public putApiDefinition(value: AppApiGroupApiDefinitionApiDefinition) {
    this._apiDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDefinitionInput() {
    return this._apiDefinition.internalValue;
  }
}
export interface AppApiGroupApiGroupBuilderExcludedOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#method AppApiGroup#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#path AppApiGroup#path}
  */
  readonly path: string;
}

export function appApiGroupApiGroupBuilderExcludedOperationsToTerraform(struct?: AppApiGroupApiGroupBuilderExcludedOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function appApiGroupApiGroupBuilderExcludedOperationsToHclTerraform(struct?: AppApiGroupApiGroupBuilderExcludedOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupApiGroupBuilderExcludedOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppApiGroupApiGroupBuilderExcludedOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupApiGroupBuilderExcludedOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._path = value.path;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

export class AppApiGroupApiGroupBuilderExcludedOperationsList extends cdktf.ComplexList {
  public internalValue? : AppApiGroupApiGroupBuilderExcludedOperations[] | cdktf.IResolvable

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
  public get(index: number): AppApiGroupApiGroupBuilderExcludedOperationsOutputReference {
    return new AppApiGroupApiGroupBuilderExcludedOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppApiGroupApiGroupBuilderIncludedOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#method AppApiGroup#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#path AppApiGroup#path}
  */
  readonly path: string;
}

export function appApiGroupApiGroupBuilderIncludedOperationsToTerraform(struct?: AppApiGroupApiGroupBuilderIncludedOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function appApiGroupApiGroupBuilderIncludedOperationsToHclTerraform(struct?: AppApiGroupApiGroupBuilderIncludedOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupApiGroupBuilderIncludedOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppApiGroupApiGroupBuilderIncludedOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupApiGroupBuilderIncludedOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._path = value.path;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

export class AppApiGroupApiGroupBuilderIncludedOperationsList extends cdktf.ComplexList {
  public internalValue? : AppApiGroupApiGroupBuilderIncludedOperations[] | cdktf.IResolvable

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
  public get(index: number): AppApiGroupApiGroupBuilderIncludedOperationsOutputReference {
    return new AppApiGroupApiGroupBuilderIncludedOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppApiGroupApiGroupBuilderLabelFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#expressions AppApiGroup#expressions}
  */
  readonly expressions: string[];
}

export function appApiGroupApiGroupBuilderLabelFilterToTerraform(struct?: AppApiGroupApiGroupBuilderLabelFilterOutputReference | AppApiGroupApiGroupBuilderLabelFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function appApiGroupApiGroupBuilderLabelFilterToHclTerraform(struct?: AppApiGroupApiGroupBuilderLabelFilterOutputReference | AppApiGroupApiGroupBuilderLabelFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupApiGroupBuilderLabelFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupApiGroupBuilderLabelFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupApiGroupBuilderLabelFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface AppApiGroupApiGroupBuilderMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#description AppApiGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#disable AppApiGroup#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#name AppApiGroup#name}
  */
  readonly name: string;
}

export function appApiGroupApiGroupBuilderMetadataToTerraform(struct?: AppApiGroupApiGroupBuilderMetadataOutputReference | AppApiGroupApiGroupBuilderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function appApiGroupApiGroupBuilderMetadataToHclTerraform(struct?: AppApiGroupApiGroupBuilderMetadataOutputReference | AppApiGroupApiGroupBuilderMetadata): any {
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
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupApiGroupBuilderMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupApiGroupBuilderMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupApiGroupBuilderMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface AppApiGroupApiGroupBuilder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#path_filter AppApiGroup#path_filter}
  */
  readonly pathFilter?: string;
  /**
  * excluded_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#excluded_operations AppApiGroup#excluded_operations}
  */
  readonly excludedOperations?: AppApiGroupApiGroupBuilderExcludedOperations[] | cdktf.IResolvable;
  /**
  * included_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#included_operations AppApiGroup#included_operations}
  */
  readonly includedOperations?: AppApiGroupApiGroupBuilderIncludedOperations[] | cdktf.IResolvable;
  /**
  * label_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#label_filter AppApiGroup#label_filter}
  */
  readonly labelFilter?: AppApiGroupApiGroupBuilderLabelFilter;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#metadata AppApiGroup#metadata}
  */
  readonly metadata?: AppApiGroupApiGroupBuilderMetadata;
}

export function appApiGroupApiGroupBuilderToTerraform(struct?: AppApiGroupApiGroupBuilderOutputReference | AppApiGroupApiGroupBuilder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_filter: cdktf.stringToTerraform(struct!.pathFilter),
    excluded_operations: cdktf.listMapper(appApiGroupApiGroupBuilderExcludedOperationsToTerraform, true)(struct!.excludedOperations),
    included_operations: cdktf.listMapper(appApiGroupApiGroupBuilderIncludedOperationsToTerraform, true)(struct!.includedOperations),
    label_filter: appApiGroupApiGroupBuilderLabelFilterToTerraform(struct!.labelFilter),
    metadata: appApiGroupApiGroupBuilderMetadataToTerraform(struct!.metadata),
  }
}


export function appApiGroupApiGroupBuilderToHclTerraform(struct?: AppApiGroupApiGroupBuilderOutputReference | AppApiGroupApiGroupBuilder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_filter: {
      value: cdktf.stringToHclTerraform(struct!.pathFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_operations: {
      value: cdktf.listMapperHcl(appApiGroupApiGroupBuilderExcludedOperationsToHclTerraform, true)(struct!.excludedOperations),
      isBlock: true,
      type: "list",
      storageClassType: "AppApiGroupApiGroupBuilderExcludedOperationsList",
    },
    included_operations: {
      value: cdktf.listMapperHcl(appApiGroupApiGroupBuilderIncludedOperationsToHclTerraform, true)(struct!.includedOperations),
      isBlock: true,
      type: "list",
      storageClassType: "AppApiGroupApiGroupBuilderIncludedOperationsList",
    },
    label_filter: {
      value: appApiGroupApiGroupBuilderLabelFilterToHclTerraform(struct!.labelFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AppApiGroupApiGroupBuilderLabelFilterList",
    },
    metadata: {
      value: appApiGroupApiGroupBuilderMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AppApiGroupApiGroupBuilderMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupApiGroupBuilderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupApiGroupBuilder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathFilter = this._pathFilter;
    }
    if (this._excludedOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedOperations = this._excludedOperations?.internalValue;
    }
    if (this._includedOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedOperations = this._includedOperations?.internalValue;
    }
    if (this._labelFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilter = this._labelFilter?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupApiGroupBuilder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pathFilter = undefined;
      this._excludedOperations.internalValue = undefined;
      this._includedOperations.internalValue = undefined;
      this._labelFilter.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pathFilter = value.pathFilter;
      this._excludedOperations.internalValue = value.excludedOperations;
      this._includedOperations.internalValue = value.includedOperations;
      this._labelFilter.internalValue = value.labelFilter;
      this._metadata.internalValue = value.metadata;
    }
  }

  // path_filter - computed: false, optional: true, required: false
  private _pathFilter?: string; 
  public get pathFilter() {
    return this.getStringAttribute('path_filter');
  }
  public set pathFilter(value: string) {
    this._pathFilter = value;
  }
  public resetPathFilter() {
    this._pathFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathFilterInput() {
    return this._pathFilter;
  }

  // excluded_operations - computed: false, optional: true, required: false
  private _excludedOperations = new AppApiGroupApiGroupBuilderExcludedOperationsList(this, "excluded_operations", false);
  public get excludedOperations() {
    return this._excludedOperations;
  }
  public putExcludedOperations(value: AppApiGroupApiGroupBuilderExcludedOperations[] | cdktf.IResolvable) {
    this._excludedOperations.internalValue = value;
  }
  public resetExcludedOperations() {
    this._excludedOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedOperationsInput() {
    return this._excludedOperations.internalValue;
  }

  // included_operations - computed: false, optional: true, required: false
  private _includedOperations = new AppApiGroupApiGroupBuilderIncludedOperationsList(this, "included_operations", false);
  public get includedOperations() {
    return this._includedOperations;
  }
  public putIncludedOperations(value: AppApiGroupApiGroupBuilderIncludedOperations[] | cdktf.IResolvable) {
    this._includedOperations.internalValue = value;
  }
  public resetIncludedOperations() {
    this._includedOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedOperationsInput() {
    return this._includedOperations.internalValue;
  }

  // label_filter - computed: false, optional: true, required: false
  private _labelFilter = new AppApiGroupApiGroupBuilderLabelFilterOutputReference(this, "label_filter");
  public get labelFilter() {
    return this._labelFilter;
  }
  public putLabelFilter(value: AppApiGroupApiGroupBuilderLabelFilter) {
    this._labelFilter.internalValue = value;
  }
  public resetLabelFilter() {
    this._labelFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFilterInput() {
    return this._labelFilter.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AppApiGroupApiGroupBuilderMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppApiGroupApiGroupBuilderMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface AppApiGroupBigipVirtualServerBigipVirtualServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#name AppApiGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#namespace AppApiGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#tenant AppApiGroup#tenant}
  */
  readonly tenant?: string;
}

export function appApiGroupBigipVirtualServerBigipVirtualServerToTerraform(struct?: AppApiGroupBigipVirtualServerBigipVirtualServerOutputReference | AppApiGroupBigipVirtualServerBigipVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function appApiGroupBigipVirtualServerBigipVirtualServerToHclTerraform(struct?: AppApiGroupBigipVirtualServerBigipVirtualServerOutputReference | AppApiGroupBigipVirtualServerBigipVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupBigipVirtualServerBigipVirtualServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupBigipVirtualServerBigipVirtualServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupBigipVirtualServerBigipVirtualServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AppApiGroupBigipVirtualServer {
  /**
  * bigip_virtual_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#bigip_virtual_server AppApiGroup#bigip_virtual_server}
  */
  readonly bigipVirtualServer: AppApiGroupBigipVirtualServerBigipVirtualServer;
}

export function appApiGroupBigipVirtualServerToTerraform(struct?: AppApiGroupBigipVirtualServerOutputReference | AppApiGroupBigipVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigip_virtual_server: appApiGroupBigipVirtualServerBigipVirtualServerToTerraform(struct!.bigipVirtualServer),
  }
}


export function appApiGroupBigipVirtualServerToHclTerraform(struct?: AppApiGroupBigipVirtualServerOutputReference | AppApiGroupBigipVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigip_virtual_server: {
      value: appApiGroupBigipVirtualServerBigipVirtualServerToHclTerraform(struct!.bigipVirtualServer),
      isBlock: true,
      type: "list",
      storageClassType: "AppApiGroupBigipVirtualServerBigipVirtualServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupBigipVirtualServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupBigipVirtualServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigipVirtualServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigipVirtualServer = this._bigipVirtualServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupBigipVirtualServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigipVirtualServer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigipVirtualServer.internalValue = value.bigipVirtualServer;
    }
  }

  // bigip_virtual_server - computed: false, optional: false, required: true
  private _bigipVirtualServer = new AppApiGroupBigipVirtualServerBigipVirtualServerOutputReference(this, "bigip_virtual_server");
  public get bigipVirtualServer() {
    return this._bigipVirtualServer;
  }
  public putBigipVirtualServer(value: AppApiGroupBigipVirtualServerBigipVirtualServer) {
    this._bigipVirtualServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigipVirtualServerInput() {
    return this._bigipVirtualServer.internalValue;
  }
}
export interface AppApiGroupCdnLoadbalancerCdnLoadbalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#name AppApiGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#namespace AppApiGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#tenant AppApiGroup#tenant}
  */
  readonly tenant?: string;
}

export function appApiGroupCdnLoadbalancerCdnLoadbalancerToTerraform(struct?: AppApiGroupCdnLoadbalancerCdnLoadbalancerOutputReference | AppApiGroupCdnLoadbalancerCdnLoadbalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function appApiGroupCdnLoadbalancerCdnLoadbalancerToHclTerraform(struct?: AppApiGroupCdnLoadbalancerCdnLoadbalancerOutputReference | AppApiGroupCdnLoadbalancerCdnLoadbalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupCdnLoadbalancerCdnLoadbalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupCdnLoadbalancerCdnLoadbalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupCdnLoadbalancerCdnLoadbalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AppApiGroupCdnLoadbalancer {
  /**
  * cdn_loadbalancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#cdn_loadbalancer AppApiGroup#cdn_loadbalancer}
  */
  readonly cdnLoadbalancer: AppApiGroupCdnLoadbalancerCdnLoadbalancer;
}

export function appApiGroupCdnLoadbalancerToTerraform(struct?: AppApiGroupCdnLoadbalancerOutputReference | AppApiGroupCdnLoadbalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdn_loadbalancer: appApiGroupCdnLoadbalancerCdnLoadbalancerToTerraform(struct!.cdnLoadbalancer),
  }
}


export function appApiGroupCdnLoadbalancerToHclTerraform(struct?: AppApiGroupCdnLoadbalancerOutputReference | AppApiGroupCdnLoadbalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdn_loadbalancer: {
      value: appApiGroupCdnLoadbalancerCdnLoadbalancerToHclTerraform(struct!.cdnLoadbalancer),
      isBlock: true,
      type: "list",
      storageClassType: "AppApiGroupCdnLoadbalancerCdnLoadbalancerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupCdnLoadbalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupCdnLoadbalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdnLoadbalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnLoadbalancer = this._cdnLoadbalancer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupCdnLoadbalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdnLoadbalancer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdnLoadbalancer.internalValue = value.cdnLoadbalancer;
    }
  }

  // cdn_loadbalancer - computed: false, optional: false, required: true
  private _cdnLoadbalancer = new AppApiGroupCdnLoadbalancerCdnLoadbalancerOutputReference(this, "cdn_loadbalancer");
  public get cdnLoadbalancer() {
    return this._cdnLoadbalancer;
  }
  public putCdnLoadbalancer(value: AppApiGroupCdnLoadbalancerCdnLoadbalancer) {
    this._cdnLoadbalancer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnLoadbalancerInput() {
    return this._cdnLoadbalancer.internalValue;
  }
}
export interface AppApiGroupElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#methods AppApiGroup#methods}
  */
  readonly methods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#path_regex AppApiGroup#path_regex}
  */
  readonly pathRegex: string;
}

export function appApiGroupElementsToTerraform(struct?: AppApiGroupElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path_regex: cdktf.stringToTerraform(struct!.pathRegex),
  }
}


export function appApiGroupElementsToHclTerraform(struct?: AppApiGroupElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_regex: {
      value: cdktf.stringToHclTerraform(struct!.pathRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppApiGroupElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._pathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegex = this._pathRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._pathRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._pathRegex = value.pathRegex;
    }
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path_regex - computed: false, optional: false, required: true
  private _pathRegex?: string; 
  public get pathRegex() {
    return this.getStringAttribute('path_regex');
  }
  public set pathRegex(value: string) {
    this._pathRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexInput() {
    return this._pathRegex;
  }
}

export class AppApiGroupElementsList extends cdktf.ComplexList {
  public internalValue? : AppApiGroupElements[] | cdktf.IResolvable

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
  public get(index: number): AppApiGroupElementsOutputReference {
    return new AppApiGroupElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppApiGroupHttpLoadbalancerHttpLoadbalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#name AppApiGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#namespace AppApiGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#tenant AppApiGroup#tenant}
  */
  readonly tenant?: string;
}

export function appApiGroupHttpLoadbalancerHttpLoadbalancerToTerraform(struct?: AppApiGroupHttpLoadbalancerHttpLoadbalancerOutputReference | AppApiGroupHttpLoadbalancerHttpLoadbalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function appApiGroupHttpLoadbalancerHttpLoadbalancerToHclTerraform(struct?: AppApiGroupHttpLoadbalancerHttpLoadbalancerOutputReference | AppApiGroupHttpLoadbalancerHttpLoadbalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupHttpLoadbalancerHttpLoadbalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupHttpLoadbalancerHttpLoadbalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupHttpLoadbalancerHttpLoadbalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AppApiGroupHttpLoadbalancer {
  /**
  * http_loadbalancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#http_loadbalancer AppApiGroup#http_loadbalancer}
  */
  readonly httpLoadbalancer: AppApiGroupHttpLoadbalancerHttpLoadbalancer;
}

export function appApiGroupHttpLoadbalancerToTerraform(struct?: AppApiGroupHttpLoadbalancerOutputReference | AppApiGroupHttpLoadbalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_loadbalancer: appApiGroupHttpLoadbalancerHttpLoadbalancerToTerraform(struct!.httpLoadbalancer),
  }
}


export function appApiGroupHttpLoadbalancerToHclTerraform(struct?: AppApiGroupHttpLoadbalancerOutputReference | AppApiGroupHttpLoadbalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_loadbalancer: {
      value: appApiGroupHttpLoadbalancerHttpLoadbalancerToHclTerraform(struct!.httpLoadbalancer),
      isBlock: true,
      type: "list",
      storageClassType: "AppApiGroupHttpLoadbalancerHttpLoadbalancerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppApiGroupHttpLoadbalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppApiGroupHttpLoadbalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpLoadbalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLoadbalancer = this._httpLoadbalancer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppApiGroupHttpLoadbalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpLoadbalancer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpLoadbalancer.internalValue = value.httpLoadbalancer;
    }
  }

  // http_loadbalancer - computed: false, optional: false, required: true
  private _httpLoadbalancer = new AppApiGroupHttpLoadbalancerHttpLoadbalancerOutputReference(this, "http_loadbalancer");
  public get httpLoadbalancer() {
    return this._httpLoadbalancer;
  }
  public putHttpLoadbalancer(value: AppApiGroupHttpLoadbalancerHttpLoadbalancer) {
    this._httpLoadbalancer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLoadbalancerInput() {
    return this._httpLoadbalancer.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group volterra_app_api_group}
*/
export class AppApiGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_app_api_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppApiGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppApiGroup to import
  * @param importFromId The id of the existing AppApiGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppApiGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_app_api_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/app_api_group volterra_app_api_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppApiGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AppApiGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_app_api_group',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
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
    this._description = config.description;
    this._disable = config.disable;
    this._generic = config.generic;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._apiDefinition.internalValue = config.apiDefinition;
    this._apiGroupBuilder.internalValue = config.apiGroupBuilder;
    this._bigipVirtualServer.internalValue = config.bigipVirtualServer;
    this._cdnLoadbalancer.internalValue = config.cdnLoadbalancer;
    this._elements.internalValue = config.elements;
    this._httpLoadbalancer.internalValue = config.httpLoadbalancer;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // generic - computed: false, optional: true, required: false
  private _generic?: boolean | cdktf.IResolvable; 
  public get generic() {
    return this.getBooleanAttribute('generic');
  }
  public set generic(value: boolean | cdktf.IResolvable) {
    this._generic = value;
  }
  public resetGeneric() {
    this._generic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericInput() {
    return this._generic;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // api_definition - computed: false, optional: true, required: false
  private _apiDefinition = new AppApiGroupApiDefinitionOutputReference(this, "api_definition");
  public get apiDefinition() {
    return this._apiDefinition;
  }
  public putApiDefinition(value: AppApiGroupApiDefinition) {
    this._apiDefinition.internalValue = value;
  }
  public resetApiDefinition() {
    this._apiDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDefinitionInput() {
    return this._apiDefinition.internalValue;
  }

  // api_group_builder - computed: false, optional: true, required: false
  private _apiGroupBuilder = new AppApiGroupApiGroupBuilderOutputReference(this, "api_group_builder");
  public get apiGroupBuilder() {
    return this._apiGroupBuilder;
  }
  public putApiGroupBuilder(value: AppApiGroupApiGroupBuilder) {
    this._apiGroupBuilder.internalValue = value;
  }
  public resetApiGroupBuilder() {
    this._apiGroupBuilder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupBuilderInput() {
    return this._apiGroupBuilder.internalValue;
  }

  // bigip_virtual_server - computed: false, optional: true, required: false
  private _bigipVirtualServer = new AppApiGroupBigipVirtualServerOutputReference(this, "bigip_virtual_server");
  public get bigipVirtualServer() {
    return this._bigipVirtualServer;
  }
  public putBigipVirtualServer(value: AppApiGroupBigipVirtualServer) {
    this._bigipVirtualServer.internalValue = value;
  }
  public resetBigipVirtualServer() {
    this._bigipVirtualServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigipVirtualServerInput() {
    return this._bigipVirtualServer.internalValue;
  }

  // cdn_loadbalancer - computed: false, optional: true, required: false
  private _cdnLoadbalancer = new AppApiGroupCdnLoadbalancerOutputReference(this, "cdn_loadbalancer");
  public get cdnLoadbalancer() {
    return this._cdnLoadbalancer;
  }
  public putCdnLoadbalancer(value: AppApiGroupCdnLoadbalancer) {
    this._cdnLoadbalancer.internalValue = value;
  }
  public resetCdnLoadbalancer() {
    this._cdnLoadbalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnLoadbalancerInput() {
    return this._cdnLoadbalancer.internalValue;
  }

  // elements - computed: false, optional: false, required: true
  private _elements = new AppApiGroupElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: AppApiGroupElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }

  // http_loadbalancer - computed: false, optional: true, required: false
  private _httpLoadbalancer = new AppApiGroupHttpLoadbalancerOutputReference(this, "http_loadbalancer");
  public get httpLoadbalancer() {
    return this._httpLoadbalancer;
  }
  public putHttpLoadbalancer(value: AppApiGroupHttpLoadbalancer) {
    this._httpLoadbalancer.internalValue = value;
  }
  public resetHttpLoadbalancer() {
    this._httpLoadbalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLoadbalancerInput() {
    return this._httpLoadbalancer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      generic: cdktf.booleanToTerraform(this._generic),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      api_definition: appApiGroupApiDefinitionToTerraform(this._apiDefinition.internalValue),
      api_group_builder: appApiGroupApiGroupBuilderToTerraform(this._apiGroupBuilder.internalValue),
      bigip_virtual_server: appApiGroupBigipVirtualServerToTerraform(this._bigipVirtualServer.internalValue),
      cdn_loadbalancer: appApiGroupCdnLoadbalancerToTerraform(this._cdnLoadbalancer.internalValue),
      elements: cdktf.listMapper(appApiGroupElementsToTerraform, true)(this._elements.internalValue),
      http_loadbalancer: appApiGroupHttpLoadbalancerToTerraform(this._httpLoadbalancer.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      generic: {
        value: cdktf.booleanToHclTerraform(this._generic),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_definition: {
        value: appApiGroupApiDefinitionToHclTerraform(this._apiDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppApiGroupApiDefinitionList",
      },
      api_group_builder: {
        value: appApiGroupApiGroupBuilderToHclTerraform(this._apiGroupBuilder.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppApiGroupApiGroupBuilderList",
      },
      bigip_virtual_server: {
        value: appApiGroupBigipVirtualServerToHclTerraform(this._bigipVirtualServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppApiGroupBigipVirtualServerList",
      },
      cdn_loadbalancer: {
        value: appApiGroupCdnLoadbalancerToHclTerraform(this._cdnLoadbalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppApiGroupCdnLoadbalancerList",
      },
      elements: {
        value: cdktf.listMapperHcl(appApiGroupElementsToHclTerraform, true)(this._elements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppApiGroupElementsList",
      },
      http_loadbalancer: {
        value: appApiGroupHttpLoadbalancerToHclTerraform(this._httpLoadbalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppApiGroupHttpLoadbalancerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
