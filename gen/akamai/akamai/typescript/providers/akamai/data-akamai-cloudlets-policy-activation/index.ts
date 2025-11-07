// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_policy_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudletsPolicyActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of associated properties for non-shared cloudlets activation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_policy_activation#associated_properties DataAkamaiCloudletsPolicyActivation#associated_properties}
  */
  readonly associatedProperties?: string[];
  /**
  * The networks where you can get activated policy version (options are Staging and Production).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_policy_activation#network DataAkamaiCloudletsPolicyActivation#network}
  */
  readonly network: string;
  /**
  * Identifies the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_policy_activation#policy_id DataAkamaiCloudletsPolicyActivation#policy_id}
  */
  readonly policyId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_policy_activation akamai_cloudlets_policy_activation}
*/
export class DataAkamaiCloudletsPolicyActivation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudlets_policy_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudletsPolicyActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudletsPolicyActivation to import
  * @param importFromId The id of the existing DataAkamaiCloudletsPolicyActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_policy_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudletsPolicyActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudlets_policy_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudlets_policy_activation akamai_cloudlets_policy_activation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudletsPolicyActivationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudletsPolicyActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudlets_policy_activation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedProperties = config.associatedProperties;
    this._network = config.network;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_properties - computed: false, optional: true, required: false
  private _associatedProperties?: string[]; 
  public get associatedProperties() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_properties'));
  }
  public set associatedProperties(value: string[]) {
    this._associatedProperties = value;
  }
  public resetAssociatedProperties() {
    this._associatedProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedPropertiesInput() {
    return this._associatedProperties;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedProperties),
      network: cdktf.stringToTerraform(this._network),
      policy_id: cdktf.numberToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associatedProperties),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
