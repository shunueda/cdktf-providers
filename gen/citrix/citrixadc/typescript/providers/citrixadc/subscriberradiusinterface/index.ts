// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/subscriberradiusinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriberradiusinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/subscriberradiusinterface#id Subscriberradiusinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/subscriberradiusinterface#listeningservice Subscriberradiusinterface#listeningservice}
  */
  readonly listeningservice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/subscriberradiusinterface#radiusinterimasstart Subscriberradiusinterface#radiusinterimasstart}
  */
  readonly radiusinterimasstart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/subscriberradiusinterface citrixadc_subscriberradiusinterface}
*/
export class Subscriberradiusinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_subscriberradiusinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subscriberradiusinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subscriberradiusinterface to import
  * @param importFromId The id of the existing Subscriberradiusinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/subscriberradiusinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subscriberradiusinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_subscriberradiusinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/subscriberradiusinterface citrixadc_subscriberradiusinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriberradiusinterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SubscriberradiusinterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_subscriberradiusinterface',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._listeningservice = config.listeningservice;
    this._radiusinterimasstart = config.radiusinterimasstart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // listeningservice - computed: true, optional: true, required: false
  private _listeningservice?: string; 
  public get listeningservice() {
    return this.getStringAttribute('listeningservice');
  }
  public set listeningservice(value: string) {
    this._listeningservice = value;
  }
  public resetListeningservice() {
    this._listeningservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningserviceInput() {
    return this._listeningservice;
  }

  // radiusinterimasstart - computed: true, optional: true, required: false
  private _radiusinterimasstart?: string; 
  public get radiusinterimasstart() {
    return this.getStringAttribute('radiusinterimasstart');
  }
  public set radiusinterimasstart(value: string) {
    this._radiusinterimasstart = value;
  }
  public resetRadiusinterimasstart() {
    this._radiusinterimasstart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusinterimasstartInput() {
    return this._radiusinterimasstart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      listeningservice: cdktf.stringToTerraform(this._listeningservice),
      radiusinterimasstart: cdktf.stringToTerraform(this._radiusinterimasstart),
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
      listeningservice: {
        value: cdktf.stringToHclTerraform(this._listeningservice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radiusinterimasstart: {
        value: cdktf.stringToHclTerraform(this._radiusinterimasstart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
