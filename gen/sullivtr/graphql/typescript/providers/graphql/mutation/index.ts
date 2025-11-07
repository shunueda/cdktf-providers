// https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MutationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#compute_from_create Mutation#compute_from_create}
  */
  readonly computeFromCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#compute_mutation_keys Mutation#compute_mutation_keys}
  */
  readonly computeMutationKeys: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#create_mutation Mutation#create_mutation}
  */
  readonly createMutation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#delete_mutation Mutation#delete_mutation}
  */
  readonly deleteMutation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#delete_mutation_variables Mutation#delete_mutation_variables}
  */
  readonly deleteMutationVariables?: { [key: string]: string };
  /**
  * A pre v2.4.0 backward-compatibility flag. Set to `false` to disable resource remote state verification during reads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#enable_remote_state_verification Mutation#enable_remote_state_verification}
  */
  readonly enableRemoteStateVerification?: boolean | cdktf.IResolvable;
  /**
  * If true, all updates will first delete the resource and recreate it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#force_replace Mutation#force_replace}
  */
  readonly forceReplace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#id Mutation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#mutation_variables Mutation#mutation_variables}
  */
  readonly mutationVariables: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#read_query Mutation#read_query}
  */
  readonly readQuery: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#read_query_variables Mutation#read_query_variables}
  */
  readonly readQueryVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#update_mutation Mutation#update_mutation}
  */
  readonly updateMutation: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation graphql_mutation}
*/
export class Mutation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graphql_mutation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mutation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mutation to import
  * @param importFromId The id of the existing Mutation that should be imported. Refer to the {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mutation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graphql_mutation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs/resources/mutation graphql_mutation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MutationConfig
  */
  public constructor(scope: Construct, id: string, config: MutationConfig) {
    super(scope, id, {
      terraformResourceType: 'graphql_mutation',
      terraformGeneratorMetadata: {
        providerName: 'graphql',
        providerVersion: '2.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._computeFromCreate = config.computeFromCreate;
    this._computeMutationKeys = config.computeMutationKeys;
    this._createMutation = config.createMutation;
    this._deleteMutation = config.deleteMutation;
    this._deleteMutationVariables = config.deleteMutationVariables;
    this._enableRemoteStateVerification = config.enableRemoteStateVerification;
    this._forceReplace = config.forceReplace;
    this._id = config.id;
    this._mutationVariables = config.mutationVariables;
    this._readQuery = config.readQuery;
    this._readQueryVariables = config.readQueryVariables;
    this._updateMutation = config.updateMutation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_from_create - computed: false, optional: true, required: false
  private _computeFromCreate?: boolean | cdktf.IResolvable; 
  public get computeFromCreate() {
    return this.getBooleanAttribute('compute_from_create');
  }
  public set computeFromCreate(value: boolean | cdktf.IResolvable) {
    this._computeFromCreate = value;
  }
  public resetComputeFromCreate() {
    this._computeFromCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeFromCreateInput() {
    return this._computeFromCreate;
  }

  // compute_mutation_keys - computed: false, optional: false, required: true
  private _computeMutationKeys?: { [key: string]: string }; 
  public get computeMutationKeys() {
    return this.getStringMapAttribute('compute_mutation_keys');
  }
  public set computeMutationKeys(value: { [key: string]: string }) {
    this._computeMutationKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMutationKeysInput() {
    return this._computeMutationKeys;
  }

  // computed_delete_operation_variables - computed: true, optional: false, required: false
  private _computedDeleteOperationVariables = new cdktf.StringMap(this, "computed_delete_operation_variables");
  public get computedDeleteOperationVariables() {
    return this._computedDeleteOperationVariables;
  }

  // computed_read_operation_variables - computed: true, optional: false, required: false
  private _computedReadOperationVariables = new cdktf.StringMap(this, "computed_read_operation_variables");
  public get computedReadOperationVariables() {
    return this._computedReadOperationVariables;
  }

  // computed_update_operation_variables - computed: true, optional: false, required: false
  private _computedUpdateOperationVariables = new cdktf.StringMap(this, "computed_update_operation_variables");
  public get computedUpdateOperationVariables() {
    return this._computedUpdateOperationVariables;
  }

  // create_mutation - computed: false, optional: false, required: true
  private _createMutation?: string; 
  public get createMutation() {
    return this.getStringAttribute('create_mutation');
  }
  public set createMutation(value: string) {
    this._createMutation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createMutationInput() {
    return this._createMutation;
  }

  // delete_mutation - computed: false, optional: false, required: true
  private _deleteMutation?: string; 
  public get deleteMutation() {
    return this.getStringAttribute('delete_mutation');
  }
  public set deleteMutation(value: string) {
    this._deleteMutation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMutationInput() {
    return this._deleteMutation;
  }

  // delete_mutation_variables - computed: false, optional: true, required: false
  private _deleteMutationVariables?: { [key: string]: string }; 
  public get deleteMutationVariables() {
    return this.getStringMapAttribute('delete_mutation_variables');
  }
  public set deleteMutationVariables(value: { [key: string]: string }) {
    this._deleteMutationVariables = value;
  }
  public resetDeleteMutationVariables() {
    this._deleteMutationVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMutationVariablesInput() {
    return this._deleteMutationVariables;
  }

  // enable_remote_state_verification - computed: false, optional: true, required: false
  private _enableRemoteStateVerification?: boolean | cdktf.IResolvable; 
  public get enableRemoteStateVerification() {
    return this.getBooleanAttribute('enable_remote_state_verification');
  }
  public set enableRemoteStateVerification(value: boolean | cdktf.IResolvable) {
    this._enableRemoteStateVerification = value;
  }
  public resetEnableRemoteStateVerification() {
    this._enableRemoteStateVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteStateVerificationInput() {
    return this._enableRemoteStateVerification;
  }

  // existing_hash - computed: true, optional: false, required: false
  public get existingHash() {
    return this.getStringAttribute('existing_hash');
  }

  // force_replace - computed: false, optional: true, required: false
  private _forceReplace?: boolean | cdktf.IResolvable; 
  public get forceReplace() {
    return this.getBooleanAttribute('force_replace');
  }
  public set forceReplace(value: boolean | cdktf.IResolvable) {
    this._forceReplace = value;
  }
  public resetForceReplace() {
    this._forceReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceReplaceInput() {
    return this._forceReplace;
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

  // mutation_variables - computed: false, optional: false, required: true
  private _mutationVariables?: { [key: string]: string }; 
  public get mutationVariables() {
    return this.getStringMapAttribute('mutation_variables');
  }
  public set mutationVariables(value: { [key: string]: string }) {
    this._mutationVariables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationVariablesInput() {
    return this._mutationVariables;
  }

  // query_response - computed: true, optional: false, required: false
  public get queryResponse() {
    return this.getStringAttribute('query_response');
  }

  // query_response_input_key_map - computed: true, optional: false, required: false
  private _queryResponseInputKeyMap = new cdktf.StringMap(this, "query_response_input_key_map");
  public get queryResponseInputKeyMap() {
    return this._queryResponseInputKeyMap;
  }

  // read_query - computed: false, optional: false, required: true
  private _readQuery?: string; 
  public get readQuery() {
    return this.getStringAttribute('read_query');
  }
  public set readQuery(value: string) {
    this._readQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readQueryInput() {
    return this._readQuery;
  }

  // read_query_variables - computed: false, optional: true, required: false
  private _readQueryVariables?: { [key: string]: string }; 
  public get readQueryVariables() {
    return this.getStringMapAttribute('read_query_variables');
  }
  public set readQueryVariables(value: { [key: string]: string }) {
    this._readQueryVariables = value;
  }
  public resetReadQueryVariables() {
    this._readQueryVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readQueryVariablesInput() {
    return this._readQueryVariables;
  }

  // update_mutation - computed: false, optional: false, required: true
  private _updateMutation?: string; 
  public get updateMutation() {
    return this.getStringAttribute('update_mutation');
  }
  public set updateMutation(value: string) {
    this._updateMutation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMutationInput() {
    return this._updateMutation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_from_create: cdktf.booleanToTerraform(this._computeFromCreate),
      compute_mutation_keys: cdktf.hashMapper(cdktf.stringToTerraform)(this._computeMutationKeys),
      create_mutation: cdktf.stringToTerraform(this._createMutation),
      delete_mutation: cdktf.stringToTerraform(this._deleteMutation),
      delete_mutation_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._deleteMutationVariables),
      enable_remote_state_verification: cdktf.booleanToTerraform(this._enableRemoteStateVerification),
      force_replace: cdktf.booleanToTerraform(this._forceReplace),
      id: cdktf.stringToTerraform(this._id),
      mutation_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._mutationVariables),
      read_query: cdktf.stringToTerraform(this._readQuery),
      read_query_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._readQueryVariables),
      update_mutation: cdktf.stringToTerraform(this._updateMutation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_from_create: {
        value: cdktf.booleanToHclTerraform(this._computeFromCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compute_mutation_keys: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._computeMutationKeys),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      create_mutation: {
        value: cdktf.stringToHclTerraform(this._createMutation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mutation: {
        value: cdktf.stringToHclTerraform(this._deleteMutation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mutation_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._deleteMutationVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enable_remote_state_verification: {
        value: cdktf.booleanToHclTerraform(this._enableRemoteStateVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_replace: {
        value: cdktf.booleanToHclTerraform(this._forceReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mutation_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._mutationVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      read_query: {
        value: cdktf.stringToHclTerraform(this._readQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_query_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._readQueryVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      update_mutation: {
        value: cdktf.stringToHclTerraform(this._updateMutation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
