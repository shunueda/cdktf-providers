// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_ism_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpendistroIsmPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_ism_policy#body OpendistroIsmPolicy#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_ism_policy#id OpendistroIsmPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_ism_policy#policy_id OpendistroIsmPolicy#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_ism_policy#primary_term OpendistroIsmPolicy#primary_term}
  */
  readonly primaryTerm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_ism_policy#seq_no OpendistroIsmPolicy#seq_no}
  */
  readonly seqNo?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_ism_policy elasticsearch_opendistro_ism_policy}
*/
export class OpendistroIsmPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_opendistro_ism_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpendistroIsmPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpendistroIsmPolicy to import
  * @param importFromId The id of the existing OpendistroIsmPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_ism_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpendistroIsmPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_opendistro_ism_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_ism_policy elasticsearch_opendistro_ism_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpendistroIsmPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OpendistroIsmPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_opendistro_ism_policy',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._id = config.id;
    this._policyId = config.policyId;
    this._primaryTerm = config.primaryTerm;
    this._seqNo = config.seqNo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // primary_term - computed: true, optional: true, required: false
  private _primaryTerm?: number; 
  public get primaryTerm() {
    return this.getNumberAttribute('primary_term');
  }
  public set primaryTerm(value: number) {
    this._primaryTerm = value;
  }
  public resetPrimaryTerm() {
    this._primaryTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTermInput() {
    return this._primaryTerm;
  }

  // seq_no - computed: true, optional: true, required: false
  private _seqNo?: number; 
  public get seqNo() {
    return this.getNumberAttribute('seq_no');
  }
  public set seqNo(value: number) {
    this._seqNo = value;
  }
  public resetSeqNo() {
    this._seqNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNoInput() {
    return this._seqNo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
      primary_term: cdktf.numberToTerraform(this._primaryTerm),
      seq_no: cdktf.numberToTerraform(this._seqNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_term: {
        value: cdktf.numberToHclTerraform(this._primaryTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seq_no: {
        value: cdktf.numberToHclTerraform(this._seqNo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
