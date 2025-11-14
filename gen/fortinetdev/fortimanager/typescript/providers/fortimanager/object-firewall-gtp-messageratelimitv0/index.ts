// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallGtpMessageratelimitv0Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0#adom ObjectFirewallGtpMessageratelimitv0#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0#create_pdp_request ObjectFirewallGtpMessageratelimitv0#create_pdp_request}
  */
  readonly createPdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0#delete_pdp_request ObjectFirewallGtpMessageratelimitv0#delete_pdp_request}
  */
  readonly deletePdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0#echo_request ObjectFirewallGtpMessageratelimitv0#echo_request}
  */
  readonly echoRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0#gtp ObjectFirewallGtpMessageratelimitv0#gtp}
  */
  readonly gtp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0#id ObjectFirewallGtpMessageratelimitv0#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0#scopetype ObjectFirewallGtpMessageratelimitv0#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0 fortimanager_object_firewall_gtp_messageratelimitv0}
*/
export class ObjectFirewallGtpMessageratelimitv0 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_gtp_messageratelimitv0";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallGtpMessageratelimitv0 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallGtpMessageratelimitv0 to import
  * @param importFromId The id of the existing ObjectFirewallGtpMessageratelimitv0 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallGtpMessageratelimitv0 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_gtp_messageratelimitv0", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_gtp_messageratelimitv0 fortimanager_object_firewall_gtp_messageratelimitv0} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallGtpMessageratelimitv0Config
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallGtpMessageratelimitv0Config) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_gtp_messageratelimitv0',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._createPdpRequest = config.createPdpRequest;
    this._deletePdpRequest = config.deletePdpRequest;
    this._echoRequest = config.echoRequest;
    this._gtp = config.gtp;
    this._id = config.id;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // create_pdp_request - computed: false, optional: true, required: false
  private _createPdpRequest?: number; 
  public get createPdpRequest() {
    return this.getNumberAttribute('create_pdp_request');
  }
  public set createPdpRequest(value: number) {
    this._createPdpRequest = value;
  }
  public resetCreatePdpRequest() {
    this._createPdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPdpRequestInput() {
    return this._createPdpRequest;
  }

  // delete_pdp_request - computed: false, optional: true, required: false
  private _deletePdpRequest?: number; 
  public get deletePdpRequest() {
    return this.getNumberAttribute('delete_pdp_request');
  }
  public set deletePdpRequest(value: number) {
    this._deletePdpRequest = value;
  }
  public resetDeletePdpRequest() {
    this._deletePdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePdpRequestInput() {
    return this._deletePdpRequest;
  }

  // echo_request - computed: false, optional: true, required: false
  private _echoRequest?: number; 
  public get echoRequest() {
    return this.getNumberAttribute('echo_request');
  }
  public set echoRequest(value: number) {
    this._echoRequest = value;
  }
  public resetEchoRequest() {
    this._echoRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoRequestInput() {
    return this._echoRequest;
  }

  // gtp - computed: false, optional: false, required: true
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      create_pdp_request: cdktf.numberToTerraform(this._createPdpRequest),
      delete_pdp_request: cdktf.numberToTerraform(this._deletePdpRequest),
      echo_request: cdktf.numberToTerraform(this._echoRequest),
      gtp: cdktf.stringToTerraform(this._gtp),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_pdp_request: {
        value: cdktf.numberToHclTerraform(this._createPdpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_pdp_request: {
        value: cdktf.numberToHclTerraform(this._deletePdpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      echo_request: {
        value: cdktf.numberToHclTerraform(this._echoRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp: {
        value: cdktf.stringToHclTerraform(this._gtp),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
