// https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/ip_allowlists
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAllowlistsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature is a specified component in your Splunk Cloud Platform. Eg: search-api, hec, etc. No two resources should have the same feature. Use this value as the resource name itself to enforce this rule. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/ip_allowlists#feature IpAllowlists#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/ip_allowlists#id IpAllowlists#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Subnets is a list of IP addresses that have access to the corresponding feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/ip_allowlists#subnets IpAllowlists#subnets}
  */
  readonly subnets: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/ip_allowlists scp_ip_allowlists}
*/
export class IpAllowlists extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scp_ip_allowlists";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAllowlists resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAllowlists to import
  * @param importFromId The id of the existing IpAllowlists that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/ip_allowlists#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAllowlists to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scp_ip_allowlists", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/ip_allowlists scp_ip_allowlists} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAllowlistsConfig
  */
  public constructor(scope: Construct, id: string, config: IpAllowlistsConfig) {
    super(scope, id, {
      terraformResourceType: 'scp_ip_allowlists',
      terraformGeneratorMetadata: {
        providerName: 'scp',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._feature = config.feature;
    this._id = config.id;
    this._subnets = config.subnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
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

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature: cdktf.stringToTerraform(this._feature),
      id: cdktf.stringToTerraform(this._id),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature: {
        value: cdktf.stringToHclTerraform(this._feature),
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
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
