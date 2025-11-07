// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferConfig extends cdktf.TerraformMetaArguments {
  /**
  * Transfer activation state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#activated Transfer#activated}
  */
  readonly activated?: boolean | cdktf.IResolvable;
  /**
  * List of objects for transfer. For example a table name: "public.my_table"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#data_objects Transfer#data_objects}
  */
  readonly dataObjects?: string[];
  /**
  * Transfer description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#description Transfer#description}
  */
  readonly description?: string;
  /**
  * Transfer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#name Transfer#name}
  */
  readonly name: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#project_id Transfer#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#runtime Transfer#runtime}
  */
  readonly runtime?: TransferRuntime;
  /**
  * Source endpoint ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#source Transfer#source}
  */
  readonly source: string;
  /**
  * Target endpoint ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#target Transfer#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#transformation Transfer#transformation}
  */
  readonly transformation?: TransferTransformation;
  /**
  * Transfer type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#type Transfer#type}
  */
  readonly type?: string;
}
export interface TransferRuntimeDedicated {
  /**
  * Flavor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#flavor Transfer#flavor}
  */
  readonly flavor: string;
  /**
  * VPC ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#vpc_id Transfer#vpc_id}
  */
  readonly vpcId?: string;
}

export function transferRuntimeDedicatedToTerraform(struct?: TransferRuntimeDedicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor: cdktf.stringToTerraform(struct!.flavor),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function transferRuntimeDedicatedToHclTerraform(struct?: TransferRuntimeDedicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferRuntimeDedicatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferRuntimeDedicated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferRuntimeDedicated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flavor = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flavor = value.flavor;
      this._vpcId = value.vpcId;
    }
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface TransferRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#dedicated Transfer#dedicated}
  */
  readonly dedicated?: TransferRuntimeDedicated;
}

export function transferRuntimeToTerraform(struct?: TransferRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated: transferRuntimeDedicatedToTerraform(struct!.dedicated),
  }
}


export function transferRuntimeToHclTerraform(struct?: TransferRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated: {
      value: transferRuntimeDedicatedToHclTerraform(struct!.dedicated),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferRuntimeDedicated",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferRuntime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicated = this._dedicated?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferRuntime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedicated.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dedicated.internalValue = value.dedicated;
    }
  }

  // dedicated - computed: false, optional: true, required: false
  private _dedicated = new TransferRuntimeDedicatedOutputReference(this, "dedicated");
  public get dedicated() {
    return this._dedicated;
  }
  public putDedicated(value: TransferRuntimeDedicated) {
    this._dedicated.internalValue = value;
  }
  public resetDedicated() {
    this._dedicated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInput() {
    return this._dedicated.internalValue;
  }
}
export interface TransferTransformationTransformersConvertToStringColumns {
  /**
  * Excluded columns (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#exclude Transfer#exclude}
  */
  readonly exclude?: string[];
  /**
  * Included columns (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#include Transfer#include}
  */
  readonly include?: string[];
}

export function transferTransformationTransformersConvertToStringColumnsToTerraform(struct?: TransferTransformationTransformersConvertToStringColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function transferTransformationTransformersConvertToStringColumnsToHclTerraform(struct?: TransferTransformationTransformersConvertToStringColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersConvertToStringColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersConvertToStringColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersConvertToStringColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface TransferTransformationTransformersConvertToStringTables {
  /**
  * Excluded tables (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#exclude Transfer#exclude}
  */
  readonly exclude?: string[];
  /**
  * Included tables (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#include Transfer#include}
  */
  readonly include?: string[];
}

export function transferTransformationTransformersConvertToStringTablesToTerraform(struct?: TransferTransformationTransformersConvertToStringTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function transferTransformationTransformersConvertToStringTablesToHclTerraform(struct?: TransferTransformationTransformersConvertToStringTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersConvertToStringTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersConvertToStringTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersConvertToStringTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface TransferTransformationTransformersConvertToString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#columns Transfer#columns}
  */
  readonly columns?: TransferTransformationTransformersConvertToStringColumns;
  /**
  * Tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#tables Transfer#tables}
  */
  readonly tables?: TransferTransformationTransformersConvertToStringTables;
}

export function transferTransformationTransformersConvertToStringToTerraform(struct?: TransferTransformationTransformersConvertToString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: transferTransformationTransformersConvertToStringColumnsToTerraform(struct!.columns),
    tables: transferTransformationTransformersConvertToStringTablesToTerraform(struct!.tables),
  }
}


export function transferTransformationTransformersConvertToStringToHclTerraform(struct?: TransferTransformationTransformersConvertToString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: transferTransformationTransformersConvertToStringColumnsToHclTerraform(struct!.columns),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersConvertToStringColumns",
    },
    tables: {
      value: transferTransformationTransformersConvertToStringTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersConvertToStringTables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersConvertToStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersConvertToString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersConvertToString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
      this._tables.internalValue = value.tables;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new TransferTransformationTransformersConvertToStringColumnsOutputReference(this, "columns");
  public get columns() {
    return this._columns;
  }
  public putColumns(value: TransferTransformationTransformersConvertToStringColumns) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new TransferTransformationTransformersConvertToStringTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: TransferTransformationTransformersConvertToStringTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface TransferTransformationTransformersDbt {
  /**
  * A branch or a tag of the git repository with the DBT project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#git_branch Transfer#git_branch}
  */
  readonly gitBranch?: string;
  /**
  * A link to a git repository with a DBT project. Must start with `https://`. The root directory of the repository must contain a `dbt_project.yml` file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#git_repository_link Transfer#git_repository_link}
  */
  readonly gitRepositoryLink?: string;
  /**
  * Operation; for example, `run`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#operation Transfer#operation}
  */
  readonly operation?: string;
  /**
  * The name for a profile which will be created automatically using the settings of the destination endpoint. The name must match the `profile` property in the `dbt_project.yml` file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#profile_name Transfer#profile_name}
  */
  readonly profileName?: string;
}

export function transferTransformationTransformersDbtToTerraform(struct?: TransferTransformationTransformersDbt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    git_branch: cdktf.stringToTerraform(struct!.gitBranch),
    git_repository_link: cdktf.stringToTerraform(struct!.gitRepositoryLink),
    operation: cdktf.stringToTerraform(struct!.operation),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
  }
}


export function transferTransformationTransformersDbtToHclTerraform(struct?: TransferTransformationTransformersDbt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    git_branch: {
      value: cdktf.stringToHclTerraform(struct!.gitBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_repository_link: {
      value: cdktf.stringToHclTerraform(struct!.gitRepositoryLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersDbtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersDbt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gitBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitBranch = this._gitBranch;
    }
    if (this._gitRepositoryLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepositoryLink = this._gitRepositoryLink;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersDbt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gitBranch = undefined;
      this._gitRepositoryLink = undefined;
      this._operation = undefined;
      this._profileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gitBranch = value.gitBranch;
      this._gitRepositoryLink = value.gitRepositoryLink;
      this._operation = value.operation;
      this._profileName = value.profileName;
    }
  }

  // git_branch - computed: false, optional: true, required: false
  private _gitBranch?: string; 
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string) {
    this._gitBranch = value;
  }
  public resetGitBranch() {
    this._gitBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBranchInput() {
    return this._gitBranch;
  }

  // git_repository_link - computed: false, optional: true, required: false
  private _gitRepositoryLink?: string; 
  public get gitRepositoryLink() {
    return this.getStringAttribute('git_repository_link');
  }
  public set gitRepositoryLink(value: string) {
    this._gitRepositoryLink = value;
  }
  public resetGitRepositoryLink() {
    this._gitRepositoryLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryLinkInput() {
    return this._gitRepositoryLink;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }
}
export interface TransferTransformationTransformersLambdaFunctionOptionsHeaders {
  /**
  * Header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#key Transfer#key}
  */
  readonly key?: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#value Transfer#value}
  */
  readonly value?: string;
}

export function transferTransformationTransformersLambdaFunctionOptionsHeadersToTerraform(struct?: TransferTransformationTransformersLambdaFunctionOptionsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function transferTransformationTransformersLambdaFunctionOptionsHeadersToHclTerraform(struct?: TransferTransformationTransformersLambdaFunctionOptionsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class TransferTransformationTransformersLambdaFunctionOptionsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransferTransformationTransformersLambdaFunctionOptionsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersLambdaFunctionOptionsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class TransferTransformationTransformersLambdaFunctionOptionsHeadersList extends cdktf.ComplexList {
  public internalValue? : TransferTransformationTransformersLambdaFunctionOptionsHeaders[] | cdktf.IResolvable

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
  public get(index: number): TransferTransformationTransformersLambdaFunctionOptionsHeadersOutputReference {
    return new TransferTransformationTransformersLambdaFunctionOptionsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferTransformationTransformersLambdaFunctionOptions {
  /**
  * Flush interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#buffer_flush_interval Transfer#buffer_flush_interval}
  */
  readonly bufferFlushInterval?: string;
  /**
  * Buffer size for function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#buffer_size Transfer#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * Cloud function name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#cloud_function Transfer#cloud_function}
  */
  readonly cloudFunction?: string;
  /**
  * Cloud function URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#cloud_function_url Transfer#cloud_function_url}
  */
  readonly cloudFunctionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#headers Transfer#headers}
  */
  readonly headers?: TransferTransformationTransformersLambdaFunctionOptionsHeaders[] | cdktf.IResolvable;
  /**
  * Invocation timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#invocation_timeout Transfer#invocation_timeout}
  */
  readonly invocationTimeout?: string;
  /**
  * Number of retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#number_of_retries Transfer#number_of_retries}
  */
  readonly numberOfRetries?: number;
}

export function transferTransformationTransformersLambdaFunctionOptionsToTerraform(struct?: TransferTransformationTransformersLambdaFunctionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_flush_interval: cdktf.stringToTerraform(struct!.bufferFlushInterval),
    buffer_size: cdktf.stringToTerraform(struct!.bufferSize),
    cloud_function: cdktf.stringToTerraform(struct!.cloudFunction),
    cloud_function_url: cdktf.stringToTerraform(struct!.cloudFunctionUrl),
    headers: cdktf.listMapper(transferTransformationTransformersLambdaFunctionOptionsHeadersToTerraform, false)(struct!.headers),
    invocation_timeout: cdktf.stringToTerraform(struct!.invocationTimeout),
    number_of_retries: cdktf.numberToTerraform(struct!.numberOfRetries),
  }
}


export function transferTransformationTransformersLambdaFunctionOptionsToHclTerraform(struct?: TransferTransformationTransformersLambdaFunctionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.bufferFlushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_function: {
      value: cdktf.stringToHclTerraform(struct!.cloudFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_function_url: {
      value: cdktf.stringToHclTerraform(struct!.cloudFunctionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(transferTransformationTransformersLambdaFunctionOptionsHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "TransferTransformationTransformersLambdaFunctionOptionsHeadersList",
    },
    invocation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.invocationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_retries: {
      value: cdktf.numberToHclTerraform(struct!.numberOfRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersLambdaFunctionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersLambdaFunctionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferFlushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferFlushInterval = this._bufferFlushInterval;
    }
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._cloudFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudFunction = this._cloudFunction;
    }
    if (this._cloudFunctionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudFunctionUrl = this._cloudFunctionUrl;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._invocationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationTimeout = this._invocationTimeout;
    }
    if (this._numberOfRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfRetries = this._numberOfRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersLambdaFunctionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferFlushInterval = undefined;
      this._bufferSize = undefined;
      this._cloudFunction = undefined;
      this._cloudFunctionUrl = undefined;
      this._headers.internalValue = undefined;
      this._invocationTimeout = undefined;
      this._numberOfRetries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferFlushInterval = value.bufferFlushInterval;
      this._bufferSize = value.bufferSize;
      this._cloudFunction = value.cloudFunction;
      this._cloudFunctionUrl = value.cloudFunctionUrl;
      this._headers.internalValue = value.headers;
      this._invocationTimeout = value.invocationTimeout;
      this._numberOfRetries = value.numberOfRetries;
    }
  }

  // buffer_flush_interval - computed: false, optional: true, required: false
  private _bufferFlushInterval?: string; 
  public get bufferFlushInterval() {
    return this.getStringAttribute('buffer_flush_interval');
  }
  public set bufferFlushInterval(value: string) {
    this._bufferFlushInterval = value;
  }
  public resetBufferFlushInterval() {
    this._bufferFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferFlushIntervalInput() {
    return this._bufferFlushInterval;
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // cloud_function - computed: false, optional: true, required: false
  private _cloudFunction?: string; 
  public get cloudFunction() {
    return this.getStringAttribute('cloud_function');
  }
  public set cloudFunction(value: string) {
    this._cloudFunction = value;
  }
  public resetCloudFunction() {
    this._cloudFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionInput() {
    return this._cloudFunction;
  }

  // cloud_function_url - computed: false, optional: true, required: false
  private _cloudFunctionUrl?: string; 
  public get cloudFunctionUrl() {
    return this.getStringAttribute('cloud_function_url');
  }
  public set cloudFunctionUrl(value: string) {
    this._cloudFunctionUrl = value;
  }
  public resetCloudFunctionUrl() {
    this._cloudFunctionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionUrlInput() {
    return this._cloudFunctionUrl;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new TransferTransformationTransformersLambdaFunctionOptionsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: TransferTransformationTransformersLambdaFunctionOptionsHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // invocation_timeout - computed: false, optional: true, required: false
  private _invocationTimeout?: string; 
  public get invocationTimeout() {
    return this.getStringAttribute('invocation_timeout');
  }
  public set invocationTimeout(value: string) {
    this._invocationTimeout = value;
  }
  public resetInvocationTimeout() {
    this._invocationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTimeoutInput() {
    return this._invocationTimeout;
  }

  // number_of_retries - computed: false, optional: true, required: false
  private _numberOfRetries?: number; 
  public get numberOfRetries() {
    return this.getNumberAttribute('number_of_retries');
  }
  public set numberOfRetries(value: number) {
    this._numberOfRetries = value;
  }
  public resetNumberOfRetries() {
    this._numberOfRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfRetriesInput() {
    return this._numberOfRetries;
  }
}
export interface TransferTransformationTransformersLambdaFunction {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#name Transfer#name}
  */
  readonly name?: string;
  /**
  * Named Schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#name_space Transfer#name_space}
  */
  readonly nameSpace?: string;
  /**
  * Lambda function config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#options Transfer#options}
  */
  readonly options?: TransferTransformationTransformersLambdaFunctionOptions;
}

export function transferTransformationTransformersLambdaFunctionToTerraform(struct?: TransferTransformationTransformersLambdaFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_space: cdktf.stringToTerraform(struct!.nameSpace),
    options: transferTransformationTransformersLambdaFunctionOptionsToTerraform(struct!.options),
  }
}


export function transferTransformationTransformersLambdaFunctionToHclTerraform(struct?: TransferTransformationTransformersLambdaFunction | cdktf.IResolvable): any {
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
    name_space: {
      value: cdktf.stringToHclTerraform(struct!.nameSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: transferTransformationTransformersLambdaFunctionOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersLambdaFunctionOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersLambdaFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersLambdaFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSpace = this._nameSpace;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersLambdaFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nameSpace = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nameSpace = value.nameSpace;
      this._options.internalValue = value.options;
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

  // name_space - computed: false, optional: true, required: false
  private _nameSpace?: string; 
  public get nameSpace() {
    return this.getStringAttribute('name_space');
  }
  public set nameSpace(value: string) {
    this._nameSpace = value;
  }
  public resetNameSpace() {
    this._nameSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSpaceInput() {
    return this._nameSpace;
  }

  // options - computed: false, optional: true, required: false
  private _options = new TransferTransformationTransformersLambdaFunctionOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: TransferTransformationTransformersLambdaFunctionOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface TransferTransformationTransformersReplacePrimaryKeyTables {
  /**
  * Excluded tables (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#exclude Transfer#exclude}
  */
  readonly exclude?: string[];
  /**
  * Included tables (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#include Transfer#include}
  */
  readonly include?: string[];
}

export function transferTransformationTransformersReplacePrimaryKeyTablesToTerraform(struct?: TransferTransformationTransformersReplacePrimaryKeyTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function transferTransformationTransformersReplacePrimaryKeyTablesToHclTerraform(struct?: TransferTransformationTransformersReplacePrimaryKeyTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersReplacePrimaryKeyTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersReplacePrimaryKeyTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersReplacePrimaryKeyTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface TransferTransformationTransformersReplacePrimaryKey {
  /**
  * Columns to mark as PRIMARY KEYs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#keys Transfer#keys}
  */
  readonly keys?: string[];
  /**
  * Tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#tables Transfer#tables}
  */
  readonly tables?: TransferTransformationTransformersReplacePrimaryKeyTables;
}

export function transferTransformationTransformersReplacePrimaryKeyToTerraform(struct?: TransferTransformationTransformersReplacePrimaryKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    tables: transferTransformationTransformersReplacePrimaryKeyTablesToTerraform(struct!.tables),
  }
}


export function transferTransformationTransformersReplacePrimaryKeyToHclTerraform(struct?: TransferTransformationTransformersReplacePrimaryKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tables: {
      value: transferTransformationTransformersReplacePrimaryKeyTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersReplacePrimaryKeyTables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersReplacePrimaryKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersReplacePrimaryKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersReplacePrimaryKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keys = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keys = value.keys;
      this._tables.internalValue = value.tables;
    }
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new TransferTransformationTransformersReplacePrimaryKeyTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: TransferTransformationTransformersReplacePrimaryKeyTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface TransferTransformationTransformersSqlTables {
  /**
  * Excluded tables (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#exclude Transfer#exclude}
  */
  readonly exclude?: string[];
  /**
  * Included tables (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#include Transfer#include}
  */
  readonly include?: string[];
}

export function transferTransformationTransformersSqlTablesToTerraform(struct?: TransferTransformationTransformersSqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function transferTransformationTransformersSqlTablesToHclTerraform(struct?: TransferTransformationTransformersSqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersSqlTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersSqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersSqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface TransferTransformationTransformersSql {
  /**
  * Script would be applied on-the-fly to all data. As SQL engine used [Clickhouse Local](https://clickhouse.com/docs/en/operations/utilities/clickhouse-local). For queries there is a common `table` source for data. For example `SELECT * FROM table` query. No state is saved. Data window is linear, but with random size. Local clickhouse run with `--no-system-tables` flag, which disables all system tables / dictionaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#query Transfer#query}
  */
  readonly query?: string;
  /**
  * Tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#tables Transfer#tables}
  */
  readonly tables?: TransferTransformationTransformersSqlTables;
}

export function transferTransformationTransformersSqlToTerraform(struct?: TransferTransformationTransformersSql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    tables: transferTransformationTransformersSqlTablesToTerraform(struct!.tables),
  }
}


export function transferTransformationTransformersSqlToHclTerraform(struct?: TransferTransformationTransformersSql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: transferTransformationTransformersSqlTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersSqlTables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersSql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersSql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
      this._tables.internalValue = value.tables;
    }
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new TransferTransformationTransformersSqlTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: TransferTransformationTransformersSqlTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface TransferTransformationTransformersTableSplitterTables {
  /**
  * Excluded tables (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#exclude Transfer#exclude}
  */
  readonly exclude?: string[];
  /**
  * Included tables (regular expressions). Start every name with `^` and finish with `$` to avoid unexpected side effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#include Transfer#include}
  */
  readonly include?: string[];
}

export function transferTransformationTransformersTableSplitterTablesToTerraform(struct?: TransferTransformationTransformersTableSplitterTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function transferTransformationTransformersTableSplitterTablesToHclTerraform(struct?: TransferTransformationTransformersTableSplitterTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersTableSplitterTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersTableSplitterTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersTableSplitterTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface TransferTransformationTransformersTableSplitter {
  /**
  * Columns with values to use as a new table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#columns Transfer#columns}
  */
  readonly columns?: string[];
  /**
  * A string separating the parts of the new table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#splitter Transfer#splitter}
  */
  readonly splitter?: string;
  /**
  * Tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#tables Transfer#tables}
  */
  readonly tables?: TransferTransformationTransformersTableSplitterTables;
}

export function transferTransformationTransformersTableSplitterToTerraform(struct?: TransferTransformationTransformersTableSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    splitter: cdktf.stringToTerraform(struct!.splitter),
    tables: transferTransformationTransformersTableSplitterTablesToTerraform(struct!.tables),
  }
}


export function transferTransformationTransformersTableSplitterToHclTerraform(struct?: TransferTransformationTransformersTableSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    splitter: {
      value: cdktf.stringToHclTerraform(struct!.splitter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: transferTransformationTransformersTableSplitterTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersTableSplitterTables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersTableSplitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformationTransformersTableSplitter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._splitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitter = this._splitter;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformersTableSplitter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._splitter = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._splitter = value.splitter;
      this._tables.internalValue = value.tables;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // splitter - computed: false, optional: true, required: false
  private _splitter?: string; 
  public get splitter() {
    return this.getStringAttribute('splitter');
  }
  public set splitter(value: string) {
    this._splitter = value;
  }
  public resetSplitter() {
    this._splitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitterInput() {
    return this._splitter;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new TransferTransformationTransformersTableSplitterTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: TransferTransformationTransformersTableSplitterTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface TransferTransformationTransformers {
  /**
  * Convert columns' values to strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#convert_to_string Transfer#convert_to_string}
  */
  readonly convertToString?: TransferTransformationTransformersConvertToString;
  /**
  * Run DBT after snapshot finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#dbt Transfer#dbt}
  */
  readonly dbt?: TransferTransformationTransformersDbt;
  /**
  * Lambda function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#lambda_function Transfer#lambda_function}
  */
  readonly lambdaFunction?: TransferTransformationTransformersLambdaFunction;
  /**
  * Replace the set of columns marked as PRIMARY KEYs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#replace_primary_key Transfer#replace_primary_key}
  */
  readonly replacePrimaryKey?: TransferTransformationTransformersReplacePrimaryKey;
  /**
  * SQL Transformer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#sql Transfer#sql}
  */
  readonly sql?: TransferTransformationTransformersSql;
  /**
  * Replace the name of the table to a value composed of values of columns of a row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#table_splitter Transfer#table_splitter}
  */
  readonly tableSplitter?: TransferTransformationTransformersTableSplitter;
}

export function transferTransformationTransformersToTerraform(struct?: TransferTransformationTransformers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    convert_to_string: transferTransformationTransformersConvertToStringToTerraform(struct!.convertToString),
    dbt: transferTransformationTransformersDbtToTerraform(struct!.dbt),
    lambda_function: transferTransformationTransformersLambdaFunctionToTerraform(struct!.lambdaFunction),
    replace_primary_key: transferTransformationTransformersReplacePrimaryKeyToTerraform(struct!.replacePrimaryKey),
    sql: transferTransformationTransformersSqlToTerraform(struct!.sql),
    table_splitter: transferTransformationTransformersTableSplitterToTerraform(struct!.tableSplitter),
  }
}


export function transferTransformationTransformersToHclTerraform(struct?: TransferTransformationTransformers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    convert_to_string: {
      value: transferTransformationTransformersConvertToStringToHclTerraform(struct!.convertToString),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersConvertToString",
    },
    dbt: {
      value: transferTransformationTransformersDbtToHclTerraform(struct!.dbt),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersDbt",
    },
    lambda_function: {
      value: transferTransformationTransformersLambdaFunctionToHclTerraform(struct!.lambdaFunction),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersLambdaFunction",
    },
    replace_primary_key: {
      value: transferTransformationTransformersReplacePrimaryKeyToHclTerraform(struct!.replacePrimaryKey),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersReplacePrimaryKey",
    },
    sql: {
      value: transferTransformationTransformersSqlToHclTerraform(struct!.sql),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersSql",
    },
    table_splitter: {
      value: transferTransformationTransformersTableSplitterToHclTerraform(struct!.tableSplitter),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferTransformationTransformersTableSplitter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationTransformersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransferTransformationTransformers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._convertToString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertToString = this._convertToString?.internalValue;
    }
    if (this._dbt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbt = this._dbt?.internalValue;
    }
    if (this._lambdaFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunction = this._lambdaFunction?.internalValue;
    }
    if (this._replacePrimaryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePrimaryKey = this._replacePrimaryKey?.internalValue;
    }
    if (this._sql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql?.internalValue;
    }
    if (this._tableSplitter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableSplitter = this._tableSplitter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformationTransformers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._convertToString.internalValue = undefined;
      this._dbt.internalValue = undefined;
      this._lambdaFunction.internalValue = undefined;
      this._replacePrimaryKey.internalValue = undefined;
      this._sql.internalValue = undefined;
      this._tableSplitter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._convertToString.internalValue = value.convertToString;
      this._dbt.internalValue = value.dbt;
      this._lambdaFunction.internalValue = value.lambdaFunction;
      this._replacePrimaryKey.internalValue = value.replacePrimaryKey;
      this._sql.internalValue = value.sql;
      this._tableSplitter.internalValue = value.tableSplitter;
    }
  }

  // convert_to_string - computed: false, optional: true, required: false
  private _convertToString = new TransferTransformationTransformersConvertToStringOutputReference(this, "convert_to_string");
  public get convertToString() {
    return this._convertToString;
  }
  public putConvertToString(value: TransferTransformationTransformersConvertToString) {
    this._convertToString.internalValue = value;
  }
  public resetConvertToString() {
    this._convertToString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertToStringInput() {
    return this._convertToString.internalValue;
  }

  // dbt - computed: false, optional: true, required: false
  private _dbt = new TransferTransformationTransformersDbtOutputReference(this, "dbt");
  public get dbt() {
    return this._dbt;
  }
  public putDbt(value: TransferTransformationTransformersDbt) {
    this._dbt.internalValue = value;
  }
  public resetDbt() {
    this._dbt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtInput() {
    return this._dbt.internalValue;
  }

  // lambda_function - computed: false, optional: true, required: false
  private _lambdaFunction = new TransferTransformationTransformersLambdaFunctionOutputReference(this, "lambda_function");
  public get lambdaFunction() {
    return this._lambdaFunction;
  }
  public putLambdaFunction(value: TransferTransformationTransformersLambdaFunction) {
    this._lambdaFunction.internalValue = value;
  }
  public resetLambdaFunction() {
    this._lambdaFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionInput() {
    return this._lambdaFunction.internalValue;
  }

  // replace_primary_key - computed: false, optional: true, required: false
  private _replacePrimaryKey = new TransferTransformationTransformersReplacePrimaryKeyOutputReference(this, "replace_primary_key");
  public get replacePrimaryKey() {
    return this._replacePrimaryKey;
  }
  public putReplacePrimaryKey(value: TransferTransformationTransformersReplacePrimaryKey) {
    this._replacePrimaryKey.internalValue = value;
  }
  public resetReplacePrimaryKey() {
    this._replacePrimaryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrimaryKeyInput() {
    return this._replacePrimaryKey.internalValue;
  }

  // sql - computed: false, optional: true, required: false
  private _sql = new TransferTransformationTransformersSqlOutputReference(this, "sql");
  public get sql() {
    return this._sql;
  }
  public putSql(value: TransferTransformationTransformersSql) {
    this._sql.internalValue = value;
  }
  public resetSql() {
    this._sql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql.internalValue;
  }

  // table_splitter - computed: false, optional: true, required: false
  private _tableSplitter = new TransferTransformationTransformersTableSplitterOutputReference(this, "table_splitter");
  public get tableSplitter() {
    return this._tableSplitter;
  }
  public putTableSplitter(value: TransferTransformationTransformersTableSplitter) {
    this._tableSplitter.internalValue = value;
  }
  public resetTableSplitter() {
    this._tableSplitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableSplitterInput() {
    return this._tableSplitter.internalValue;
  }
}

export class TransferTransformationTransformersList extends cdktf.ComplexList {
  public internalValue? : TransferTransformationTransformers[] | cdktf.IResolvable

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
  public get(index: number): TransferTransformationTransformersOutputReference {
    return new TransferTransformationTransformersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#transformers Transfer#transformers}
  */
  readonly transformers?: TransferTransformationTransformers[] | cdktf.IResolvable;
}

export function transferTransformationToTerraform(struct?: TransferTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformers: cdktf.listMapper(transferTransformationTransformersToTerraform, false)(struct!.transformers),
  }
}


export function transferTransformationToHclTerraform(struct?: TransferTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformers: {
      value: cdktf.listMapperHcl(transferTransformationTransformersToHclTerraform, false)(struct!.transformers),
      isBlock: true,
      type: "list",
      storageClassType: "TransferTransformationTransformersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transformers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transformers.internalValue = value.transformers;
    }
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers = new TransferTransformationTransformersList(this, "transformers", false);
  public get transformers() {
    return this._transformers;
  }
  public putTransformers(value: TransferTransformationTransformers[] | cdktf.IResolvable) {
    this._transformers.internalValue = value;
  }
  public resetTransformers() {
    this._transformers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer doublecloud_transfer}
*/
export class Transfer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud_transfer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Transfer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Transfer to import
  * @param importFromId The id of the existing Transfer that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Transfer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud_transfer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/transfer doublecloud_transfer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferConfig
  */
  public constructor(scope: Construct, id: string, config: TransferConfig) {
    super(scope, id, {
      terraformResourceType: 'doublecloud_transfer',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activated = config.activated;
    this._dataObjects = config.dataObjects;
    this._description = config.description;
    this._name = config.name;
    this._projectId = config.projectId;
    this._runtime.internalValue = config.runtime;
    this._source = config.source;
    this._target = config.target;
    this._transformation.internalValue = config.transformation;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: true, optional: true, required: false
  private _activated?: boolean | cdktf.IResolvable; 
  public get activated() {
    return this.getBooleanAttribute('activated');
  }
  public set activated(value: boolean | cdktf.IResolvable) {
    this._activated = value;
  }
  public resetActivated() {
    this._activated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated;
  }

  // data_objects - computed: false, optional: true, required: false
  private _dataObjects?: string[]; 
  public get dataObjects() {
    return this.getListAttribute('data_objects');
  }
  public set dataObjects(value: string[]) {
    this._dataObjects = value;
  }
  public resetDataObjects() {
    this._dataObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataObjectsInput() {
    return this._dataObjects;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new TransferRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: TransferRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new TransferTransformationOutputReference(this, "transformation");
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: TransferTransformation) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activated: cdktf.booleanToTerraform(this._activated),
      data_objects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataObjects),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      runtime: transferRuntimeToTerraform(this._runtime.internalValue),
      source: cdktf.stringToTerraform(this._source),
      target: cdktf.stringToTerraform(this._target),
      transformation: transferTransformationToTerraform(this._transformation.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activated: {
        value: cdktf.booleanToHclTerraform(this._activated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_objects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataObjects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: transferRuntimeToHclTerraform(this._runtime.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransferRuntime",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transformation: {
        value: transferTransformationToHclTerraform(this._transformation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransferTransformation",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
