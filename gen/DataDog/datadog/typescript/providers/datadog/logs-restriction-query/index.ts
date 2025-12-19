// https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/logs_restriction_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsRestrictionQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The query that defines the restriction. Only the content matching the query can be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/logs_restriction_query#restriction_query LogsRestrictionQuery#restriction_query}
  */
  readonly restrictionQuery: string;
  /**
  * An array of role IDs that have access to this restriction query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/logs_restriction_query#role_ids LogsRestrictionQuery#role_ids}
  */
  readonly roleIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/logs_restriction_query datadog_logs_restriction_query}
*/
export class LogsRestrictionQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_restriction_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogsRestrictionQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogsRestrictionQuery to import
  * @param importFromId The id of the existing LogsRestrictionQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/logs_restriction_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogsRestrictionQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_logs_restriction_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/logs_restriction_query datadog_logs_restriction_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsRestrictionQueryConfig
  */
  public constructor(scope: Construct, id: string, config: LogsRestrictionQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_restriction_query',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.83.0',
        providerVersionConstraint: '3.83.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._restrictionQuery = config.restrictionQuery;
    this._roleIds = config.roleIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // restriction_query - computed: false, optional: false, required: true
  private _restrictionQuery?: string; 
  public get restrictionQuery() {
    return this.getStringAttribute('restriction_query');
  }
  public set restrictionQuery(value: string) {
    this._restrictionQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionQueryInput() {
    return this._restrictionQuery;
  }

  // role_ids - computed: true, optional: true, required: false
  private _roleIds?: string[]; 
  public get roleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_ids'));
  }
  public set roleIds(value: string[]) {
    this._roleIds = value;
  }
  public resetRoleIds() {
    this._roleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      restriction_query: cdktf.stringToTerraform(this._restrictionQuery),
      role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      restriction_query: {
        value: cdktf.stringToHclTerraform(this._restrictionQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
