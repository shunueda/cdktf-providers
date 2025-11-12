// https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Atlas HCL configuration content. Use abspath(path.module) when referencing local files or directories, for example: `file://${abspath(path.module)}/migrations`. See https://atlasgo.io/hcl/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#config Schema#config}
  */
  readonly config?: string;
  /**
  * The url of the dev-db see https://atlasgo.io/cli/url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#dev_url Schema#dev_url}
  */
  readonly devUrl?: string;
  /**
  * The name of the environment used for reporting runs to Atlas Cloud. Default: tf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#env_name Schema#env_name}
  */
  readonly envName?: string;
  /**
  * Filter out resources matching the given glob pattern. See https://atlasgo.io/declarative/inspect#exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#exclude Schema#exclude}
  */
  readonly exclude?: string[];
  /**
  * The schema definition for the database (preferably normalized - see `atlas_schema` data source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#hcl Schema#hcl}
  */
  readonly hcl: string;
  /**
  * Include only resources that match the given glob pattern. See https://atlasgo.io/declarative/inspect#include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#include Schema#include}
  */
  readonly include?: string[];
  /**
  * The transaction mode to use when applying the schema. See https://atlasgo.io/versioned/apply#transaction-configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#tx_mode Schema#tx_mode}
  */
  readonly txMode?: string;
  /**
  * The url of the database see https://atlasgo.io/cli/url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#url Schema#url}
  */
  readonly url?: string;
  /**
  * Stringify JSON object containing variables to be used inside the Atlas configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#variables Schema#variables}
  */
  readonly variables?: string;
  /**
  * cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#cloud Schema#cloud}
  */
  readonly cloud?: SchemaCloud;
  /**
  * diff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#diff Schema#diff}
  */
  readonly diff?: SchemaDiff;
  /**
  * lint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#lint Schema#lint}
  */
  readonly lint?: SchemaLint;
}
export interface SchemaCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#project Schema#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#repo Schema#repo}
  */
  readonly repo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#token Schema#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#url Schema#url}
  */
  readonly url?: string;
}

export function schemaCloudToTerraform(struct?: SchemaCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    repo: cdktf.stringToTerraform(struct!.repo),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function schemaCloudToHclTerraform(struct?: SchemaCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SchemaCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchemaCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._project = undefined;
      this._repo = undefined;
      this._token = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._project = value.project;
      this._repo = value.repo;
      this._token = value.token;
      this._url = value.url;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SchemaDiffConcurrentIndex {
  /**
  * Whether to create indexes concurrently
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#create Schema#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Whether to drop indexes concurrently
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#drop Schema#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
}

export function schemaDiffConcurrentIndexToTerraform(struct?: SchemaDiffConcurrentIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    drop: cdktf.booleanToTerraform(struct!.drop),
  }
}


export function schemaDiffConcurrentIndexToHclTerraform(struct?: SchemaDiffConcurrentIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaDiffConcurrentIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchemaDiffConcurrentIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaDiffConcurrentIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._drop = value.drop;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface SchemaDiffSkip {
  /**
  * Whether to skip adding columns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#add_column Schema#add_column}
  */
  readonly addColumn?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip adding foreign keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#add_foreign_key Schema#add_foreign_key}
  */
  readonly addForeignKey?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip adding indexes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#add_index Schema#add_index}
  */
  readonly addIndex?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip adding schemas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#add_schema Schema#add_schema}
  */
  readonly addSchema?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip adding tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#add_table Schema#add_table}
  */
  readonly addTable?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip dropping columns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#drop_column Schema#drop_column}
  */
  readonly dropColumn?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip dropping foreign keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#drop_foreign_key Schema#drop_foreign_key}
  */
  readonly dropForeignKey?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip dropping indexes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#drop_index Schema#drop_index}
  */
  readonly dropIndex?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip dropping schemas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#drop_schema Schema#drop_schema}
  */
  readonly dropSchema?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip dropping tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#drop_table Schema#drop_table}
  */
  readonly dropTable?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip modifying columns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#modify_column Schema#modify_column}
  */
  readonly modifyColumn?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip modifying foreign keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#modify_foreign_key Schema#modify_foreign_key}
  */
  readonly modifyForeignKey?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip modifying indexes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#modify_index Schema#modify_index}
  */
  readonly modifyIndex?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip modifying schemas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#modify_schema Schema#modify_schema}
  */
  readonly modifySchema?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip modifying tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#modify_table Schema#modify_table}
  */
  readonly modifyTable?: boolean | cdktf.IResolvable;
}

export function schemaDiffSkipToTerraform(struct?: SchemaDiffSkip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_column: cdktf.booleanToTerraform(struct!.addColumn),
    add_foreign_key: cdktf.booleanToTerraform(struct!.addForeignKey),
    add_index: cdktf.booleanToTerraform(struct!.addIndex),
    add_schema: cdktf.booleanToTerraform(struct!.addSchema),
    add_table: cdktf.booleanToTerraform(struct!.addTable),
    drop_column: cdktf.booleanToTerraform(struct!.dropColumn),
    drop_foreign_key: cdktf.booleanToTerraform(struct!.dropForeignKey),
    drop_index: cdktf.booleanToTerraform(struct!.dropIndex),
    drop_schema: cdktf.booleanToTerraform(struct!.dropSchema),
    drop_table: cdktf.booleanToTerraform(struct!.dropTable),
    modify_column: cdktf.booleanToTerraform(struct!.modifyColumn),
    modify_foreign_key: cdktf.booleanToTerraform(struct!.modifyForeignKey),
    modify_index: cdktf.booleanToTerraform(struct!.modifyIndex),
    modify_schema: cdktf.booleanToTerraform(struct!.modifySchema),
    modify_table: cdktf.booleanToTerraform(struct!.modifyTable),
  }
}


export function schemaDiffSkipToHclTerraform(struct?: SchemaDiffSkip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_column: {
      value: cdktf.booleanToHclTerraform(struct!.addColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_foreign_key: {
      value: cdktf.booleanToHclTerraform(struct!.addForeignKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_index: {
      value: cdktf.booleanToHclTerraform(struct!.addIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_schema: {
      value: cdktf.booleanToHclTerraform(struct!.addSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_table: {
      value: cdktf.booleanToHclTerraform(struct!.addTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_column: {
      value: cdktf.booleanToHclTerraform(struct!.dropColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_foreign_key: {
      value: cdktf.booleanToHclTerraform(struct!.dropForeignKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_index: {
      value: cdktf.booleanToHclTerraform(struct!.dropIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_schema: {
      value: cdktf.booleanToHclTerraform(struct!.dropSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_table: {
      value: cdktf.booleanToHclTerraform(struct!.dropTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_column: {
      value: cdktf.booleanToHclTerraform(struct!.modifyColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_foreign_key: {
      value: cdktf.booleanToHclTerraform(struct!.modifyForeignKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_index: {
      value: cdktf.booleanToHclTerraform(struct!.modifyIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_schema: {
      value: cdktf.booleanToHclTerraform(struct!.modifySchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_table: {
      value: cdktf.booleanToHclTerraform(struct!.modifyTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaDiffSkipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchemaDiffSkip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addColumn = this._addColumn;
    }
    if (this._addForeignKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addForeignKey = this._addForeignKey;
    }
    if (this._addIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.addIndex = this._addIndex;
    }
    if (this._addSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSchema = this._addSchema;
    }
    if (this._addTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addTable = this._addTable;
    }
    if (this._dropColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropColumn = this._dropColumn;
    }
    if (this._dropForeignKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropForeignKey = this._dropForeignKey;
    }
    if (this._dropIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropIndex = this._dropIndex;
    }
    if (this._dropSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropSchema = this._dropSchema;
    }
    if (this._dropTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropTable = this._dropTable;
    }
    if (this._modifyColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyColumn = this._modifyColumn;
    }
    if (this._modifyForeignKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyForeignKey = this._modifyForeignKey;
    }
    if (this._modifyIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyIndex = this._modifyIndex;
    }
    if (this._modifySchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifySchema = this._modifySchema;
    }
    if (this._modifyTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyTable = this._modifyTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaDiffSkip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addColumn = undefined;
      this._addForeignKey = undefined;
      this._addIndex = undefined;
      this._addSchema = undefined;
      this._addTable = undefined;
      this._dropColumn = undefined;
      this._dropForeignKey = undefined;
      this._dropIndex = undefined;
      this._dropSchema = undefined;
      this._dropTable = undefined;
      this._modifyColumn = undefined;
      this._modifyForeignKey = undefined;
      this._modifyIndex = undefined;
      this._modifySchema = undefined;
      this._modifyTable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addColumn = value.addColumn;
      this._addForeignKey = value.addForeignKey;
      this._addIndex = value.addIndex;
      this._addSchema = value.addSchema;
      this._addTable = value.addTable;
      this._dropColumn = value.dropColumn;
      this._dropForeignKey = value.dropForeignKey;
      this._dropIndex = value.dropIndex;
      this._dropSchema = value.dropSchema;
      this._dropTable = value.dropTable;
      this._modifyColumn = value.modifyColumn;
      this._modifyForeignKey = value.modifyForeignKey;
      this._modifyIndex = value.modifyIndex;
      this._modifySchema = value.modifySchema;
      this._modifyTable = value.modifyTable;
    }
  }

  // add_column - computed: false, optional: true, required: false
  private _addColumn?: boolean | cdktf.IResolvable; 
  public get addColumn() {
    return this.getBooleanAttribute('add_column');
  }
  public set addColumn(value: boolean | cdktf.IResolvable) {
    this._addColumn = value;
  }
  public resetAddColumn() {
    this._addColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addColumnInput() {
    return this._addColumn;
  }

  // add_foreign_key - computed: false, optional: true, required: false
  private _addForeignKey?: boolean | cdktf.IResolvable; 
  public get addForeignKey() {
    return this.getBooleanAttribute('add_foreign_key');
  }
  public set addForeignKey(value: boolean | cdktf.IResolvable) {
    this._addForeignKey = value;
  }
  public resetAddForeignKey() {
    this._addForeignKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addForeignKeyInput() {
    return this._addForeignKey;
  }

  // add_index - computed: false, optional: true, required: false
  private _addIndex?: boolean | cdktf.IResolvable; 
  public get addIndex() {
    return this.getBooleanAttribute('add_index');
  }
  public set addIndex(value: boolean | cdktf.IResolvable) {
    this._addIndex = value;
  }
  public resetAddIndex() {
    this._addIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addIndexInput() {
    return this._addIndex;
  }

  // add_schema - computed: false, optional: true, required: false
  private _addSchema?: boolean | cdktf.IResolvable; 
  public get addSchema() {
    return this.getBooleanAttribute('add_schema');
  }
  public set addSchema(value: boolean | cdktf.IResolvable) {
    this._addSchema = value;
  }
  public resetAddSchema() {
    this._addSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSchemaInput() {
    return this._addSchema;
  }

  // add_table - computed: false, optional: true, required: false
  private _addTable?: boolean | cdktf.IResolvable; 
  public get addTable() {
    return this.getBooleanAttribute('add_table');
  }
  public set addTable(value: boolean | cdktf.IResolvable) {
    this._addTable = value;
  }
  public resetAddTable() {
    this._addTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addTableInput() {
    return this._addTable;
  }

  // drop_column - computed: false, optional: true, required: false
  private _dropColumn?: boolean | cdktf.IResolvable; 
  public get dropColumn() {
    return this.getBooleanAttribute('drop_column');
  }
  public set dropColumn(value: boolean | cdktf.IResolvable) {
    this._dropColumn = value;
  }
  public resetDropColumn() {
    this._dropColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropColumnInput() {
    return this._dropColumn;
  }

  // drop_foreign_key - computed: false, optional: true, required: false
  private _dropForeignKey?: boolean | cdktf.IResolvable; 
  public get dropForeignKey() {
    return this.getBooleanAttribute('drop_foreign_key');
  }
  public set dropForeignKey(value: boolean | cdktf.IResolvable) {
    this._dropForeignKey = value;
  }
  public resetDropForeignKey() {
    this._dropForeignKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropForeignKeyInput() {
    return this._dropForeignKey;
  }

  // drop_index - computed: false, optional: true, required: false
  private _dropIndex?: boolean | cdktf.IResolvable; 
  public get dropIndex() {
    return this.getBooleanAttribute('drop_index');
  }
  public set dropIndex(value: boolean | cdktf.IResolvable) {
    this._dropIndex = value;
  }
  public resetDropIndex() {
    this._dropIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIndexInput() {
    return this._dropIndex;
  }

  // drop_schema - computed: false, optional: true, required: false
  private _dropSchema?: boolean | cdktf.IResolvable; 
  public get dropSchema() {
    return this.getBooleanAttribute('drop_schema');
  }
  public set dropSchema(value: boolean | cdktf.IResolvable) {
    this._dropSchema = value;
  }
  public resetDropSchema() {
    this._dropSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropSchemaInput() {
    return this._dropSchema;
  }

  // drop_table - computed: false, optional: true, required: false
  private _dropTable?: boolean | cdktf.IResolvable; 
  public get dropTable() {
    return this.getBooleanAttribute('drop_table');
  }
  public set dropTable(value: boolean | cdktf.IResolvable) {
    this._dropTable = value;
  }
  public resetDropTable() {
    this._dropTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropTableInput() {
    return this._dropTable;
  }

  // modify_column - computed: false, optional: true, required: false
  private _modifyColumn?: boolean | cdktf.IResolvable; 
  public get modifyColumn() {
    return this.getBooleanAttribute('modify_column');
  }
  public set modifyColumn(value: boolean | cdktf.IResolvable) {
    this._modifyColumn = value;
  }
  public resetModifyColumn() {
    this._modifyColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyColumnInput() {
    return this._modifyColumn;
  }

  // modify_foreign_key - computed: false, optional: true, required: false
  private _modifyForeignKey?: boolean | cdktf.IResolvable; 
  public get modifyForeignKey() {
    return this.getBooleanAttribute('modify_foreign_key');
  }
  public set modifyForeignKey(value: boolean | cdktf.IResolvable) {
    this._modifyForeignKey = value;
  }
  public resetModifyForeignKey() {
    this._modifyForeignKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyForeignKeyInput() {
    return this._modifyForeignKey;
  }

  // modify_index - computed: false, optional: true, required: false
  private _modifyIndex?: boolean | cdktf.IResolvable; 
  public get modifyIndex() {
    return this.getBooleanAttribute('modify_index');
  }
  public set modifyIndex(value: boolean | cdktf.IResolvable) {
    this._modifyIndex = value;
  }
  public resetModifyIndex() {
    this._modifyIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyIndexInput() {
    return this._modifyIndex;
  }

  // modify_schema - computed: false, optional: true, required: false
  private _modifySchema?: boolean | cdktf.IResolvable; 
  public get modifySchema() {
    return this.getBooleanAttribute('modify_schema');
  }
  public set modifySchema(value: boolean | cdktf.IResolvable) {
    this._modifySchema = value;
  }
  public resetModifySchema() {
    this._modifySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifySchemaInput() {
    return this._modifySchema;
  }

  // modify_table - computed: false, optional: true, required: false
  private _modifyTable?: boolean | cdktf.IResolvable; 
  public get modifyTable() {
    return this.getBooleanAttribute('modify_table');
  }
  public set modifyTable(value: boolean | cdktf.IResolvable) {
    this._modifyTable = value;
  }
  public resetModifyTable() {
    this._modifyTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTableInput() {
    return this._modifyTable;
  }
}
export interface SchemaDiff {
  /**
  * concurrent_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#concurrent_index Schema#concurrent_index}
  */
  readonly concurrentIndex?: SchemaDiffConcurrentIndex;
  /**
  * skip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#skip Schema#skip}
  */
  readonly skip?: SchemaDiffSkip;
}

export function schemaDiffToTerraform(struct?: SchemaDiff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_index: schemaDiffConcurrentIndexToTerraform(struct!.concurrentIndex),
    skip: schemaDiffSkipToTerraform(struct!.skip),
  }
}


export function schemaDiffToHclTerraform(struct?: SchemaDiff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_index: {
      value: schemaDiffConcurrentIndexToHclTerraform(struct!.concurrentIndex),
      isBlock: true,
      type: "struct",
      storageClassType: "SchemaDiffConcurrentIndex",
    },
    skip: {
      value: schemaDiffSkipToHclTerraform(struct!.skip),
      isBlock: true,
      type: "struct",
      storageClassType: "SchemaDiffSkip",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaDiffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchemaDiff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentIndex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentIndex = this._concurrentIndex?.internalValue;
    }
    if (this._skip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaDiff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrentIndex.internalValue = undefined;
      this._skip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrentIndex.internalValue = value.concurrentIndex;
      this._skip.internalValue = value.skip;
    }
  }

  // concurrent_index - computed: false, optional: true, required: false
  private _concurrentIndex = new SchemaDiffConcurrentIndexOutputReference(this, "concurrent_index");
  public get concurrentIndex() {
    return this._concurrentIndex;
  }
  public putConcurrentIndex(value: SchemaDiffConcurrentIndex) {
    this._concurrentIndex.internalValue = value;
  }
  public resetConcurrentIndex() {
    this._concurrentIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentIndexInput() {
    return this._concurrentIndex.internalValue;
  }

  // skip - computed: false, optional: true, required: false
  private _skip = new SchemaDiffSkipOutputReference(this, "skip");
  public get skip() {
    return this._skip;
  }
  public putSkip(value: SchemaDiffSkip) {
    this._skip.internalValue = value;
  }
  public resetSkip() {
    this._skip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip.internalValue;
  }
}
export interface SchemaLint {
  /**
  * The review policy. One of `ALWAYS`, `WARNING` and `ERROR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#review Schema#review}
  */
  readonly review?: string;
  /**
  * The review timeout. The time to wait for the review to be approved. Valid time unit are 's' (seconds), 'm' (minutes), 'h' (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#review_timeout Schema#review_timeout}
  */
  readonly reviewTimeout?: string;
}

export function schemaLintToTerraform(struct?: SchemaLint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    review: cdktf.stringToTerraform(struct!.review),
    review_timeout: cdktf.stringToTerraform(struct!.reviewTimeout),
  }
}


export function schemaLintToHclTerraform(struct?: SchemaLint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    review: {
      value: cdktf.stringToHclTerraform(struct!.review),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    review_timeout: {
      value: cdktf.stringToHclTerraform(struct!.reviewTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaLintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchemaLint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._review !== undefined) {
      hasAnyValues = true;
      internalValueResult.review = this._review;
    }
    if (this._reviewTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewTimeout = this._reviewTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaLint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._review = undefined;
      this._reviewTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._review = value.review;
      this._reviewTimeout = value.reviewTimeout;
    }
  }

  // review - computed: false, optional: true, required: false
  private _review?: string; 
  public get review() {
    return this.getStringAttribute('review');
  }
  public set review(value: string) {
    this._review = value;
  }
  public resetReview() {
    this._review = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewInput() {
    return this._review;
  }

  // review_timeout - computed: false, optional: true, required: false
  private _reviewTimeout?: string; 
  public get reviewTimeout() {
    return this.getStringAttribute('review_timeout');
  }
  public set reviewTimeout(value: string) {
    this._reviewTimeout = value;
  }
  public resetReviewTimeout() {
    this._reviewTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewTimeoutInput() {
    return this._reviewTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema atlas_schema}
*/
export class Schema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "atlas_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Schema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schema to import
  * @param importFromId The id of the existing Schema that should be imported. Refer to the {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "atlas_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/schema atlas_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'atlas_schema',
      terraformGeneratorMetadata: {
        providerName: 'atlas',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._devUrl = config.devUrl;
    this._envName = config.envName;
    this._exclude = config.exclude;
    this._hcl = config.hcl;
    this._include = config.include;
    this._txMode = config.txMode;
    this._url = config.url;
    this._variables = config.variables;
    this._cloud.internalValue = config.cloud;
    this._diff.internalValue = config.diff;
    this._lint.internalValue = config.lint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // dev_url - computed: false, optional: true, required: false
  private _devUrl?: string; 
  public get devUrl() {
    return this.getStringAttribute('dev_url');
  }
  public set devUrl(value: string) {
    this._devUrl = value;
  }
  public resetDevUrl() {
    this._devUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devUrlInput() {
    return this._devUrl;
  }

  // env_name - computed: false, optional: true, required: false
  private _envName?: string; 
  public get envName() {
    return this.getStringAttribute('env_name');
  }
  public set envName(value: string) {
    this._envName = value;
  }
  public resetEnvName() {
    this._envName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envNameInput() {
    return this._envName;
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

  // hcl - computed: false, optional: false, required: true
  private _hcl?: string; 
  public get hcl() {
    return this.getStringAttribute('hcl');
  }
  public set hcl(value: string) {
    this._hcl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hclInput() {
    return this._hcl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tx_mode - computed: false, optional: true, required: false
  private _txMode?: string; 
  public get txMode() {
    return this.getStringAttribute('tx_mode');
  }
  public set txMode(value: string) {
    this._txMode = value;
  }
  public resetTxMode() {
    this._txMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txModeInput() {
    return this._txMode;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud = new SchemaCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: SchemaCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // diff - computed: false, optional: true, required: false
  private _diff = new SchemaDiffOutputReference(this, "diff");
  public get diff() {
    return this._diff;
  }
  public putDiff(value: SchemaDiff) {
    this._diff.internalValue = value;
  }
  public resetDiff() {
    this._diff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffInput() {
    return this._diff.internalValue;
  }

  // lint - computed: false, optional: true, required: false
  private _lint = new SchemaLintOutputReference(this, "lint");
  public get lint() {
    return this._lint;
  }
  public putLint(value: SchemaLint) {
    this._lint.internalValue = value;
  }
  public resetLint() {
    this._lint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lintInput() {
    return this._lint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      dev_url: cdktf.stringToTerraform(this._devUrl),
      env_name: cdktf.stringToTerraform(this._envName),
      exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exclude),
      hcl: cdktf.stringToTerraform(this._hcl),
      include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._include),
      tx_mode: cdktf.stringToTerraform(this._txMode),
      url: cdktf.stringToTerraform(this._url),
      variables: cdktf.stringToTerraform(this._variables),
      cloud: schemaCloudToTerraform(this._cloud.internalValue),
      diff: schemaDiffToTerraform(this._diff.internalValue),
      lint: schemaLintToTerraform(this._lint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_url: {
        value: cdktf.stringToHclTerraform(this._devUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_name: {
        value: cdktf.stringToHclTerraform(this._envName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exclude),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hcl: {
        value: cdktf.stringToHclTerraform(this._hcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._include),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tx_mode: {
        value: cdktf.stringToHclTerraform(this._txMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables: {
        value: cdktf.stringToHclTerraform(this._variables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: schemaCloudToHclTerraform(this._cloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchemaCloud",
      },
      diff: {
        value: schemaDiffToHclTerraform(this._diff.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchemaDiff",
      },
      lint: {
        value: schemaLintToHclTerraform(this._lint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchemaLint",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
