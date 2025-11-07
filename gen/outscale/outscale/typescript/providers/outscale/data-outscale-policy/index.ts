// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOutscalePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/policy#id DataOutscalePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/policy#policy_orn DataOutscalePolicy#policy_orn}
  */
  readonly policyOrn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/policy outscale_policy}
*/
export class DataOutscalePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOutscalePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOutscalePolicy to import
  * @param importFromId The id of the existing DataOutscalePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOutscalePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/policy outscale_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOutscalePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOutscalePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_policy',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._policyOrn = config.policyOrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // document - computed: true, optional: false, required: false
  public get document() {
    return this.getStringAttribute('document');
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

  // is_linkable - computed: true, optional: false, required: false
  public get isLinkable() {
    return this.getBooleanAttribute('is_linkable');
  }

  // last_modification_date - computed: true, optional: false, required: false
  public get lastModificationDate() {
    return this.getStringAttribute('last_modification_date');
  }

  // orn - computed: true, optional: false, required: false
  public get orn() {
    return this.getStringAttribute('orn');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // policy_default_version_id - computed: true, optional: false, required: false
  public get policyDefaultVersionId() {
    return this.getStringAttribute('policy_default_version_id');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // policy_orn - computed: false, optional: false, required: true
  private _policyOrn?: string; 
  public get policyOrn() {
    return this.getStringAttribute('policy_orn');
  }
  public set policyOrn(value: string) {
    this._policyOrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOrnInput() {
    return this._policyOrn;
  }

  // resources_count - computed: true, optional: false, required: false
  public get resourcesCount() {
    return this.getNumberAttribute('resources_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_orn: cdktf.stringToTerraform(this._policyOrn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_orn: {
        value: cdktf.stringToHclTerraform(this._policyOrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
