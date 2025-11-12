// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysIappConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address of the Iapp which needs to be Iappensed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#description SysIapp#description}
  */
  readonly description?: string;
  /**
  * BIG-IP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#devicegroup SysIapp#devicegroup}
  */
  readonly devicegroup?: string;
  /**
  * BIG-IP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#execute_action SysIapp#execute_action}
  */
  readonly executeAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#id SysIapp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * BIG-IP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#inherited_devicegroup SysIapp#inherited_devicegroup}
  */
  readonly inheritedDevicegroup?: string;
  /**
  * BIG-IP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#inherited_traffic_group SysIapp#inherited_traffic_group}
  */
  readonly inheritedTrafficGroup?: string;
  /**
  * Address of the Iapp which needs to be Iappensed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#jsonfile SysIapp#jsonfile}
  */
  readonly jsonfile: string;
  /**
  * Address of the Iapp which needs to be Iappensed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#name SysIapp#name}
  */
  readonly name: string;
  /**
  * Address of the Iapp which needs to be Iappensed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#partition SysIapp#partition}
  */
  readonly partition?: string;
  /**
  * BIG-IP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#strict_updates SysIapp#strict_updates}
  */
  readonly strictUpdates?: string;
  /**
  * BIG-IP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#template SysIapp#template}
  */
  readonly template?: string;
  /**
  * BIG-IP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#template_modified SysIapp#template_modified}
  */
  readonly templateModified?: string;
  /**
  * BIG-IP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#template_prerequisite_errors SysIapp#template_prerequisite_errors}
  */
  readonly templatePrerequisiteErrors?: string;
  /**
  * BIG-IP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#traffic_group SysIapp#traffic_group}
  */
  readonly trafficGroup?: string;
  /**
  * lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#lists SysIapp#lists}
  */
  readonly lists?: SysIappLists[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#metadata SysIapp#metadata}
  */
  readonly metadata?: SysIappMetadata[] | cdktf.IResolvable;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#tables SysIapp#tables}
  */
  readonly tables?: SysIappTables[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#variables SysIapp#variables}
  */
  readonly variables?: SysIappVariables[] | cdktf.IResolvable;
}
export interface SysIappLists {
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#encrypted SysIapp#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#value SysIapp#value}
  */
  readonly value?: string;
}

export function sysIappListsToTerraform(struct?: SysIappLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sysIappListsToHclTerraform(struct?: SysIappLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysIappListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysIappLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysIappLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._value = value.value;
    }
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SysIappListsList extends cdktf.ComplexList {
  public internalValue? : SysIappLists[] | cdktf.IResolvable

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
  public get(index: number): SysIappListsOutputReference {
    return new SysIappListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SysIappMetadata {
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#persists SysIapp#persists}
  */
  readonly persists?: string;
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#value SysIapp#value}
  */
  readonly value?: string;
}

export function sysIappMetadataToTerraform(struct?: SysIappMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persists: cdktf.stringToTerraform(struct!.persists),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sysIappMetadataToHclTerraform(struct?: SysIappMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persists: {
      value: cdktf.stringToHclTerraform(struct!.persists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysIappMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysIappMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persists !== undefined) {
      hasAnyValues = true;
      internalValueResult.persists = this._persists;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysIappMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persists = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persists = value.persists;
      this._value = value.value;
    }
  }

  // persists - computed: false, optional: true, required: false
  private _persists?: string; 
  public get persists() {
    return this.getStringAttribute('persists');
  }
  public set persists(value: string) {
    this._persists = value;
  }
  public resetPersists() {
    this._persists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistsInput() {
    return this._persists;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SysIappMetadataList extends cdktf.ComplexList {
  public internalValue? : SysIappMetadata[] | cdktf.IResolvable

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
  public get(index: number): SysIappMetadataOutputReference {
    return new SysIappMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SysIappTablesRows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#row SysIapp#row}
  */
  readonly row?: string[];
}

export function sysIappTablesRowsToTerraform(struct?: SysIappTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    row: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.row),
  }
}


export function sysIappTablesRowsToHclTerraform(struct?: SysIappTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    row: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.row),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysIappTablesRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysIappTablesRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysIappTablesRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._row = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._row = value.row;
    }
  }

  // row - computed: false, optional: true, required: false
  private _row?: string[]; 
  public get row() {
    return this.getListAttribute('row');
  }
  public set row(value: string[]) {
    this._row = value;
  }
  public resetRow() {
    this._row = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }
}

export class SysIappTablesRowsList extends cdktf.ComplexList {
  public internalValue? : SysIappTablesRows[] | cdktf.IResolvable

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
  public get(index: number): SysIappTablesRowsOutputReference {
    return new SysIappTablesRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SysIappTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#column_names SysIapp#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#encrypted_columns SysIapp#encrypted_columns}
  */
  readonly encryptedColumns?: string;
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#name SysIapp#name}
  */
  readonly name?: string;
  /**
  * rows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#rows SysIapp#rows}
  */
  readonly rows?: SysIappTablesRows[] | cdktf.IResolvable;
}

export function sysIappTablesToTerraform(struct?: SysIappTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    encrypted_columns: cdktf.stringToTerraform(struct!.encryptedColumns),
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(sysIappTablesRowsToTerraform, true)(struct!.rows),
  }
}


export function sysIappTablesToHclTerraform(struct?: SysIappTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encrypted_columns: {
      value: cdktf.stringToHclTerraform(struct!.encryptedColumns),
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
    rows: {
      value: cdktf.listMapperHcl(sysIappTablesRowsToHclTerraform, true)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "SysIappTablesRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysIappTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysIappTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._encryptedColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedColumns = this._encryptedColumns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysIappTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._encryptedColumns = undefined;
      this._name = undefined;
      this._rows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._encryptedColumns = value.encryptedColumns;
      this._name = value.name;
      this._rows.internalValue = value.rows;
    }
  }

  // column_names - computed: false, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // encrypted_columns - computed: false, optional: true, required: false
  private _encryptedColumns?: string; 
  public get encryptedColumns() {
    return this.getStringAttribute('encrypted_columns');
  }
  public set encryptedColumns(value: string) {
    this._encryptedColumns = value;
  }
  public resetEncryptedColumns() {
    this._encryptedColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedColumnsInput() {
    return this._encryptedColumns;
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

  // rows - computed: false, optional: true, required: false
  private _rows = new SysIappTablesRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: SysIappTablesRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }
}

export class SysIappTablesList extends cdktf.ComplexList {
  public internalValue? : SysIappTables[] | cdktf.IResolvable

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
  public get(index: number): SysIappTablesOutputReference {
    return new SysIappTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SysIappVariables {
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#encrypted SysIapp#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#name SysIapp#name}
  */
  readonly name?: string;
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#value SysIapp#value}
  */
  readonly value?: string;
}

export function sysIappVariablesToTerraform(struct?: SysIappVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sysIappVariablesToHclTerraform(struct?: SysIappVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysIappVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysIappVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysIappVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SysIappVariablesList extends cdktf.ComplexList {
  public internalValue? : SysIappVariables[] | cdktf.IResolvable

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
  public get(index: number): SysIappVariablesOutputReference {
    return new SysIappVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp bigip_sys_iapp}
*/
export class SysIapp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_sys_iapp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysIapp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysIapp to import
  * @param importFromId The id of the existing SysIapp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysIapp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_sys_iapp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_iapp bigip_sys_iapp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysIappConfig
  */
  public constructor(scope: Construct, id: string, config: SysIappConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_sys_iapp',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
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
    this._devicegroup = config.devicegroup;
    this._executeAction = config.executeAction;
    this._id = config.id;
    this._inheritedDevicegroup = config.inheritedDevicegroup;
    this._inheritedTrafficGroup = config.inheritedTrafficGroup;
    this._jsonfile = config.jsonfile;
    this._name = config.name;
    this._partition = config.partition;
    this._strictUpdates = config.strictUpdates;
    this._template = config.template;
    this._templateModified = config.templateModified;
    this._templatePrerequisiteErrors = config.templatePrerequisiteErrors;
    this._trafficGroup = config.trafficGroup;
    this._lists.internalValue = config.lists;
    this._metadata.internalValue = config.metadata;
    this._tables.internalValue = config.tables;
    this._variables.internalValue = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // devicegroup - computed: true, optional: true, required: false
  private _devicegroup?: string; 
  public get devicegroup() {
    return this.getStringAttribute('devicegroup');
  }
  public set devicegroup(value: string) {
    this._devicegroup = value;
  }
  public resetDevicegroup() {
    this._devicegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicegroupInput() {
    return this._devicegroup;
  }

  // execute_action - computed: true, optional: true, required: false
  private _executeAction?: string; 
  public get executeAction() {
    return this.getStringAttribute('execute_action');
  }
  public set executeAction(value: string) {
    this._executeAction = value;
  }
  public resetExecuteAction() {
    this._executeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeActionInput() {
    return this._executeAction;
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

  // inherited_devicegroup - computed: false, optional: true, required: false
  private _inheritedDevicegroup?: string; 
  public get inheritedDevicegroup() {
    return this.getStringAttribute('inherited_devicegroup');
  }
  public set inheritedDevicegroup(value: string) {
    this._inheritedDevicegroup = value;
  }
  public resetInheritedDevicegroup() {
    this._inheritedDevicegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedDevicegroupInput() {
    return this._inheritedDevicegroup;
  }

  // inherited_traffic_group - computed: false, optional: true, required: false
  private _inheritedTrafficGroup?: string; 
  public get inheritedTrafficGroup() {
    return this.getStringAttribute('inherited_traffic_group');
  }
  public set inheritedTrafficGroup(value: string) {
    this._inheritedTrafficGroup = value;
  }
  public resetInheritedTrafficGroup() {
    this._inheritedTrafficGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedTrafficGroupInput() {
    return this._inheritedTrafficGroup;
  }

  // jsonfile - computed: false, optional: false, required: true
  private _jsonfile?: string; 
  public get jsonfile() {
    return this.getStringAttribute('jsonfile');
  }
  public set jsonfile(value: string) {
    this._jsonfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonfileInput() {
    return this._jsonfile;
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

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // strict_updates - computed: false, optional: true, required: false
  private _strictUpdates?: string; 
  public get strictUpdates() {
    return this.getStringAttribute('strict_updates');
  }
  public set strictUpdates(value: string) {
    this._strictUpdates = value;
  }
  public resetStrictUpdates() {
    this._strictUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictUpdatesInput() {
    return this._strictUpdates;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // template_modified - computed: false, optional: true, required: false
  private _templateModified?: string; 
  public get templateModified() {
    return this.getStringAttribute('template_modified');
  }
  public set templateModified(value: string) {
    this._templateModified = value;
  }
  public resetTemplateModified() {
    this._templateModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateModifiedInput() {
    return this._templateModified;
  }

  // template_prerequisite_errors - computed: false, optional: true, required: false
  private _templatePrerequisiteErrors?: string; 
  public get templatePrerequisiteErrors() {
    return this.getStringAttribute('template_prerequisite_errors');
  }
  public set templatePrerequisiteErrors(value: string) {
    this._templatePrerequisiteErrors = value;
  }
  public resetTemplatePrerequisiteErrors() {
    this._templatePrerequisiteErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePrerequisiteErrorsInput() {
    return this._templatePrerequisiteErrors;
  }

  // traffic_group - computed: false, optional: true, required: false
  private _trafficGroup?: string; 
  public get trafficGroup() {
    return this.getStringAttribute('traffic_group');
  }
  public set trafficGroup(value: string) {
    this._trafficGroup = value;
  }
  public resetTrafficGroup() {
    this._trafficGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficGroupInput() {
    return this._trafficGroup;
  }

  // lists - computed: false, optional: true, required: false
  private _lists = new SysIappListsList(this, "lists", false);
  public get lists() {
    return this._lists;
  }
  public putLists(value: SysIappLists[] | cdktf.IResolvable) {
    this._lists.internalValue = value;
  }
  public resetLists() {
    this._lists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listsInput() {
    return this._lists.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new SysIappMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SysIappMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new SysIappTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: SysIappTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new SysIappVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: SysIappVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      devicegroup: cdktf.stringToTerraform(this._devicegroup),
      execute_action: cdktf.stringToTerraform(this._executeAction),
      id: cdktf.stringToTerraform(this._id),
      inherited_devicegroup: cdktf.stringToTerraform(this._inheritedDevicegroup),
      inherited_traffic_group: cdktf.stringToTerraform(this._inheritedTrafficGroup),
      jsonfile: cdktf.stringToTerraform(this._jsonfile),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      strict_updates: cdktf.stringToTerraform(this._strictUpdates),
      template: cdktf.stringToTerraform(this._template),
      template_modified: cdktf.stringToTerraform(this._templateModified),
      template_prerequisite_errors: cdktf.stringToTerraform(this._templatePrerequisiteErrors),
      traffic_group: cdktf.stringToTerraform(this._trafficGroup),
      lists: cdktf.listMapper(sysIappListsToTerraform, true)(this._lists.internalValue),
      metadata: cdktf.listMapper(sysIappMetadataToTerraform, true)(this._metadata.internalValue),
      tables: cdktf.listMapper(sysIappTablesToTerraform, true)(this._tables.internalValue),
      variables: cdktf.listMapper(sysIappVariablesToTerraform, true)(this._variables.internalValue),
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
      devicegroup: {
        value: cdktf.stringToHclTerraform(this._devicegroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_action: {
        value: cdktf.stringToHclTerraform(this._executeAction),
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
      inherited_devicegroup: {
        value: cdktf.stringToHclTerraform(this._inheritedDevicegroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inherited_traffic_group: {
        value: cdktf.stringToHclTerraform(this._inheritedTrafficGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonfile: {
        value: cdktf.stringToHclTerraform(this._jsonfile),
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
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_updates: {
        value: cdktf.stringToHclTerraform(this._strictUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_modified: {
        value: cdktf.stringToHclTerraform(this._templateModified),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_prerequisite_errors: {
        value: cdktf.stringToHclTerraform(this._templatePrerequisiteErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_group: {
        value: cdktf.stringToHclTerraform(this._trafficGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lists: {
        value: cdktf.listMapperHcl(sysIappListsToHclTerraform, true)(this._lists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysIappListsList",
      },
      metadata: {
        value: cdktf.listMapperHcl(sysIappMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysIappMetadataList",
      },
      tables: {
        value: cdktf.listMapperHcl(sysIappTablesToHclTerraform, true)(this._tables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysIappTablesList",
      },
      variables: {
        value: cdktf.listMapperHcl(sysIappVariablesToHclTerraform, true)(this._variables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysIappVariablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
