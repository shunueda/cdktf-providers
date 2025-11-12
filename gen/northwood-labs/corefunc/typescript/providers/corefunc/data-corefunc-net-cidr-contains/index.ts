// https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/net_cidr_contains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncNetCidrContainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * An IP address or CIDR range to check as a contained range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/net_cidr_contains#contained_ip_or_cidr DataCorefuncNetCidrContains#contained_ip_or_cidr}
  */
  readonly containedIpOrCidr: string;
  /**
  * A CIDR range to check as a containing range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/net_cidr_contains#containing_cidr DataCorefuncNetCidrContains#containing_cidr}
  */
  readonly containingCidr: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/net_cidr_contains corefunc_net_cidr_contains}
*/
export class DataCorefuncNetCidrContains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_net_cidr_contains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncNetCidrContains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncNetCidrContains to import
  * @param importFromId The id of the existing DataCorefuncNetCidrContains that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/net_cidr_contains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncNetCidrContains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_net_cidr_contains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/net_cidr_contains corefunc_net_cidr_contains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncNetCidrContainsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncNetCidrContainsConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_net_cidr_contains',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containedIpOrCidr = config.containedIpOrCidr;
    this._containingCidr = config.containingCidr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contained_ip_or_cidr - computed: false, optional: false, required: true
  private _containedIpOrCidr?: string; 
  public get containedIpOrCidr() {
    return this.getStringAttribute('contained_ip_or_cidr');
  }
  public set containedIpOrCidr(value: string) {
    this._containedIpOrCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containedIpOrCidrInput() {
    return this._containedIpOrCidr;
  }

  // containing_cidr - computed: false, optional: false, required: true
  private _containingCidr?: string; 
  public get containingCidr() {
    return this.getStringAttribute('containing_cidr');
  }
  public set containingCidr(value: string) {
    this._containingCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containingCidrInput() {
    return this._containingCidr;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contained_ip_or_cidr: cdktf.stringToTerraform(this._containedIpOrCidr),
      containing_cidr: cdktf.stringToTerraform(this._containingCidr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contained_ip_or_cidr: {
        value: cdktf.stringToHclTerraform(this._containedIpOrCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      containing_cidr: {
        value: cdktf.stringToHclTerraform(this._containingCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
