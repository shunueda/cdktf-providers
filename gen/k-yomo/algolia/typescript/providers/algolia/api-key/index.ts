// https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of permissions associated with the key.
  * The possible ACLs are:
  *   - `search`: allowed to perform search operations.
  *   - `browse`: allowed to retrieve all index data with the browse endpoint.
  *   - `addObject`: allowed to add or update a records in the index.
  *   - `deleteObject`: allowed to delete an existing record.
  *   - `listIndexes`: allowed to get a list of all existing indices.
  *   - `deleteIndex`: allowed to delete an index.
  *   - `settings`: allowed to read all index settings.
  *   - `editSettings`: allowed to update all index settings.
  *   - `analytics`: allowed to retrieve data with the Analytics API.
  *   - `recommendation`: allowed to interact with the Recommendation API.
  *   - `usage` allowed to retrieve data with the Usage API.
  *   - `nluReadAnswers`: allowed to perform semantic search with the Answers API.
  *   - `logs`: allowed to query the logs.
  *   - `seeUnretrievableAttributes`: allowed to retrieve unretrievableAttributes for all operations that return records.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key#acl ApiKey#acl}
  */
  readonly acl: string[];
  /**
  * Description of the API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key#description ApiKey#description}
  */
  readonly description?: string;
  /**
  * Unix timestamp of the date at which the key expires. RFC3339 format. Will not expire per default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key#expires_at ApiKey#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key#id ApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of targeted indices. You can target all indices starting with a prefix or ending with a suffix using the ‘*’ character. For example, “dev_*” matches all indices starting with “dev_” and “*_dev” matches all indices ending with “_dev”.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key#indexes ApiKey#indexes}
  */
  readonly indexes?: string[];
  /**
  * Maximum number of hits this API key can retrieve in one call. This parameter can be used to protect you from attempts at retrieving your entire index contents by massively querying the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key#max_hits_per_query ApiKey#max_hits_per_query}
  */
  readonly maxHitsPerQuery?: number;
  /**
  * Maximum number of API calls allowed from an IP address per hour.Each time an API call is performed with this key, a check is performed. If the IP at the source of the call did more than this number of calls in the last hour, a 429 code is returned.
  * 
  * This parameter can be used to protect you from attempts at retrieving your entire index contents by massively querying the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key#max_queries_per_ip_per_hour ApiKey#max_queries_per_ip_per_hour}
  */
  readonly maxQueriesPerIpPerHour?: number;
  /**
  * List of referrers that can perform an operation. You can use the “*” (asterisk) character as a wildcard to match subdomains, or all pages of a website. For example, `"https://algolia.com/\*"` matches all referrers starting with `"https://algolia.com/"`, and `"\*.algolia.com"` matches all referrers ending with `".algolia.com"`. If you want to allow all possible referrers from the `algolia.com` domain, you can use `"\*algolia.com/\*"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key#referers ApiKey#referers}
  */
  readonly referers?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key algolia_api_key}
*/
export class ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "algolia_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiKey to import
  * @param importFromId The id of the existing ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/api_key algolia_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'algolia_api_key',
      terraformGeneratorMetadata: {
        providerName: 'algolia',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._description = config.description;
    this._expiresAt = config.expiresAt;
    this._id = config.id;
    this._indexes = config.indexes;
    this._maxHitsPerQuery = config.maxHitsPerQuery;
    this._maxQueriesPerIpPerHour = config.maxQueriesPerIpPerHour;
    this._referers = config.referers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: false, required: true
  private _acl?: string[]; 
  public get acl() {
    return cdktf.Fn.tolist(this.getListAttribute('acl'));
  }
  public set acl(value: string[]) {
    this._acl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

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

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
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

  // indexes - computed: false, optional: true, required: false
  private _indexes?: string[]; 
  public get indexes() {
    return cdktf.Fn.tolist(this.getListAttribute('indexes'));
  }
  public set indexes(value: string[]) {
    this._indexes = value;
  }
  public resetIndexes() {
    this._indexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // max_hits_per_query - computed: false, optional: true, required: false
  private _maxHitsPerQuery?: number; 
  public get maxHitsPerQuery() {
    return this.getNumberAttribute('max_hits_per_query');
  }
  public set maxHitsPerQuery(value: number) {
    this._maxHitsPerQuery = value;
  }
  public resetMaxHitsPerQuery() {
    this._maxHitsPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHitsPerQueryInput() {
    return this._maxHitsPerQuery;
  }

  // max_queries_per_ip_per_hour - computed: false, optional: true, required: false
  private _maxQueriesPerIpPerHour?: number; 
  public get maxQueriesPerIpPerHour() {
    return this.getNumberAttribute('max_queries_per_ip_per_hour');
  }
  public set maxQueriesPerIpPerHour(value: number) {
    this._maxQueriesPerIpPerHour = value;
  }
  public resetMaxQueriesPerIpPerHour() {
    this._maxQueriesPerIpPerHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueriesPerIpPerHourInput() {
    return this._maxQueriesPerIpPerHour;
  }

  // referers - computed: false, optional: true, required: false
  private _referers?: string[]; 
  public get referers() {
    return cdktf.Fn.tolist(this.getListAttribute('referers'));
  }
  public set referers(value: string[]) {
    this._referers = value;
  }
  public resetReferers() {
    this._referers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referersInput() {
    return this._referers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acl),
      description: cdktf.stringToTerraform(this._description),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      id: cdktf.stringToTerraform(this._id),
      indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexes),
      max_hits_per_query: cdktf.numberToTerraform(this._maxHitsPerQuery),
      max_queries_per_ip_per_hour: cdktf.numberToTerraform(this._maxQueriesPerIpPerHour),
      referers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
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
      indexes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_hits_per_query: {
        value: cdktf.numberToHclTerraform(this._maxHitsPerQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_queries_per_ip_per_hour: {
        value: cdktf.numberToHclTerraform(this._maxQueriesPerIpPerHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      referers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._referers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
