// https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/offer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJujuOfferConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the offering controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/offer#offering_controller DataJujuOffer#offering_controller}
  */
  readonly offeringController?: string;
  /**
  * The offer URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/offer#url DataJujuOffer#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/offer juju_offer}
*/
export class DataJujuOffer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_offer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJujuOffer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJujuOffer to import
  * @param importFromId The id of the existing DataJujuOffer that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/offer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJujuOffer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_offer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/offer juju_offer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJujuOfferConfig
  */
  public constructor(scope: Construct, id: string, config: DataJujuOfferConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_offer',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.1.1',
        providerVersionConstraint: '1.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._offeringController = config.offeringController;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return cdktf.Fn.tolist(this.getListAttribute('endpoints'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // offering_controller - computed: false, optional: true, required: false
  private _offeringController?: string; 
  public get offeringController() {
    return this.getStringAttribute('offering_controller');
  }
  public set offeringController(value: string) {
    this._offeringController = value;
  }
  public resetOfferingController() {
    this._offeringController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offeringControllerInput() {
    return this._offeringController;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      offering_controller: cdktf.stringToTerraform(this._offeringController),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      offering_controller: {
        value: cdktf.stringToHclTerraform(this._offeringController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
