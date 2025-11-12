// https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoreweaveObjectStorageBucketPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional policy identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#id DataCoreweaveObjectStorageBucketPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The policy version, e.g. `"2012-10-17"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#version DataCoreweaveObjectStorageBucketPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#statement DataCoreweaveObjectStorageBucketPolicyDocument#statement}
  */
  readonly statement?: DataCoreweaveObjectStorageBucketPolicyDocumentStatement[] | cdktf.IResolvable;
}
export interface DataCoreweaveObjectStorageBucketPolicyDocumentStatement {
  /**
  * List of action strings, e.g. `["s3:PutObject"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#action DataCoreweaveObjectStorageBucketPolicyDocument#action}
  */
  readonly action?: string[];
  /**
  * Map of condition operators to JSON expressions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#condition DataCoreweaveObjectStorageBucketPolicyDocument#condition}
  */
  readonly condition?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * `Allow` or `Deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#effect DataCoreweaveObjectStorageBucketPolicyDocument#effect}
  */
  readonly effect?: string;
  /**
  * Map of principal types to ARNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#principal DataCoreweaveObjectStorageBucketPolicyDocument#principal}
  */
  readonly principal?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * List of resource ARNs, e.g. `["arn:aws:s3:::bucket/*"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#resource DataCoreweaveObjectStorageBucketPolicyDocument#resource}
  */
  readonly resource?: string[];
  /**
  * An optional statement identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#sid DataCoreweaveObjectStorageBucketPolicyDocument#sid}
  */
  readonly sid?: string;
}

export function dataCoreweaveObjectStorageBucketPolicyDocumentStatementToTerraform(struct?: DataCoreweaveObjectStorageBucketPolicyDocumentStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action),
    condition: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.condition),
    effect: cdktf.stringToTerraform(struct!.effect),
    principal: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.principal),
    resource: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resource),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function dataCoreweaveObjectStorageBucketPolicyDocumentStatementToHclTerraform(struct?: DataCoreweaveObjectStorageBucketPolicyDocumentStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.condition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.principal),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    resource: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resource),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCoreweaveObjectStorageBucketPolicyDocumentStatementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoreweaveObjectStorageBucketPolicyDocumentStatement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveObjectStorageBucketPolicyDocumentStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._condition = undefined;
      this._effect = undefined;
      this._principal = undefined;
      this._resource = undefined;
      this._sid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._condition = value.condition;
      this._effect = value.effect;
      this._principal = value.principal;
      this._resource = value.resource;
      this._sid = value.sid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string[]; 
  public get action() {
    return this.getListAttribute('action');
  }
  public set action(value: string[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get condition() {
    return this.interpolationForAttribute('condition');
  }
  public set condition(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get principal() {
    return this.interpolationForAttribute('principal');
  }
  public set principal(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string[]; 
  public get resource() {
    return this.getListAttribute('resource');
  }
  public set resource(value: string[]) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

export class DataCoreweaveObjectStorageBucketPolicyDocumentStatementList extends cdktf.ComplexList {
  public internalValue? : DataCoreweaveObjectStorageBucketPolicyDocumentStatement[] | cdktf.IResolvable

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
  public get(index: number): DataCoreweaveObjectStorageBucketPolicyDocumentStatementOutputReference {
    return new DataCoreweaveObjectStorageBucketPolicyDocumentStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document coreweave_object_storage_bucket_policy_document}
*/
export class DataCoreweaveObjectStorageBucketPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave_object_storage_bucket_policy_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoreweaveObjectStorageBucketPolicyDocument resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoreweaveObjectStorageBucketPolicyDocument to import
  * @param importFromId The id of the existing DataCoreweaveObjectStorageBucketPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoreweaveObjectStorageBucketPolicyDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave_object_storage_bucket_policy_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/object_storage_bucket_policy_document coreweave_object_storage_bucket_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoreweaveObjectStorageBucketPolicyDocumentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoreweaveObjectStorageBucketPolicyDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coreweave_object_storage_bucket_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'coreweave',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
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
    this._version = config.version;
    this._statement.internalValue = config.statement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // version - computed: false, optional: true, required: false
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

  // statement - computed: false, optional: true, required: false
  private _statement = new DataCoreweaveObjectStorageBucketPolicyDocumentStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: DataCoreweaveObjectStorageBucketPolicyDocumentStatement[] | cdktf.IResolvable) {
    this._statement.internalValue = value;
  }
  public resetStatement() {
    this._statement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      version: cdktf.stringToTerraform(this._version),
      statement: cdktf.listMapper(dataCoreweaveObjectStorageBucketPolicyDocumentStatementToTerraform, true)(this._statement.internalValue),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement: {
        value: cdktf.listMapperHcl(dataCoreweaveObjectStorageBucketPolicyDocumentStatementToHclTerraform, true)(this._statement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCoreweaveObjectStorageBucketPolicyDocumentStatementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
