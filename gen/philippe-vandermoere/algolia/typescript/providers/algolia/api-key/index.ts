// https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key#acl ApiKey#acl}
  */
  readonly acl: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key#description ApiKey#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key#id ApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key#indexes ApiKey#indexes}
  */
  readonly indexes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key#max_hits_per_query ApiKey#max_hits_per_query}
  */
  readonly maxHitsPerQuery?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key#max_queries_per_ip_per_hour ApiKey#max_queries_per_ip_per_hour}
  */
  readonly maxQueriesPerIpPerHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key#referers ApiKey#referers}
  */
  readonly referers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key#validity ApiKey#validity}
  */
  readonly validity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key algolia_api_key}
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
  * @param importFromId The id of the existing ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/api_key algolia_api_key} Resource
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
    this._acl = config.acl;
    this._description = config.description;
    this._id = config.id;
    this._indexes = config.indexes;
    this._maxHitsPerQuery = config.maxHitsPerQuery;
    this._maxQueriesPerIpPerHour = config.maxQueriesPerIpPerHour;
    this._referers = config.referers;
    this._validity = config.validity;
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // indexes - computed: true, optional: true, required: false
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

  // referers - computed: true, optional: true, required: false
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

  // validity - computed: false, optional: true, required: false
  private _validity?: number; 
  public get validity() {
    return this.getNumberAttribute('validity');
  }
  public set validity(value: number) {
    this._validity = value;
  }
  public resetValidity() {
    this._validity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexes),
      max_hits_per_query: cdktf.numberToTerraform(this._maxHitsPerQuery),
      max_queries_per_ip_per_hour: cdktf.numberToTerraform(this._maxQueriesPerIpPerHour),
      referers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referers),
      validity: cdktf.numberToTerraform(this._validity),
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
      validity: {
        value: cdktf.numberToHclTerraform(this._validity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
