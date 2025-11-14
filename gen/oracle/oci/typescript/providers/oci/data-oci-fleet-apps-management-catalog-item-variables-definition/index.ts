// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_catalog_item_variables_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementCatalogItemVariablesDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_catalog_item_variables_definition#catalog_item_id DataOciFleetAppsManagementCatalogItemVariablesDefinition#catalog_item_id}
  */
  readonly catalogItemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_catalog_item_variables_definition#id DataOciFleetAppsManagementCatalogItemVariablesDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArray {
}

export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArrayToTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArray): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArrayToHclTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArray): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArrayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArray | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArray | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.getListAttribute('variables');
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getStringAttribute('visible');
  }
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArrayList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArrayOutputReference {
    return new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArrayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupings {
}

export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsToTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsToHclTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array - computed: true, optional: false, required: false
  private _array = new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsArrayList(this, "array", false);
  public get array() {
    return this._array;
  }
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsOutputReference {
    return new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroups {
}

export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroupsToTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroupsToHclTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // outputs - computed: true, optional: false, required: false
  public get outputs() {
    return this.getListAttribute('outputs');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroupsOutputReference {
    return new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputs {
}

export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputsToTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputsToHclTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputs | undefined) {
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

  // display_text - computed: true, optional: false, required: false
  public get displayText() {
    return this.getStringAttribute('display_text');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // is_sensitive - computed: true, optional: false, required: false
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getStringAttribute('visible');
  }
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputsOutputReference {
    return new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSource {
}

export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSourceToTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSourceToHclTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSourceOutputReference {
    return new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroups {
}

export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroupsToTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroupsToHclTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.getListAttribute('variables');
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getStringAttribute('visible');
  }
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroupsOutputReference {
    return new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocument {
}

export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentToTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentToHclTerraform(struct?: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_allow_view_state - computed: true, optional: false, required: false
  public get canAllowViewState() {
    return this.getBooleanAttribute('can_allow_view_state');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // groupings - computed: true, optional: false, required: false
  private _groupings = new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentGroupingsList(this, "groupings", false);
  public get groupings() {
    return this._groupings;
  }

  // informational_text - computed: true, optional: false, required: false
  public get informationalText() {
    return this.getStringAttribute('informational_text');
  }

  // instructions - computed: true, optional: false, required: false
  public get instructions() {
    return this.getStringAttribute('instructions');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // output_groups - computed: true, optional: false, required: false
  private _outputGroups = new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputGroupsList(this, "output_groups", false);
  public get outputGroups() {
    return this._outputGroups;
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // primary_output_button - computed: true, optional: false, required: false
  public get primaryOutputButton() {
    return this.getStringAttribute('primary_output_button');
  }

  // schema_version - computed: true, optional: false, required: false
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // stack_description - computed: true, optional: false, required: false
  public get stackDescription() {
    return this.getStringAttribute('stack_description');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // troubleshooting - computed: true, optional: false, required: false
  public get troubleshooting() {
    return this.getStringAttribute('troubleshooting');
  }

  // variable_groups - computed: true, optional: false, required: false
  private _variableGroups = new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.getStringAttribute('variables');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputReference {
    return new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_catalog_item_variables_definition oci_fleet_apps_management_catalog_item_variables_definition}
*/
export class DataOciFleetAppsManagementCatalogItemVariablesDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_catalog_item_variables_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementCatalogItemVariablesDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementCatalogItemVariablesDefinition to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementCatalogItemVariablesDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_catalog_item_variables_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementCatalogItemVariablesDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_catalog_item_variables_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_catalog_item_variables_definition oci_fleet_apps_management_catalog_item_variables_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementCatalogItemVariablesDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementCatalogItemVariablesDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_catalog_item_variables_definition',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogItemId = config.catalogItemId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_item_id - computed: false, optional: false, required: true
  private _catalogItemId?: string; 
  public get catalogItemId() {
    return this.getStringAttribute('catalog_item_id');
  }
  public set catalogItemId(value: string) {
    this._catalogItemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogItemIdInput() {
    return this._catalogItemId;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
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

  // schema_document - computed: true, optional: false, required: false
  private _schemaDocument = new DataOciFleetAppsManagementCatalogItemVariablesDefinitionSchemaDocumentList(this, "schema_document", false);
  public get schemaDocument() {
    return this._schemaDocument;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_item_id: cdktf.stringToTerraform(this._catalogItemId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_item_id: {
        value: cdktf.stringToHclTerraform(this._catalogItemId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
