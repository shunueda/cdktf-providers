// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/semantic_layer_credential_service_token_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SemanticLayerCredentialServiceTokenMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the project to which the semantic layer credential is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/semantic_layer_credential_service_token_mapping#project_id SemanticLayerCredentialServiceTokenMapping#project_id}
  */
  readonly projectId: number;
  /**
  * The ID of the semantic layer credential to map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/semantic_layer_credential_service_token_mapping#semantic_layer_credential_id SemanticLayerCredentialServiceTokenMapping#semantic_layer_credential_id}
  */
  readonly semanticLayerCredentialId: number;
  /**
  * The ID of the service token to map to the semantic layer credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/semantic_layer_credential_service_token_mapping#service_token_id SemanticLayerCredentialServiceTokenMapping#service_token_id}
  */
  readonly serviceTokenId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/semantic_layer_credential_service_token_mapping dbtcloud_semantic_layer_credential_service_token_mapping}
*/
export class SemanticLayerCredentialServiceTokenMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_semantic_layer_credential_service_token_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SemanticLayerCredentialServiceTokenMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SemanticLayerCredentialServiceTokenMapping to import
  * @param importFromId The id of the existing SemanticLayerCredentialServiceTokenMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/semantic_layer_credential_service_token_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SemanticLayerCredentialServiceTokenMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_semantic_layer_credential_service_token_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/semantic_layer_credential_service_token_mapping dbtcloud_semantic_layer_credential_service_token_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SemanticLayerCredentialServiceTokenMappingConfig
  */
  public constructor(scope: Construct, id: string, config: SemanticLayerCredentialServiceTokenMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_semantic_layer_credential_service_token_mapping',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._semanticLayerCredentialId = config.semanticLayerCredentialId;
    this._serviceTokenId = config.serviceTokenId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // semantic_layer_credential_id - computed: false, optional: false, required: true
  private _semanticLayerCredentialId?: number; 
  public get semanticLayerCredentialId() {
    return this.getNumberAttribute('semantic_layer_credential_id');
  }
  public set semanticLayerCredentialId(value: number) {
    this._semanticLayerCredentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticLayerCredentialIdInput() {
    return this._semanticLayerCredentialId;
  }

  // service_token_id - computed: false, optional: false, required: true
  private _serviceTokenId?: number; 
  public get serviceTokenId() {
    return this.getNumberAttribute('service_token_id');
  }
  public set serviceTokenId(value: number) {
    this._serviceTokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenIdInput() {
    return this._serviceTokenId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.numberToTerraform(this._projectId),
      semantic_layer_credential_id: cdktf.numberToTerraform(this._semanticLayerCredentialId),
      service_token_id: cdktf.numberToTerraform(this._serviceTokenId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      semantic_layer_credential_id: {
        value: cdktf.numberToHclTerraform(this._semanticLayerCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_token_id: {
        value: cdktf.numberToHclTerraform(this._serviceTokenId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
