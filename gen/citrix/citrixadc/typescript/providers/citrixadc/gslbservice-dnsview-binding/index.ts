// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservice_dnsview_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbserviceDnsviewBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservice_dnsview_binding#id GslbserviceDnsviewBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservice_dnsview_binding#servicename GslbserviceDnsviewBinding#servicename}
  */
  readonly servicename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservice_dnsview_binding#viewip GslbserviceDnsviewBinding#viewip}
  */
  readonly viewip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservice_dnsview_binding#viewname GslbserviceDnsviewBinding#viewname}
  */
  readonly viewname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservice_dnsview_binding citrixadc_gslbservice_dnsview_binding}
*/
export class GslbserviceDnsviewBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbservice_dnsview_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbserviceDnsviewBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbserviceDnsviewBinding to import
  * @param importFromId The id of the existing GslbserviceDnsviewBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservice_dnsview_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbserviceDnsviewBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbservice_dnsview_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservice_dnsview_binding citrixadc_gslbservice_dnsview_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbserviceDnsviewBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GslbserviceDnsviewBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbservice_dnsview_binding',
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
    this._servicename = config.servicename;
    this._viewip = config.viewip;
    this._viewname = config.viewname;
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

  // servicename - computed: false, optional: false, required: true
  private _servicename?: string; 
  public get servicename() {
    return this.getStringAttribute('servicename');
  }
  public set servicename(value: string) {
    this._servicename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenameInput() {
    return this._servicename;
  }

  // viewip - computed: true, optional: true, required: false
  private _viewip?: string; 
  public get viewip() {
    return this.getStringAttribute('viewip');
  }
  public set viewip(value: string) {
    this._viewip = value;
  }
  public resetViewip() {
    this._viewip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewipInput() {
    return this._viewip;
  }

  // viewname - computed: false, optional: false, required: true
  private _viewname?: string; 
  public get viewname() {
    return this.getStringAttribute('viewname');
  }
  public set viewname(value: string) {
    this._viewname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewnameInput() {
    return this._viewname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      servicename: cdktf.stringToTerraform(this._servicename),
      viewip: cdktf.stringToTerraform(this._viewip),
      viewname: cdktf.stringToTerraform(this._viewname),
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
      servicename: {
        value: cdktf.stringToHclTerraform(this._servicename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      viewip: {
        value: cdktf.stringToHclTerraform(this._viewip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      viewname: {
        value: cdktf.stringToHclTerraform(this._viewname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
