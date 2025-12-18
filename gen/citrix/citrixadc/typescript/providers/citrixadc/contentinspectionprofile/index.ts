// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentinspectionprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile#egressinterface Contentinspectionprofile#egressinterface}
  */
  readonly egressinterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile#egressvlan Contentinspectionprofile#egressvlan}
  */
  readonly egressvlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile#id Contentinspectionprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile#ingressinterface Contentinspectionprofile#ingressinterface}
  */
  readonly ingressinterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile#ingressvlan Contentinspectionprofile#ingressvlan}
  */
  readonly ingressvlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile#iptunnel Contentinspectionprofile#iptunnel}
  */
  readonly iptunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile#name Contentinspectionprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile#type Contentinspectionprofile#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile citrixadc_contentinspectionprofile}
*/
export class Contentinspectionprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_contentinspectionprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Contentinspectionprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Contentinspectionprofile to import
  * @param importFromId The id of the existing Contentinspectionprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Contentinspectionprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_contentinspectionprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionprofile citrixadc_contentinspectionprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentinspectionprofileConfig
  */
  public constructor(scope: Construct, id: string, config: ContentinspectionprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_contentinspectionprofile',
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
    this._egressinterface = config.egressinterface;
    this._egressvlan = config.egressvlan;
    this._id = config.id;
    this._ingressinterface = config.ingressinterface;
    this._ingressvlan = config.ingressvlan;
    this._iptunnel = config.iptunnel;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egressinterface - computed: true, optional: true, required: false
  private _egressinterface?: string; 
  public get egressinterface() {
    return this.getStringAttribute('egressinterface');
  }
  public set egressinterface(value: string) {
    this._egressinterface = value;
  }
  public resetEgressinterface() {
    this._egressinterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressinterfaceInput() {
    return this._egressinterface;
  }

  // egressvlan - computed: true, optional: true, required: false
  private _egressvlan?: number; 
  public get egressvlan() {
    return this.getNumberAttribute('egressvlan');
  }
  public set egressvlan(value: number) {
    this._egressvlan = value;
  }
  public resetEgressvlan() {
    this._egressvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressvlanInput() {
    return this._egressvlan;
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

  // ingressinterface - computed: true, optional: true, required: false
  private _ingressinterface?: string; 
  public get ingressinterface() {
    return this.getStringAttribute('ingressinterface');
  }
  public set ingressinterface(value: string) {
    this._ingressinterface = value;
  }
  public resetIngressinterface() {
    this._ingressinterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressinterfaceInput() {
    return this._ingressinterface;
  }

  // ingressvlan - computed: true, optional: true, required: false
  private _ingressvlan?: number; 
  public get ingressvlan() {
    return this.getNumberAttribute('ingressvlan');
  }
  public set ingressvlan(value: number) {
    this._ingressvlan = value;
  }
  public resetIngressvlan() {
    this._ingressvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressvlanInput() {
    return this._ingressvlan;
  }

  // iptunnel - computed: true, optional: true, required: false
  private _iptunnel?: string; 
  public get iptunnel() {
    return this.getStringAttribute('iptunnel');
  }
  public set iptunnel(value: string) {
    this._iptunnel = value;
  }
  public resetIptunnel() {
    this._iptunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptunnelInput() {
    return this._iptunnel;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      egressinterface: cdktf.stringToTerraform(this._egressinterface),
      egressvlan: cdktf.numberToTerraform(this._egressvlan),
      id: cdktf.stringToTerraform(this._id),
      ingressinterface: cdktf.stringToTerraform(this._ingressinterface),
      ingressvlan: cdktf.numberToTerraform(this._ingressvlan),
      iptunnel: cdktf.stringToTerraform(this._iptunnel),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      egressinterface: {
        value: cdktf.stringToHclTerraform(this._egressinterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egressvlan: {
        value: cdktf.numberToHclTerraform(this._egressvlan),
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
      ingressinterface: {
        value: cdktf.stringToHclTerraform(this._ingressinterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingressvlan: {
        value: cdktf.numberToHclTerraform(this._ingressvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iptunnel: {
        value: cdktf.stringToHclTerraform(this._iptunnel),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
