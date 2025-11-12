// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApidefinitionsApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON-formatted information about the API configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_api#api ApidefinitionsApi#api}
  */
  readonly api: string;
  /**
  * The unique identifier for the contract (without the 'ctr_' prefix) assigned to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_api#contract_id ApidefinitionsApi#contract_id}
  */
  readonly contractId: string;
  /**
  * The unique identifier for the group (without the 'grp_' prefix) assigned to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_api#group_id ApidefinitionsApi#group_id}
  */
  readonly groupId: number;
  /**
  * Version of the API currently deployed in production
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_api#production_version ApidefinitionsApi#production_version}
  */
  readonly productionVersion?: number;
  /**
  * Version of the API currently deployed in staging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_api#staging_version ApidefinitionsApi#staging_version}
  */
  readonly stagingVersion?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_api akamai_apidefinitions_api}
*/
export class ApidefinitionsApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_apidefinitions_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApidefinitionsApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApidefinitionsApi to import
  * @param importFromId The id of the existing ApidefinitionsApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApidefinitionsApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_apidefinitions_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_api akamai_apidefinitions_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApidefinitionsApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApidefinitionsApiConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_apidefinitions_api',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._api = config.api;
    this._contractId = config.contractId;
    this._groupId = config.groupId;
    this._productionVersion = config.productionVersion;
    this._stagingVersion = config.stagingVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: false, optional: false, required: true
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // production_version - computed: true, optional: true, required: false
  private _productionVersion?: number; 
  public get productionVersion() {
    return this.getNumberAttribute('production_version');
  }
  public set productionVersion(value: number) {
    this._productionVersion = value;
  }
  public resetProductionVersion() {
    this._productionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionVersionInput() {
    return this._productionVersion;
  }

  // staging_version - computed: true, optional: true, required: false
  private _stagingVersion?: number; 
  public get stagingVersion() {
    return this.getNumberAttribute('staging_version');
  }
  public set stagingVersion(value: number) {
    this._stagingVersion = value;
  }
  public resetStagingVersion() {
    this._stagingVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingVersionInput() {
    return this._stagingVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api: cdktf.stringToTerraform(this._api),
      contract_id: cdktf.stringToTerraform(this._contractId),
      group_id: cdktf.numberToTerraform(this._groupId),
      production_version: cdktf.numberToTerraform(this._productionVersion),
      staging_version: cdktf.numberToTerraform(this._stagingVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api: {
        value: cdktf.stringToHclTerraform(this._api),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      production_version: {
        value: cdktf.numberToHclTerraform(this._productionVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      staging_version: {
        value: cdktf.numberToHclTerraform(this._stagingVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
