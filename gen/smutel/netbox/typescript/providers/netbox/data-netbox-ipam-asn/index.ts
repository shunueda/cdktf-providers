// https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_asn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetboxIpamAsnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The asn number of this asn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_asn#asn DataNetboxIpamAsn#asn}
  */
  readonly asn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_asn#id DataNetboxIpamAsn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The rir for this asn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_asn#rir_id DataNetboxIpamAsn#rir_id}
  */
  readonly rirId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_asn netbox_ipam_asn}
*/
export class DataNetboxIpamAsn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_ipam_asn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetboxIpamAsn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetboxIpamAsn to import
  * @param importFromId The id of the existing DataNetboxIpamAsn that should be imported. Refer to the {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_asn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetboxIpamAsn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_ipam_asn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/data-sources/ipam_asn netbox_ipam_asn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetboxIpamAsnConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetboxIpamAsnConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_ipam_asn',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '8.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._id = config.id;
    this._rirId = config.rirId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
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

  // rir_id - computed: false, optional: false, required: true
  private _rirId?: number; 
  public get rirId() {
    return this.getNumberAttribute('rir_id');
  }
  public set rirId(value: number) {
    this._rirId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rirIdInput() {
    return this._rirId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.numberToTerraform(this._asn),
      id: cdktf.stringToTerraform(this._id),
      rir_id: cdktf.numberToTerraform(this._rirId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rir_id: {
        value: cdktf.numberToHclTerraform(this._rirId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
