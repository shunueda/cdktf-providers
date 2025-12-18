// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbvserverGslbserviceBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding#domainname GslbvserverGslbserviceBinding#domainname}
  */
  readonly domainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding#id GslbvserverGslbserviceBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding#name GslbvserverGslbserviceBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding#order GslbvserverGslbserviceBinding#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding#servicename GslbvserverGslbserviceBinding#servicename}
  */
  readonly servicename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding#weight GslbvserverGslbserviceBinding#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding citrixadc_gslbvserver_gslbservice_binding}
*/
export class GslbvserverGslbserviceBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbvserver_gslbservice_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbvserverGslbserviceBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbvserverGslbserviceBinding to import
  * @param importFromId The id of the existing GslbvserverGslbserviceBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbvserverGslbserviceBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbvserver_gslbservice_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/gslbvserver_gslbservice_binding citrixadc_gslbvserver_gslbservice_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbvserverGslbserviceBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GslbvserverGslbserviceBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbvserver_gslbservice_binding',
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
    this._domainname = config.domainname;
    this._id = config.id;
    this._name = config.name;
    this._order = config.order;
    this._servicename = config.servicename;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domainname - computed: true, optional: true, required: false
  private _domainname?: string; 
  public get domainname() {
    return this.getStringAttribute('domainname');
  }
  public set domainname(value: string) {
    this._domainname = value;
  }
  public resetDomainname() {
    this._domainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainnameInput() {
    return this._domainname;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
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

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domainname: cdktf.stringToTerraform(this._domainname),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      servicename: cdktf.stringToTerraform(this._servicename),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domainname: {
        value: cdktf.stringToHclTerraform(this._domainname),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servicename: {
        value: cdktf.stringToHclTerraform(this._servicename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
