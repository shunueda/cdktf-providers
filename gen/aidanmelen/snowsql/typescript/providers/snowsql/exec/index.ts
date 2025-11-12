// https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#id Exec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the resource. Defaults to random ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#name Exec#name}
  */
  readonly name?: string;
  /**
  * create block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#create Exec#create}
  */
  readonly create: ExecCreate;
  /**
  * delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#delete Exec#delete}
  */
  readonly delete: ExecDelete;
  /**
  * read block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#read Exec#read}
  */
  readonly read?: ExecRead;
  /**
  * update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#update Exec#update}
  */
  readonly update?: ExecUpdate;
}
export interface ExecCreate {
  /**
  * The number of SnowSQL statements to be executed. This can help reduce the risk of SQL injection attacks. Defaults to `null` indicating that there is no limit on the number of statements (`0` and `-1` also indicate no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#number_of_statements Exec#number_of_statements}
  */
  readonly numberOfStatements?: number;
  /**
  * The number of SnowSQL statements to be executed. This can help reduce the risk of SQL injection attacks. Defaults to `null` indicating that there is no limit on the number of statements (`0` and `-1` also indicate no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#statements Exec#statements}
  */
  readonly statements: string;
}

export function execCreateToTerraform(struct?: ExecCreateOutputReference | ExecCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_statements: cdktf.numberToTerraform(struct!.numberOfStatements),
    statements: cdktf.stringToTerraform(struct!.statements),
  }
}


export function execCreateToHclTerraform(struct?: ExecCreateOutputReference | ExecCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_statements: {
      value: cdktf.numberToHclTerraform(struct!.numberOfStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statements: {
      value: cdktf.stringToHclTerraform(struct!.statements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExecCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExecCreate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfStatements = this._numberOfStatements;
    }
    if (this._statements !== undefined) {
      hasAnyValues = true;
      internalValueResult.statements = this._statements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExecCreate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfStatements = undefined;
      this._statements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfStatements = value.numberOfStatements;
      this._statements = value.statements;
    }
  }

  // number_of_statements - computed: true, optional: true, required: false
  private _numberOfStatements?: number; 
  public get numberOfStatements() {
    return this.getNumberAttribute('number_of_statements');
  }
  public set numberOfStatements(value: number) {
    this._numberOfStatements = value;
  }
  public resetNumberOfStatements() {
    this._numberOfStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfStatementsInput() {
    return this._numberOfStatements;
  }

  // statements - computed: false, optional: false, required: true
  private _statements?: string; 
  public get statements() {
    return this.getStringAttribute('statements');
  }
  public set statements(value: string) {
    this._statements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements;
  }
}
export interface ExecDelete {
  /**
  * The number of SnowSQL statements to be executed. This can help reduce the risk of SQL injection attacks. Defaults to `null` indicating that there is no limit on the number of statements (`0` and `-1` also indicate no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#number_of_statements Exec#number_of_statements}
  */
  readonly numberOfStatements?: number;
  /**
  * A string containing one or many SnowSQL statements separated by semicolons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#statements Exec#statements}
  */
  readonly statements: string;
}

export function execDeleteToTerraform(struct?: ExecDeleteOutputReference | ExecDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_statements: cdktf.numberToTerraform(struct!.numberOfStatements),
    statements: cdktf.stringToTerraform(struct!.statements),
  }
}


export function execDeleteToHclTerraform(struct?: ExecDeleteOutputReference | ExecDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_statements: {
      value: cdktf.numberToHclTerraform(struct!.numberOfStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statements: {
      value: cdktf.stringToHclTerraform(struct!.statements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExecDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExecDelete | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfStatements = this._numberOfStatements;
    }
    if (this._statements !== undefined) {
      hasAnyValues = true;
      internalValueResult.statements = this._statements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExecDelete | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfStatements = undefined;
      this._statements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfStatements = value.numberOfStatements;
      this._statements = value.statements;
    }
  }

  // number_of_statements - computed: true, optional: true, required: false
  private _numberOfStatements?: number; 
  public get numberOfStatements() {
    return this.getNumberAttribute('number_of_statements');
  }
  public set numberOfStatements(value: number) {
    this._numberOfStatements = value;
  }
  public resetNumberOfStatements() {
    this._numberOfStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfStatementsInput() {
    return this._numberOfStatements;
  }

  // statements - computed: false, optional: false, required: true
  private _statements?: string; 
  public get statements() {
    return this.getStringAttribute('statements');
  }
  public set statements(value: string) {
    this._statements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements;
  }
}
export interface ExecRead {
  /**
  * The number of SnowSQL statements to be executed. This can help reduce the risk of SQL injection attacks. Defaults to `null` indicating that there is no limit on the number of statements (`0` and `-1` also indicate no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#number_of_statements Exec#number_of_statements}
  */
  readonly numberOfStatements?: number;
  /**
  * A string containing one or many SnowSQL statements separated by semicolons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#statements Exec#statements}
  */
  readonly statements: string;
}

export function execReadToTerraform(struct?: ExecReadOutputReference | ExecRead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_statements: cdktf.numberToTerraform(struct!.numberOfStatements),
    statements: cdktf.stringToTerraform(struct!.statements),
  }
}


export function execReadToHclTerraform(struct?: ExecReadOutputReference | ExecRead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_statements: {
      value: cdktf.numberToHclTerraform(struct!.numberOfStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statements: {
      value: cdktf.stringToHclTerraform(struct!.statements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExecReadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExecRead | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfStatements = this._numberOfStatements;
    }
    if (this._statements !== undefined) {
      hasAnyValues = true;
      internalValueResult.statements = this._statements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExecRead | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfStatements = undefined;
      this._statements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfStatements = value.numberOfStatements;
      this._statements = value.statements;
    }
  }

  // number_of_statements - computed: true, optional: true, required: false
  private _numberOfStatements?: number; 
  public get numberOfStatements() {
    return this.getNumberAttribute('number_of_statements');
  }
  public set numberOfStatements(value: number) {
    this._numberOfStatements = value;
  }
  public resetNumberOfStatements() {
    this._numberOfStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfStatementsInput() {
    return this._numberOfStatements;
  }

  // statements - computed: false, optional: false, required: true
  private _statements?: string; 
  public get statements() {
    return this.getStringAttribute('statements');
  }
  public set statements(value: string) {
    this._statements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements;
  }
}
export interface ExecUpdate {
  /**
  * The number of SnowSQL statements to be executed. This can help reduce the risk of SQL injection attacks. Defaults to `null` indicating that there is no limit on the number of statements (`0` and `-1` also indicate no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#number_of_statements Exec#number_of_statements}
  */
  readonly numberOfStatements?: number;
  /**
  * A string containing one or many SnowSQL statements separated by semicolons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#statements Exec#statements}
  */
  readonly statements: string;
}

export function execUpdateToTerraform(struct?: ExecUpdateOutputReference | ExecUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_statements: cdktf.numberToTerraform(struct!.numberOfStatements),
    statements: cdktf.stringToTerraform(struct!.statements),
  }
}


export function execUpdateToHclTerraform(struct?: ExecUpdateOutputReference | ExecUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_statements: {
      value: cdktf.numberToHclTerraform(struct!.numberOfStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statements: {
      value: cdktf.stringToHclTerraform(struct!.statements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExecUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExecUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfStatements = this._numberOfStatements;
    }
    if (this._statements !== undefined) {
      hasAnyValues = true;
      internalValueResult.statements = this._statements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExecUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfStatements = undefined;
      this._statements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfStatements = value.numberOfStatements;
      this._statements = value.statements;
    }
  }

  // number_of_statements - computed: true, optional: true, required: false
  private _numberOfStatements?: number; 
  public get numberOfStatements() {
    return this.getNumberAttribute('number_of_statements');
  }
  public set numberOfStatements(value: number) {
    this._numberOfStatements = value;
  }
  public resetNumberOfStatements() {
    this._numberOfStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfStatementsInput() {
    return this._numberOfStatements;
  }

  // statements - computed: false, optional: false, required: true
  private _statements?: string; 
  public get statements() {
    return this.getStringAttribute('statements');
  }
  public set statements(value: string) {
    this._statements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec snowsql_exec}
*/
export class Exec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowsql_exec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Exec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Exec to import
  * @param importFromId The id of the existing Exec that should be imported. Refer to the {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Exec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowsql_exec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/resources/exec snowsql_exec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExecConfig
  */
  public constructor(scope: Construct, id: string, config: ExecConfig) {
    super(scope, id, {
      terraformResourceType: 'snowsql_exec',
      terraformGeneratorMetadata: {
        providerName: 'snowsql',
        providerVersion: '1.3.3',
        providerVersionConstraint: '1.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._create.internalValue = config.create;
    this._delete.internalValue = config.delete;
    this._read.internalValue = config.read;
    this._update.internalValue = config.update;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // read_results - computed: true, optional: false, required: false
  public get readResults() {
    return this.getStringAttribute('read_results');
  }

  // create - computed: false, optional: false, required: true
  private _create = new ExecCreateOutputReference(this, "create");
  public get create() {
    return this._create;
  }
  public putCreate(value: ExecCreate) {
    this._create.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }

  // delete - computed: false, optional: false, required: true
  private _delete = new ExecDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: ExecDelete) {
    this._delete.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // read - computed: false, optional: true, required: false
  private _read = new ExecReadOutputReference(this, "read");
  public get read() {
    return this._read;
  }
  public putRead(value: ExecRead) {
    this._read.internalValue = value;
  }
  public resetRead() {
    this._read.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read.internalValue;
  }

  // update - computed: false, optional: true, required: false
  private _update = new ExecUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
  public putUpdate(value: ExecUpdate) {
    this._update.internalValue = value;
  }
  public resetUpdate() {
    this._update.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      create: execCreateToTerraform(this._create.internalValue),
      delete: execDeleteToTerraform(this._delete.internalValue),
      read: execReadToTerraform(this._read.internalValue),
      update: execUpdateToTerraform(this._update.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      create: {
        value: execCreateToHclTerraform(this._create.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExecCreateList",
      },
      delete: {
        value: execDeleteToHclTerraform(this._delete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExecDeleteList",
      },
      read: {
        value: execReadToHclTerraform(this._read.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExecReadList",
      },
      update: {
        value: execUpdateToHclTerraform(this._update.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExecUpdateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
