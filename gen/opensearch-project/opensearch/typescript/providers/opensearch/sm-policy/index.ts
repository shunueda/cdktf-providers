// https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/sm_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/sm_policy#body SmPolicy#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/sm_policy#id SmPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the SM policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/sm_policy#policy_name SmPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * The primary term of the SM policy version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/sm_policy#primary_term SmPolicy#primary_term}
  */
  readonly primaryTerm?: number;
  /**
  * The sequence number of the SM policy version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/sm_policy#seq_no SmPolicy#seq_no}
  */
  readonly seqNo?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/sm_policy opensearch_sm_policy}
*/
export class SmPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opensearch_sm_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmPolicy to import
  * @param importFromId The id of the existing SmPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/sm_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opensearch_sm_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/sm_policy opensearch_sm_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SmPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'opensearch_sm_policy',
      terraformGeneratorMetadata: {
        providerName: 'opensearch',
        providerVersion: '2.3.2',
        providerVersionConstraint: '2.3.2'
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
    this._policyName = config.policyName;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
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
      policy_name: cdktf.stringToTerraform(this._policyName),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
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
