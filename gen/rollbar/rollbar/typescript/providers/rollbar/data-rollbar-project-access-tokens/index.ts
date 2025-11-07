// https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/data-sources/project_access_tokens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRollbarProjectAccessTokensConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/data-sources/project_access_tokens#id DataRollbarProjectAccessTokens#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the token begins with this prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/data-sources/project_access_tokens#prefix DataRollbarProjectAccessTokens#prefix}
  */
  readonly prefix?: string;
  /**
  * ID of a Rollbar project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/data-sources/project_access_tokens#project_id DataRollbarProjectAccessTokens#project_id}
  */
  readonly projectId: number;
}
export interface DataRollbarProjectAccessTokensAccessTokens {
}

export function dataRollbarProjectAccessTokensAccessTokensToTerraform(struct?: DataRollbarProjectAccessTokensAccessTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRollbarProjectAccessTokensAccessTokensToHclTerraform(struct?: DataRollbarProjectAccessTokensAccessTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRollbarProjectAccessTokensAccessTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRollbarProjectAccessTokensAccessTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRollbarProjectAccessTokensAccessTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // cur_rate_limit_window_count - computed: true, optional: false, required: false
  public get curRateLimitWindowCount() {
    return this.getNumberAttribute('cur_rate_limit_window_count');
  }

  // cur_rate_limit_window_start - computed: true, optional: false, required: false
  public get curRateLimitWindowStart() {
    return this.getNumberAttribute('cur_rate_limit_window_start');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getNumberAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getNumberAttribute('date_modified');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // public_id - computed: true, optional: false, required: false
  public get publicId() {
    return this.getStringAttribute('public_id');
  }

  // rate_limit_window_count - computed: true, optional: false, required: false
  public get rateLimitWindowCount() {
    return this.getNumberAttribute('rate_limit_window_count');
  }

  // rate_limit_window_size - computed: true, optional: false, required: false
  public get rateLimitWindowSize() {
    return this.getNumberAttribute('rate_limit_window_size');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // token_type - computed: true, optional: false, required: false
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
}

export class DataRollbarProjectAccessTokensAccessTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataRollbarProjectAccessTokensAccessTokensOutputReference {
    return new DataRollbarProjectAccessTokensAccessTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/data-sources/project_access_tokens rollbar_project_access_tokens}
*/
export class DataRollbarProjectAccessTokens extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rollbar_project_access_tokens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRollbarProjectAccessTokens resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRollbarProjectAccessTokens to import
  * @param importFromId The id of the existing DataRollbarProjectAccessTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/data-sources/project_access_tokens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRollbarProjectAccessTokens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rollbar_project_access_tokens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/data-sources/project_access_tokens rollbar_project_access_tokens} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRollbarProjectAccessTokensConfig
  */
  public constructor(scope: Construct, id: string, config: DataRollbarProjectAccessTokensConfig) {
    super(scope, id, {
      terraformResourceType: 'rollbar_project_access_tokens',
      terraformGeneratorMetadata: {
        providerName: 'rollbar',
        providerVersion: '1.16.0'
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
    this._prefix = config.prefix;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_tokens - computed: true, optional: false, required: false
  private _accessTokens = new DataRollbarProjectAccessTokensAccessTokensList(this, "access_tokens", false);
  public get accessTokens() {
    return this._accessTokens;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      prefix: cdktf.stringToTerraform(this._prefix),
      project_id: cdktf.numberToTerraform(this._projectId),
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
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
