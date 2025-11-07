// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicmonitorProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs#api_id LogicmonitorProvider#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs#api_key LogicmonitorProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * true if going for bulk resource, default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs#bulk_resource LogicmonitorProvider#bulk_resource}
  */
  readonly bulkResource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs#company LogicmonitorProvider#company}
  */
  readonly company: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs#domain LogicmonitorProvider#domain}
  */
  readonly domain?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs#alias LogicmonitorProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs logicmonitor}
*/
export class LogicmonitorProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicmonitorProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicmonitorProvider to import
  * @param importFromId The id of the existing LogicmonitorProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicmonitorProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs logicmonitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicmonitorProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LogicmonitorProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25'
      },
      terraformProviderSource: 'logicmonitor/logicmonitor'
    });
    this._apiId = config.apiId;
    this._apiKey = config.apiKey;
    this._bulkResource = config.bulkResource;
    this._company = config.company;
    this._domain = config.domain;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this._apiId;
  }
  public set apiId(value: string | undefined) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // bulk_resource - computed: false, optional: true, required: false
  private _bulkResource?: boolean | cdktf.IResolvable; 
  public get bulkResource() {
    return this._bulkResource;
  }
  public set bulkResource(value: boolean | cdktf.IResolvable | undefined) {
    this._bulkResource = value;
  }
  public resetBulkResource() {
    this._bulkResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkResourceInput() {
    return this._bulkResource;
  }

  // company - computed: false, optional: false, required: true
  private _company?: string; 
  public get company() {
    return this._company;
  }
  public set company(value: string | undefined) {
    this._company = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      bulk_resource: cdktf.booleanToTerraform(this._bulkResource),
      company: cdktf.stringToTerraform(this._company),
      domain: cdktf.stringToTerraform(this._domain),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bulk_resource: {
        value: cdktf.booleanToHclTerraform(this._bulkResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
