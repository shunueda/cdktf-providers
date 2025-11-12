// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_default_ingress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HcpDefaultIngressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the cluster. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_default_ingress#cluster HcpDefaultIngress#cluster}
  */
  readonly cluster: string;
  /**
  * Listening Method for apps ingress. Options are external,internal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_default_ingress#listening_method HcpDefaultIngress#listening_method}
  */
  readonly listeningMethod: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_default_ingress rhcs_hcp_default_ingress}
*/
export class HcpDefaultIngress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_hcp_default_ingress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HcpDefaultIngress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HcpDefaultIngress to import
  * @param importFromId The id of the existing HcpDefaultIngress that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_default_ingress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HcpDefaultIngress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_hcp_default_ingress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_default_ingress rhcs_hcp_default_ingress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HcpDefaultIngressConfig
  */
  public constructor(scope: Construct, id: string, config: HcpDefaultIngressConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_hcp_default_ingress',
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
    this._cluster = config.cluster;
    this._listeningMethod = config.listeningMethod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listening_method - computed: false, optional: false, required: true
  private _listeningMethod?: string; 
  public get listeningMethod() {
    return this.getStringAttribute('listening_method');
  }
  public set listeningMethod(value: string) {
    this._listeningMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningMethodInput() {
    return this._listeningMethod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      listening_method: cdktf.stringToTerraform(this._listeningMethod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listening_method: {
        value: cdktf.stringToHclTerraform(this._listeningMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
