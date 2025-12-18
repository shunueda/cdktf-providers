// https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/lbaas_network_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcLbaasNetworkCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The TLS Certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/lbaas_network_certificate#id DataMgcLbaasNetworkCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The Network Load Balancer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/lbaas_network_certificate#lb_id DataMgcLbaasNetworkCertificate#lb_id}
  */
  readonly lbId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/lbaas_network_certificate mgc_lbaas_network_certificate}
*/
export class DataMgcLbaasNetworkCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_lbaas_network_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcLbaasNetworkCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcLbaasNetworkCertificate to import
  * @param importFromId The id of the existing DataMgcLbaasNetworkCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/lbaas_network_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcLbaasNetworkCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_lbaas_network_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/lbaas_network_certificate mgc_lbaas_network_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcLbaasNetworkCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataMgcLbaasNetworkCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_lbaas_network_certificate',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.1',
        providerVersionConstraint: '0.41.1'
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
    this._lbId = config.lbId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lb_id - computed: false, optional: false, required: true
  private _lbId?: string; 
  public get lbId() {
    return this.getStringAttribute('lb_id');
  }
  public set lbId(value: string) {
    this._lbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbIdInput() {
    return this._lbId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lb_id: cdktf.stringToTerraform(this._lbId),
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
      lb_id: {
        value: cdktf.stringToHclTerraform(this._lbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
