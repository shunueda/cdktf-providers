// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscaleprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile#apikey Autoscaleprofile#apikey}
  */
  readonly apikey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile#id Autoscaleprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile#name Autoscaleprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile#sharedsecret Autoscaleprofile#sharedsecret}
  */
  readonly sharedsecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile#type Autoscaleprofile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile#url Autoscaleprofile#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile citrixadc_autoscaleprofile}
*/
export class Autoscaleprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_autoscaleprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Autoscaleprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Autoscaleprofile to import
  * @param importFromId The id of the existing Autoscaleprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Autoscaleprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_autoscaleprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/autoscaleprofile citrixadc_autoscaleprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscaleprofileConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscaleprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_autoscaleprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
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
    this._apikey = config.apikey;
    this._id = config.id;
    this._name = config.name;
    this._sharedsecret = config.sharedsecret;
    this._type = config.type;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apikey - computed: true, optional: true, required: false
  private _apikey?: string; 
  public get apikey() {
    return this.getStringAttribute('apikey');
  }
  public set apikey(value: string) {
    this._apikey = value;
  }
  public resetApikey() {
    this._apikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sharedsecret - computed: true, optional: true, required: false
  private _sharedsecret?: string; 
  public get sharedsecret() {
    return this.getStringAttribute('sharedsecret');
  }
  public set sharedsecret(value: string) {
    this._sharedsecret = value;
  }
  public resetSharedsecret() {
    this._sharedsecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedsecretInput() {
    return this._sharedsecret;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
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
      apikey: cdktf.stringToTerraform(this._apikey),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sharedsecret: cdktf.stringToTerraform(this._sharedsecret),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apikey: {
        value: cdktf.stringToHclTerraform(this._apikey),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharedsecret: {
        value: cdktf.stringToHclTerraform(this._sharedsecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
