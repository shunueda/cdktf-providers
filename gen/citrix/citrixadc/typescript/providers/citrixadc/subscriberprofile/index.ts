// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriberprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile#id Subscriberprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile#ip Subscriberprofile#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile#servicepath Subscriberprofile#servicepath}
  */
  readonly servicepath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile#subscriberrules Subscriberprofile#subscriberrules}
  */
  readonly subscriberrules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile#subscriptionidtype Subscriberprofile#subscriptionidtype}
  */
  readonly subscriptionidtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile#subscriptionidvalue Subscriberprofile#subscriptionidvalue}
  */
  readonly subscriptionidvalue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile#vlan Subscriberprofile#vlan}
  */
  readonly vlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile citrixadc_subscriberprofile}
*/
export class Subscriberprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_subscriberprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subscriberprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subscriberprofile to import
  * @param importFromId The id of the existing Subscriberprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subscriberprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_subscriberprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberprofile citrixadc_subscriberprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriberprofileConfig
  */
  public constructor(scope: Construct, id: string, config: SubscriberprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_subscriberprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._ip = config.ip;
    this._servicepath = config.servicepath;
    this._subscriberrules = config.subscriberrules;
    this._subscriptionidtype = config.subscriptionidtype;
    this._subscriptionidvalue = config.subscriptionidvalue;
    this._vlan = config.vlan;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // servicepath - computed: true, optional: true, required: false
  private _servicepath?: string; 
  public get servicepath() {
    return this.getStringAttribute('servicepath');
  }
  public set servicepath(value: string) {
    this._servicepath = value;
  }
  public resetServicepath() {
    this._servicepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicepathInput() {
    return this._servicepath;
  }

  // subscriberrules - computed: true, optional: true, required: false
  private _subscriberrules?: string[]; 
  public get subscriberrules() {
    return this.getListAttribute('subscriberrules');
  }
  public set subscriberrules(value: string[]) {
    this._subscriberrules = value;
  }
  public resetSubscriberrules() {
    this._subscriberrules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberrulesInput() {
    return this._subscriberrules;
  }

  // subscriptionidtype - computed: true, optional: true, required: false
  private _subscriptionidtype?: string; 
  public get subscriptionidtype() {
    return this.getStringAttribute('subscriptionidtype');
  }
  public set subscriptionidtype(value: string) {
    this._subscriptionidtype = value;
  }
  public resetSubscriptionidtype() {
    this._subscriptionidtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionidtypeInput() {
    return this._subscriptionidtype;
  }

  // subscriptionidvalue - computed: true, optional: true, required: false
  private _subscriptionidvalue?: string; 
  public get subscriptionidvalue() {
    return this.getStringAttribute('subscriptionidvalue');
  }
  public set subscriptionidvalue(value: string) {
    this._subscriptionidvalue = value;
  }
  public resetSubscriptionidvalue() {
    this._subscriptionidvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionidvalueInput() {
    return this._subscriptionidvalue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      servicepath: cdktf.stringToTerraform(this._servicepath),
      subscriberrules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriberrules),
      subscriptionidtype: cdktf.stringToTerraform(this._subscriptionidtype),
      subscriptionidvalue: cdktf.stringToTerraform(this._subscriptionidvalue),
      vlan: cdktf.numberToTerraform(this._vlan),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicepath: {
        value: cdktf.stringToHclTerraform(this._servicepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriberrules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriberrules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subscriptionidtype: {
        value: cdktf.stringToHclTerraform(this._subscriptionidtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriptionidvalue: {
        value: cdktf.stringToHclTerraform(this._subscriptionidvalue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
