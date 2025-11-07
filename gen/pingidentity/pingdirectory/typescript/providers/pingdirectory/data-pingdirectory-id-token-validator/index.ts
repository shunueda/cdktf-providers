// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/id_token_validator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryIdTokenValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/id_token_validator#name DataPingdirectoryIdTokenValidator#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/id_token_validator pingdirectory_id_token_validator}
*/
export class DataPingdirectoryIdTokenValidator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_id_token_validator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryIdTokenValidator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryIdTokenValidator to import
  * @param importFromId The id of the existing DataPingdirectoryIdTokenValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/id_token_validator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryIdTokenValidator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_id_token_validator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/id_token_validator pingdirectory_id_token_validator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryIdTokenValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryIdTokenValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_id_token_validator',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_signing_algorithm - computed: true, optional: false, required: false
  public get allowedSigningAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_signing_algorithm'));
  }

  // clock_skew_grace_period - computed: true, optional: false, required: false
  public get clockSkewGracePeriod() {
    return this.getStringAttribute('clock_skew_grace_period');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // evaluation_order_index - computed: true, optional: false, required: false
  public get evaluationOrderIndex() {
    return this.getNumberAttribute('evaluation_order_index');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_mapper - computed: true, optional: false, required: false
  public get identityMapper() {
    return this.getStringAttribute('identity_mapper');
  }

  // issuer_url - computed: true, optional: false, required: false
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }

  // jwks_cache_duration - computed: true, optional: false, required: false
  public get jwksCacheDuration() {
    return this.getStringAttribute('jwks_cache_duration');
  }

  // jwks_endpoint_path - computed: true, optional: false, required: false
  public get jwksEndpointPath() {
    return this.getStringAttribute('jwks_endpoint_path');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // openid_connect_metadata_cache_duration - computed: true, optional: false, required: false
  public get openidConnectMetadataCacheDuration() {
    return this.getStringAttribute('openid_connect_metadata_cache_duration');
  }

  // openid_connect_provider - computed: true, optional: false, required: false
  public get openidConnectProvider() {
    return this.getStringAttribute('openid_connect_provider');
  }

  // signing_certificate - computed: true, optional: false, required: false
  public get signingCertificate() {
    return cdktf.Fn.tolist(this.getListAttribute('signing_certificate'));
  }

  // subject_claim_name - computed: true, optional: false, required: false
  public get subjectClaimName() {
    return this.getStringAttribute('subject_claim_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
