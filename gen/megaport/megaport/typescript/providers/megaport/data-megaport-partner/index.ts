// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMegaportPartnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the company that owns the partner port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner#company_name DataMegaportPartner#company_name}
  */
  readonly companyName?: string;
  /**
  * The unique identifier of the company that owns the partner port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner#company_uid DataMegaportPartner#company_uid}
  */
  readonly companyUid?: string;
  /**
  * The type of connection for the partner port. Filters the locations based on the cloud providers, such as AWS (for Hosted VIF), AWSHC (for Hosted Connection), AZURE, GOOGLE, ORACLE, OUTSCALE, and IBM. Use TRANSIT to display Ports that support a Megaport Internet connection. Use FRANCEIX to display France-IX Ports that you can connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner#connect_type DataMegaportPartner#connect_type}
  */
  readonly connectType?: string;
  /**
  * The diversity zone of the partner port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner#diversity_zone DataMegaportPartner#diversity_zone}
  */
  readonly diversityZone?: string;
  /**
  * The unique identifier of the location of the partner port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner#location_id DataMegaportPartner#location_id}
  */
  readonly locationId?: number;
  /**
  * The name of the partner port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner#product_name DataMegaportPartner#product_name}
  */
  readonly productName?: string;
  /**
  * The unique identifier of the partner port. This ID may change when port parameters are modified, especially when changing which port has vxc_permitted: true. This can cause warnings like "VXC B-End product UID is from a partner port, therefore it will not be changed" during unrelated modifications. To ensure stability after establishing your connections, explicitly set this value in your configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner#product_uid DataMegaportPartner#product_uid}
  */
  readonly productUid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner megaport_partner}
*/
export class DataMegaportPartner extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport_partner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMegaportPartner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMegaportPartner to import
  * @param importFromId The id of the existing DataMegaportPartner that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMegaportPartner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport_partner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/data-sources/partner megaport_partner} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMegaportPartnerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMegaportPartnerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'megaport_partner',
      terraformGeneratorMetadata: {
        providerName: 'megaport',
        providerVersion: '1.4.6',
        providerVersionConstraint: '1.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._companyName = config.companyName;
    this._companyUid = config.companyUid;
    this._connectType = config.connectType;
    this._diversityZone = config.diversityZone;
    this._locationId = config.locationId;
    this._productName = config.productName;
    this._productUid = config.productUid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_name - computed: true, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // company_uid - computed: true, optional: true, required: false
  private _companyUid?: string; 
  public get companyUid() {
    return this.getStringAttribute('company_uid');
  }
  public set companyUid(value: string) {
    this._companyUid = value;
  }
  public resetCompanyUid() {
    this._companyUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyUidInput() {
    return this._companyUid;
  }

  // connect_type - computed: true, optional: true, required: false
  private _connectType?: string; 
  public get connectType() {
    return this.getStringAttribute('connect_type');
  }
  public set connectType(value: string) {
    this._connectType = value;
  }
  public resetConnectType() {
    this._connectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTypeInput() {
    return this._connectType;
  }

  // diversity_zone - computed: true, optional: true, required: false
  private _diversityZone?: string; 
  public get diversityZone() {
    return this.getStringAttribute('diversity_zone');
  }
  public set diversityZone(value: string) {
    this._diversityZone = value;
  }
  public resetDiversityZone() {
    this._diversityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diversityZoneInput() {
    return this._diversityZone;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // product_name - computed: true, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // product_uid - computed: true, optional: true, required: false
  private _productUid?: string; 
  public get productUid() {
    return this.getStringAttribute('product_uid');
  }
  public set productUid(value: string) {
    this._productUid = value;
  }
  public resetProductUid() {
    this._productUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productUidInput() {
    return this._productUid;
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getNumberAttribute('speed');
  }

  // vxc_permitted - computed: true, optional: false, required: false
  public get vxcPermitted() {
    return this.getBooleanAttribute('vxc_permitted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company_name: cdktf.stringToTerraform(this._companyName),
      company_uid: cdktf.stringToTerraform(this._companyUid),
      connect_type: cdktf.stringToTerraform(this._connectType),
      diversity_zone: cdktf.stringToTerraform(this._diversityZone),
      location_id: cdktf.numberToTerraform(this._locationId),
      product_name: cdktf.stringToTerraform(this._productName),
      product_uid: cdktf.stringToTerraform(this._productUid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company_name: {
        value: cdktf.stringToHclTerraform(this._companyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_uid: {
        value: cdktf.stringToHclTerraform(this._companyUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_type: {
        value: cdktf.stringToHclTerraform(this._connectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diversity_zone: {
        value: cdktf.stringToHclTerraform(this._diversityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_uid: {
        value: cdktf.stringToHclTerraform(this._productUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
