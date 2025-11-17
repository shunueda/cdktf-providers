// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/trino_access_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexTrinoAccessControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Trino cluster. Provided by the client when the Access Control is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/trino_access_control#cluster_id DataYandexTrinoAccessControl#cluster_id}
  */
  readonly clusterId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/trino_access_control#timeouts DataYandexTrinoAccessControl#timeouts}
  */
  readonly timeouts?: DataYandexTrinoAccessControlTimeouts;
}
export interface DataYandexTrinoAccessControlCatalogSessionPropertiesCatalog {
}

export function dataYandexTrinoAccessControlCatalogSessionPropertiesCatalogToTerraform(struct?: DataYandexTrinoAccessControlCatalogSessionPropertiesCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlCatalogSessionPropertiesCatalogToHclTerraform(struct?: DataYandexTrinoAccessControlCatalogSessionPropertiesCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlCatalogSessionPropertiesCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlCatalogSessionPropertiesCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlCatalogSessionPropertiesCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
}
export interface DataYandexTrinoAccessControlCatalogSessionPropertiesProperty {
}

export function dataYandexTrinoAccessControlCatalogSessionPropertiesPropertyToTerraform(struct?: DataYandexTrinoAccessControlCatalogSessionPropertiesProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlCatalogSessionPropertiesPropertyToHclTerraform(struct?: DataYandexTrinoAccessControlCatalogSessionPropertiesProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlCatalogSessionPropertiesPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlCatalogSessionPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlCatalogSessionPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}
export interface DataYandexTrinoAccessControlCatalogSessionProperties {
}

export function dataYandexTrinoAccessControlCatalogSessionPropertiesToTerraform(struct?: DataYandexTrinoAccessControlCatalogSessionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlCatalogSessionPropertiesToHclTerraform(struct?: DataYandexTrinoAccessControlCatalogSessionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlCatalogSessionPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexTrinoAccessControlCatalogSessionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlCatalogSessionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getStringAttribute('allow');
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataYandexTrinoAccessControlCatalogSessionPropertiesCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // property - computed: true, optional: false, required: false
  private _property = new DataYandexTrinoAccessControlCatalogSessionPropertiesPropertyOutputReference(this, "property");
  public get property() {
    return this._property;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataYandexTrinoAccessControlCatalogSessionPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexTrinoAccessControlCatalogSessionPropertiesOutputReference {
    return new DataYandexTrinoAccessControlCatalogSessionPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexTrinoAccessControlCatalogsCatalog {
}

export function dataYandexTrinoAccessControlCatalogsCatalogToTerraform(struct?: DataYandexTrinoAccessControlCatalogsCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlCatalogsCatalogToHclTerraform(struct?: DataYandexTrinoAccessControlCatalogsCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlCatalogsCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlCatalogsCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlCatalogsCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
}
export interface DataYandexTrinoAccessControlCatalogs {
}

export function dataYandexTrinoAccessControlCatalogsToTerraform(struct?: DataYandexTrinoAccessControlCatalogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlCatalogsToHclTerraform(struct?: DataYandexTrinoAccessControlCatalogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlCatalogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexTrinoAccessControlCatalogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlCatalogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataYandexTrinoAccessControlCatalogsCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataYandexTrinoAccessControlCatalogsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexTrinoAccessControlCatalogsOutputReference {
    return new DataYandexTrinoAccessControlCatalogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexTrinoAccessControlFunctionsCatalog {
}

export function dataYandexTrinoAccessControlFunctionsCatalogToTerraform(struct?: DataYandexTrinoAccessControlFunctionsCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlFunctionsCatalogToHclTerraform(struct?: DataYandexTrinoAccessControlFunctionsCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlFunctionsCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlFunctionsCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlFunctionsCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
}
export interface DataYandexTrinoAccessControlFunctionsFunction {
}

export function dataYandexTrinoAccessControlFunctionsFunctionToTerraform(struct?: DataYandexTrinoAccessControlFunctionsFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlFunctionsFunctionToHclTerraform(struct?: DataYandexTrinoAccessControlFunctionsFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlFunctionsFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlFunctionsFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlFunctionsFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}
export interface DataYandexTrinoAccessControlFunctionsSchema {
}

export function dataYandexTrinoAccessControlFunctionsSchemaToTerraform(struct?: DataYandexTrinoAccessControlFunctionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlFunctionsSchemaToHclTerraform(struct?: DataYandexTrinoAccessControlFunctionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlFunctionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlFunctionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlFunctionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}
export interface DataYandexTrinoAccessControlFunctions {
}

export function dataYandexTrinoAccessControlFunctionsToTerraform(struct?: DataYandexTrinoAccessControlFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlFunctionsToHclTerraform(struct?: DataYandexTrinoAccessControlFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexTrinoAccessControlFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataYandexTrinoAccessControlFunctionsCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // function - computed: true, optional: false, required: false
  private _function = new DataYandexTrinoAccessControlFunctionsFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return this.getListAttribute('privileges');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataYandexTrinoAccessControlFunctionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataYandexTrinoAccessControlFunctionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexTrinoAccessControlFunctionsOutputReference {
    return new DataYandexTrinoAccessControlFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexTrinoAccessControlProceduresCatalog {
}

export function dataYandexTrinoAccessControlProceduresCatalogToTerraform(struct?: DataYandexTrinoAccessControlProceduresCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlProceduresCatalogToHclTerraform(struct?: DataYandexTrinoAccessControlProceduresCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlProceduresCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlProceduresCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlProceduresCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
}
export interface DataYandexTrinoAccessControlProceduresProcedure {
}

export function dataYandexTrinoAccessControlProceduresProcedureToTerraform(struct?: DataYandexTrinoAccessControlProceduresProcedure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlProceduresProcedureToHclTerraform(struct?: DataYandexTrinoAccessControlProceduresProcedure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlProceduresProcedureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlProceduresProcedure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlProceduresProcedure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}
export interface DataYandexTrinoAccessControlProceduresSchema {
}

export function dataYandexTrinoAccessControlProceduresSchemaToTerraform(struct?: DataYandexTrinoAccessControlProceduresSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlProceduresSchemaToHclTerraform(struct?: DataYandexTrinoAccessControlProceduresSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlProceduresSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlProceduresSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlProceduresSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}
export interface DataYandexTrinoAccessControlProcedures {
}

export function dataYandexTrinoAccessControlProceduresToTerraform(struct?: DataYandexTrinoAccessControlProcedures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlProceduresToHclTerraform(struct?: DataYandexTrinoAccessControlProcedures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlProceduresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexTrinoAccessControlProcedures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlProcedures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataYandexTrinoAccessControlProceduresCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return this.getListAttribute('privileges');
  }

  // procedure - computed: true, optional: false, required: false
  private _procedure = new DataYandexTrinoAccessControlProceduresProcedureOutputReference(this, "procedure");
  public get procedure() {
    return this._procedure;
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataYandexTrinoAccessControlProceduresSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataYandexTrinoAccessControlProceduresList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexTrinoAccessControlProceduresOutputReference {
    return new DataYandexTrinoAccessControlProceduresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexTrinoAccessControlQueries {
}

export function dataYandexTrinoAccessControlQueriesToTerraform(struct?: DataYandexTrinoAccessControlQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlQueriesToHclTerraform(struct?: DataYandexTrinoAccessControlQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexTrinoAccessControlQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlQueries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return this.getListAttribute('privileges');
  }

  // query_owners - computed: true, optional: false, required: false
  public get queryOwners() {
    return this.getListAttribute('query_owners');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataYandexTrinoAccessControlQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexTrinoAccessControlQueriesOutputReference {
    return new DataYandexTrinoAccessControlQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexTrinoAccessControlSchemasCatalog {
}

export function dataYandexTrinoAccessControlSchemasCatalogToTerraform(struct?: DataYandexTrinoAccessControlSchemasCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlSchemasCatalogToHclTerraform(struct?: DataYandexTrinoAccessControlSchemasCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlSchemasCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlSchemasCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlSchemasCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
}
export interface DataYandexTrinoAccessControlSchemasSchema {
}

export function dataYandexTrinoAccessControlSchemasSchemaToTerraform(struct?: DataYandexTrinoAccessControlSchemasSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlSchemasSchemaToHclTerraform(struct?: DataYandexTrinoAccessControlSchemasSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlSchemasSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlSchemasSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlSchemasSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}
export interface DataYandexTrinoAccessControlSchemas {
}

export function dataYandexTrinoAccessControlSchemasToTerraform(struct?: DataYandexTrinoAccessControlSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlSchemasToHclTerraform(struct?: DataYandexTrinoAccessControlSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexTrinoAccessControlSchemas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlSchemas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataYandexTrinoAccessControlSchemasCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataYandexTrinoAccessControlSchemasSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataYandexTrinoAccessControlSchemasList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexTrinoAccessControlSchemasOutputReference {
    return new DataYandexTrinoAccessControlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexTrinoAccessControlSystemSessionPropertiesProperty {
}

export function dataYandexTrinoAccessControlSystemSessionPropertiesPropertyToTerraform(struct?: DataYandexTrinoAccessControlSystemSessionPropertiesProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlSystemSessionPropertiesPropertyToHclTerraform(struct?: DataYandexTrinoAccessControlSystemSessionPropertiesProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlSystemSessionPropertiesPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlSystemSessionPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlSystemSessionPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}
export interface DataYandexTrinoAccessControlSystemSessionProperties {
}

export function dataYandexTrinoAccessControlSystemSessionPropertiesToTerraform(struct?: DataYandexTrinoAccessControlSystemSessionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlSystemSessionPropertiesToHclTerraform(struct?: DataYandexTrinoAccessControlSystemSessionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlSystemSessionPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexTrinoAccessControlSystemSessionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlSystemSessionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getStringAttribute('allow');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // property - computed: true, optional: false, required: false
  private _property = new DataYandexTrinoAccessControlSystemSessionPropertiesPropertyOutputReference(this, "property");
  public get property() {
    return this._property;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataYandexTrinoAccessControlSystemSessionPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexTrinoAccessControlSystemSessionPropertiesOutputReference {
    return new DataYandexTrinoAccessControlSystemSessionPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexTrinoAccessControlTablesCatalog {
}

export function dataYandexTrinoAccessControlTablesCatalogToTerraform(struct?: DataYandexTrinoAccessControlTablesCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlTablesCatalogToHclTerraform(struct?: DataYandexTrinoAccessControlTablesCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlTablesCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlTablesCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlTablesCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
}
export interface DataYandexTrinoAccessControlTablesColumns {
}

export function dataYandexTrinoAccessControlTablesColumnsToTerraform(struct?: DataYandexTrinoAccessControlTablesColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlTablesColumnsToHclTerraform(struct?: DataYandexTrinoAccessControlTablesColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexTrinoAccessControlTablesColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlTablesColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataYandexTrinoAccessControlTablesColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexTrinoAccessControlTablesColumnsOutputReference {
    return new DataYandexTrinoAccessControlTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexTrinoAccessControlTablesSchema {
}

export function dataYandexTrinoAccessControlTablesSchemaToTerraform(struct?: DataYandexTrinoAccessControlTablesSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlTablesSchemaToHclTerraform(struct?: DataYandexTrinoAccessControlTablesSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlTablesSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlTablesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlTablesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}
export interface DataYandexTrinoAccessControlTablesTable {
}

export function dataYandexTrinoAccessControlTablesTableToTerraform(struct?: DataYandexTrinoAccessControlTablesTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlTablesTableToHclTerraform(struct?: DataYandexTrinoAccessControlTablesTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlTablesTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlTablesTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlTablesTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_regexp - computed: true, optional: false, required: false
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}
export interface DataYandexTrinoAccessControlTables {
}

export function dataYandexTrinoAccessControlTablesToTerraform(struct?: DataYandexTrinoAccessControlTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoAccessControlTablesToHclTerraform(struct?: DataYandexTrinoAccessControlTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoAccessControlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexTrinoAccessControlTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoAccessControlTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataYandexTrinoAccessControlTablesCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataYandexTrinoAccessControlTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return this.getListAttribute('privileges');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataYandexTrinoAccessControlTablesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }

  // table - computed: true, optional: false, required: false
  private _table = new DataYandexTrinoAccessControlTablesTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataYandexTrinoAccessControlTablesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexTrinoAccessControlTablesOutputReference {
    return new DataYandexTrinoAccessControlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexTrinoAccessControlTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/trino_access_control#read DataYandexTrinoAccessControl#read}
  */
  readonly read?: string;
}

export function dataYandexTrinoAccessControlTimeoutsToTerraform(struct?: DataYandexTrinoAccessControlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataYandexTrinoAccessControlTimeoutsToHclTerraform(struct?: DataYandexTrinoAccessControlTimeouts | cdktf.IResolvable): any {
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

export class DataYandexTrinoAccessControlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoAccessControlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexTrinoAccessControlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/trino_access_control yandex_trino_access_control}
*/
export class DataYandexTrinoAccessControl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_trino_access_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexTrinoAccessControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexTrinoAccessControl to import
  * @param importFromId The id of the existing DataYandexTrinoAccessControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/trino_access_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexTrinoAccessControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_trino_access_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/trino_access_control yandex_trino_access_control} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexTrinoAccessControlConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexTrinoAccessControlConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_trino_access_control',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_session_properties - computed: true, optional: false, required: false
  private _catalogSessionProperties = new DataYandexTrinoAccessControlCatalogSessionPropertiesList(this, "catalog_session_properties", false);
  public get catalogSessionProperties() {
    return this._catalogSessionProperties;
  }

  // catalogs - computed: true, optional: false, required: false
  private _catalogs = new DataYandexTrinoAccessControlCatalogsList(this, "catalogs", false);
  public get catalogs() {
    return this._catalogs;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // functions - computed: true, optional: false, required: false
  private _functions = new DataYandexTrinoAccessControlFunctionsList(this, "functions", false);
  public get functions() {
    return this._functions;
  }

  // procedures - computed: true, optional: false, required: false
  private _procedures = new DataYandexTrinoAccessControlProceduresList(this, "procedures", false);
  public get procedures() {
    return this._procedures;
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataYandexTrinoAccessControlQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }

  // schemas - computed: true, optional: false, required: false
  private _schemas = new DataYandexTrinoAccessControlSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }

  // system_session_properties - computed: true, optional: false, required: false
  private _systemSessionProperties = new DataYandexTrinoAccessControlSystemSessionPropertiesList(this, "system_session_properties", false);
  public get systemSessionProperties() {
    return this._systemSessionProperties;
  }

  // tables - computed: true, optional: false, required: false
  private _tables = new DataYandexTrinoAccessControlTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataYandexTrinoAccessControlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexTrinoAccessControlTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      timeouts: dataYandexTrinoAccessControlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataYandexTrinoAccessControlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexTrinoAccessControlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
