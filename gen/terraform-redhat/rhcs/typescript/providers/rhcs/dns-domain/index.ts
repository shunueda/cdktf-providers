// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/dns_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies the cluster architecture of the dns domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/dns_domain#cluster_arch DnsDomain#cluster_arch}
  */
  readonly clusterArch?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/dns_domain rhcs_dns_domain}
*/
export class DnsDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_dns_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsDomain to import
  * @param importFromId The id of the existing DnsDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/dns_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_dns_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/dns_domain rhcs_dns_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnsDomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rhcs_dns_domain',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2',
        providerVersionConstraint: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterArch = config.clusterArch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_arch - computed: false, optional: true, required: false
  private _clusterArch?: string; 
  public get clusterArch() {
    return this.getStringAttribute('cluster_arch');
  }
  public set clusterArch(value: string) {
    this._clusterArch = value;
  }
  public resetClusterArch() {
    this._clusterArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArchInput() {
    return this._clusterArch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arch: cdktf.stringToTerraform(this._clusterArch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_arch: {
        value: cdktf.stringToHclTerraform(this._clusterArch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
