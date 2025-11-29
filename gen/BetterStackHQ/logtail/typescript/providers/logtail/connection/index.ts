// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of client connection. Currently only `clickhouse` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection#client_type Connection#client_type}
  */
  readonly clientType: string;
  /**
  * Data region or private cluster name. Permitted values: `us_east`, `us_west`, `germany`, `singapore`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection#data_region Connection#data_region}
  */
  readonly dataRegion?: string;
  /**
  * Array of IP addresses or CIDR ranges that are allowed to use this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection#ip_allowlist Connection#ip_allowlist}
  */
  readonly ipAllowlist?: string[];
  /**
  * A descriptive note for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection#note Connection#note}
  */
  readonly note?: string;
  /**
  * Array of team IDs to associate with the connection. Only one of `team_names` or `team_ids` should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection#team_ids Connection#team_ids}
  */
  readonly teamIds?: number[];
  /**
  * Array of team names to associate with the connection. Only one of `team_names` or `team_ids` should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection#team_names Connection#team_names}
  */
  readonly teamNames?: string[];
  /**
  * ISO 8601 timestamp when the connection expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection#valid_until Connection#valid_until}
  */
  readonly validUntil?: string;
}
export interface ConnectionDataSources {
}

export function connectionDataSourcesToTerraform(struct?: ConnectionDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionDataSourcesToHclTerraform(struct?: ConnectionDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionDataSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_sources - computed: true, optional: false, required: false
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
}

export class ConnectionDataSourcesList extends cdktf.ComplexList {

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
  public get(index: number): ConnectionDataSourcesOutputReference {
    return new ConnectionDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection logtail_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/connection logtail_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_connection',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.7.1',
        providerVersionConstraint: '0.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientType = config.clientType;
    this._dataRegion = config.dataRegion;
    this._ipAllowlist = config.ipAllowlist;
    this._note = config.note;
    this._teamIds = config.teamIds;
    this._teamNames = config.teamNames;
    this._validUntil = config.validUntil;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_type - computed: false, optional: false, required: true
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // data_region - computed: false, optional: true, required: false
  private _dataRegion?: string; 
  public get dataRegion() {
    return this.getStringAttribute('data_region');
  }
  public set dataRegion(value: string) {
    this._dataRegion = value;
  }
  public resetDataRegion() {
    this._dataRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRegionInput() {
    return this._dataRegion;
  }

  // data_sources - computed: true, optional: false, required: false
  private _dataSources = new ConnectionDataSourcesList(this, "data_sources", false);
  public get dataSources() {
    return this._dataSources;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_allowlist - computed: false, optional: true, required: false
  private _ipAllowlist?: string[]; 
  public get ipAllowlist() {
    return this.getListAttribute('ip_allowlist');
  }
  public set ipAllowlist(value: string[]) {
    this._ipAllowlist = value;
  }
  public resetIpAllowlist() {
    this._ipAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowlistInput() {
    return this._ipAllowlist;
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // sample_query - computed: true, optional: false, required: false
  public get sampleQuery() {
    return this.getStringAttribute('sample_query');
  }

  // team_ids - computed: true, optional: true, required: false
  private _teamIds?: number[]; 
  public get teamIds() {
    return this.getNumberListAttribute('team_ids');
  }
  public set teamIds(value: number[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // team_names - computed: true, optional: true, required: false
  private _teamNames?: string[]; 
  public get teamNames() {
    return this.getListAttribute('team_names');
  }
  public set teamNames(value: string[]) {
    this._teamNames = value;
  }
  public resetTeamNames() {
    this._teamNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNamesInput() {
    return this._teamNames;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_type: cdktf.stringToTerraform(this._clientType),
      data_region: cdktf.stringToTerraform(this._dataRegion),
      ip_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAllowlist),
      note: cdktf.stringToTerraform(this._note),
      team_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._teamIds),
      team_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teamNames),
      valid_until: cdktf.stringToTerraform(this._validUntil),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_type: {
        value: cdktf.stringToHclTerraform(this._clientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_region: {
        value: cdktf.stringToHclTerraform(this._dataRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._teamIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      team_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teamNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      valid_until: {
        value: cdktf.stringToHclTerraform(this._validUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
